#!/usr/bin/env node

/**
 * Notion キャッシュ システム ダッシュボード
 * 総合的な状況表示とレポート生成
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  validateCacheHealth,
  getCacheStats,
  loadCacheMetadata 
} from '../../lib/cache-loader.js';
import { DATABASES, UPDATE_STRATEGIES } from './database-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PERFORMANCE_LOG_FILE = path.resolve(__dirname, '../../cache/performance.json');
const MONITOR_LOG_FILE = path.resolve(__dirname, '../../cache/monitor.log');

/**
 * ダッシュボードデータ収集
 */
async function collectDashboardData() {
  const data = {
    timestamp: new Date().toISOString(),
    system: {},
    cache: {},
    performance: {},
    alerts: {},
    recommendations: []
  };
  
  try {
    // 1. システム情報
    data.system = {
      nodeVersion: process.version,
      platform: process.platform,
      environment: process.env.NODE_ENV || 'development',
      branch: process.env.GITHUB_REF_NAME || 'local',
      hostname: process.env.HOSTNAME || 'unknown'
    };
    
    // 2. キャッシュ健全性
    const health = await validateCacheHealth();
    data.cache.health = health;
    
    // 3. キャッシュ統計
    const stats = await getCacheStats();
    data.cache.stats = stats;
    
    // 4. メタデータ
    const metadata = await loadCacheMetadata();
    data.cache.metadata = metadata;
    
    // 5. パフォーマンスデータ
    try {
      const perfData = await fs.readFile(PERFORMANCE_LOG_FILE, 'utf-8');
      const perfLogs = JSON.parse(perfData);
      data.performance.history = perfLogs.slice(-10); // 最新10件
      
      if (perfLogs.length > 0) {
        const latest = perfLogs[perfLogs.length - 1];
        data.performance.latest = latest;
      }
    } catch {
      data.performance.history = [];
    }
    
    // 6. アラート履歴
    try {
      const alertData = await fs.readFile(MONITOR_LOG_FILE, 'utf-8');
      const alertLines = alertData.split('\n').filter(line => line.trim());
      const recentAlerts = alertLines.slice(-20).map(line => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      }).filter(Boolean);
      
      data.alerts.recent = recentAlerts;
      data.alerts.counts = {
        info: recentAlerts.filter(a => a.level === 'info').length,
        warning: recentAlerts.filter(a => a.level === 'warning').length,
        error: recentAlerts.filter(a => a.level === 'error').length,
        critical: recentAlerts.filter(a => a.level === 'critical').length
      };
    } catch {
      data.alerts.recent = [];
      data.alerts.counts = { info: 0, warning: 0, error: 0, critical: 0 };
    }
    
    // 7. 推奨事項生成
    data.recommendations = generateRecommendations(data);
    
  } catch (error) {
    console.error('❌ ダッシュボードデータ収集エラー:', error.message);
  }
  
  return data;
}

/**
 * 推奨事項生成
 */
function generateRecommendations(data) {
  const recommendations = [];
  
  // キャッシュ健全性チェック
  if (data.cache.health?.status !== 'healthy') {
    recommendations.push({
      type: 'health',
      priority: 'high',
      message: 'キャッシュシステムに問題があります',
      action: 'yarn cache:monitor で詳細を確認してください'
    });
  }
  
  // キャッシュファイル数チェック
  const expectedFiles = Object.keys(DATABASES).length;
  const actualFiles = data.cache.stats?.totalFiles || 0;
  if (actualFiles < expectedFiles * 0.8) {
    recommendations.push({
      type: 'cache',
      priority: 'medium',
      message: `キャッシュファイル数が不足しています (${actualFiles}/${expectedFiles})`,
      action: 'yarn cache:fetch-all で全データベースを更新してください'
    });
  }
  
  // パフォーマンスチェック
  if (data.performance.latest?.metrics?.cache_efficiency < 0.8) {
    recommendations.push({
      type: 'performance',
      priority: 'medium',
      message: 'キャッシュ効率が低下しています',
      action: 'yarn cache:perf でパフォーマンスを確認してください'
    });
  }
  
  // アラート頻度チェック
  const totalAlerts = Object.values(data.alerts.counts).reduce((a, b) => a + b, 0);
  if (totalAlerts > 10) {
    recommendations.push({
      type: 'alerts',
      priority: 'high',
      message: '最近のアラート数が多すぎます',
      action: 'yarn cache:monitor:logs でアラート原因を調査してください'
    });
  }
  
  // 定期メンテナンス推奨
  if (data.cache.metadata?.lastUpdate) {
    const lastUpdate = new Date(data.cache.metadata.lastUpdate);
    const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSinceUpdate > 7) {
      recommendations.push({
        type: 'maintenance',
        priority: 'low',
        message: `キャッシュが${Math.round(daysSinceUpdate)}日間更新されていません`,
        action: 'yarn cache:update:moderate で更新することを検討してください'
      });
    }
  }
  
  return recommendations;
}

/**
 * ダッシュボード表示
 */
async function showDashboard() {
  console.log('📊 Notion キャッシュ システム ダッシュボード');
  console.log('='.repeat(80));
  
  const data = await collectDashboardData();
  
  // システム情報
  console.log('\n🖥️ システム情報:');
  console.log('─'.repeat(40));
  console.log(`Node.js: ${data.system.nodeVersion}`);
  console.log(`環境: ${data.system.environment}`);
  console.log(`ブランチ: ${data.system.branch}`);
  console.log(`ホスト: ${data.system.hostname}`);
  
  // キャッシュ健全性
  const healthStatus = data.cache.health?.status || 'unknown';
  const healthIcon = {
    healthy: '✅',
    warning: '⚠️',
    error: '❌',
    critical: '🚨',
    unknown: '❓'
  };
  
  console.log('\n🏥 キャッシュ健全性:');
  console.log('─'.repeat(40));
  console.log(`ステータス: ${healthIcon[healthStatus]} ${healthStatus.toUpperCase()}`);
  console.log(`キャッシュファイル: ${data.cache.stats?.totalFiles || 0}/${Object.keys(DATABASES).length}`);
  console.log(`総サイズ: ${Math.round((data.cache.stats?.totalSize || 0) / 1024)}KB`);
  
  if (data.cache.metadata?.lastUpdate) {
    const lastUpdate = new Date(data.cache.metadata.lastUpdate);
    console.log(`最終更新: ${lastUpdate.toLocaleString()}`);
  }
  
  // パフォーマンス
  console.log('\n⚡ パフォーマンス:');
  console.log('─'.repeat(40));
  
  if (data.performance.latest?.metrics) {
    const metrics = data.performance.latest.metrics;
    console.log(`キャッシュ効率: ${(metrics.cache_efficiency * 100).toFixed(1)}%`);
    console.log(`平均読み込み時間: ${metrics.avg_file_read_time?.toFixed(2) || 'N/A'}ms`);
    console.log(`推定時間節約: ${(metrics.time_saved_ms / 1000).toFixed(1)}秒`);
    console.log(`改善率: ${metrics.improvement_ratio?.toFixed(1) || 'N/A'}%`);
  } else {
    console.log('パフォーマンスデータがありません');
    console.log('💡 yarn cache:perf で計測を開始してください');
  }
  
  // アラート状況
  console.log('\n🔔 アラート状況 (最近20件):');
  console.log('─'.repeat(40));
  
  const counts = data.alerts.counts;
  console.log(`📋 INFO: ${counts.info}件`);
  console.log(`⚠️ WARNING: ${counts.warning}件`);
  console.log(`❌ ERROR: ${counts.error}件`);
  console.log(`🚨 CRITICAL: ${counts.critical}件`);
  
  // 更新戦略状況
  console.log('\n📅 更新戦略:');
  console.log('─'.repeat(40));
  
  Object.entries(UPDATE_STRATEGIES).forEach(([frequency, databases]) => {
    console.log(`${frequency}: ${databases.length}個のDB`);
  });
  
  // 推奨事項
  if (data.recommendations.length > 0) {
    console.log('\n💡 推奨事項:');
    console.log('─'.repeat(40));
    
    data.recommendations.forEach((rec, i) => {
      const priorityIcon = {
        high: '🔴',
        medium: '🟡',
        low: '🟢'
      };
      
      console.log(`${i + 1}. ${priorityIcon[rec.priority]} ${rec.message}`);
      console.log(`   👉 ${rec.action}`);
    });
  } else {
    console.log('\n💡 推奨事項:');
    console.log('─'.repeat(40));
    console.log('✅ 全て正常です。継続して監視してください。');
  }
  
  // フッター
  console.log('\n' + '='.repeat(80));
  console.log(`📊 ダッシュボード更新時刻: ${new Date().toLocaleString()}`);
  console.log('💡 詳細情報: yarn cache:monitor, yarn cache:perf, yarn cache:notify');
}

/**
 * HTMLレポート生成
 */
async function generateHTMLReport() {
  const data = await collectDashboardData();
  
  const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notion Cache System Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 30px; }
        .card { background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
        .status-healthy { color: #28a745; }
        .status-warning { color: #ffc107; }
        .status-error { color: #dc3545; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .metric { background: white; padding: 15px; border-radius: 6px; text-align: center; }
        .metric-value { font-size: 24px; font-weight: bold; }
        .metric-label { color: #666; font-size: 14px; }
        .recommendations { background: #fff3cd; border-left: 4px solid #ffc107; }
        .alert-counts { display: flex; gap: 15px; }
        .alert-count { padding: 10px; border-radius: 6px; text-align: center; flex: 1; }
        .alert-info { background: #d1ecf1; }
        .alert-warning { background: #fff3cd; }
        .alert-error { background: #f8d7da; }
        .alert-critical { background: #f5c6cb; }
        pre { background: #f8f9fa; padding: 15px; border-radius: 6px; overflow-x: auto; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Notion Cache System Dashboard</h1>
            <p>Generated: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="card">
            <h2>🖥️ System Information</h2>
            <div class="metrics-grid">
                <div class="metric">
                    <div class="metric-value">${data.system.nodeVersion}</div>
                    <div class="metric-label">Node.js Version</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.system.environment}</div>
                    <div class="metric-label">Environment</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.system.branch}</div>
                    <div class="metric-label">Branch</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h2>🏥 Cache Health</h2>
            <div class="metrics-grid">
                <div class="metric">
                    <div class="metric-value status-${data.cache.health?.status || 'unknown'}">${data.cache.health?.status || 'unknown'}</div>
                    <div class="metric-label">Health Status</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.cache.stats?.totalFiles || 0}/${Object.keys(DATABASES).length}</div>
                    <div class="metric-label">Cache Files</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${Math.round((data.cache.stats?.totalSize || 0) / 1024)}KB</div>
                    <div class="metric-label">Total Size</div>
                </div>
            </div>
        </div>
        
        ${data.performance.latest?.metrics ? `
        <div class="card">
            <h2>⚡ Performance Metrics</h2>
            <div class="metrics-grid">
                <div class="metric">
                    <div class="metric-value">${(data.performance.latest.metrics.cache_efficiency * 100).toFixed(1)}%</div>
                    <div class="metric-label">Cache Efficiency</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.performance.latest.metrics.avg_file_read_time?.toFixed(2) || 'N/A'}ms</div>
                    <div class="metric-label">Avg Read Time</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${(data.performance.latest.metrics.time_saved_ms / 1000).toFixed(1)}s</div>
                    <div class="metric-label">Time Saved</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.performance.latest.metrics.improvement_ratio?.toFixed(1) || 'N/A'}%</div>
                    <div class="metric-label">Improvement</div>
                </div>
            </div>
        </div>
        ` : ''}
        
        <div class="card">
            <h2>🔔 Alert Status</h2>
            <div class="alert-counts">
                <div class="alert-count alert-info">
                    <div class="metric-value">${data.alerts.counts.info}</div>
                    <div class="metric-label">INFO</div>
                </div>
                <div class="alert-count alert-warning">
                    <div class="metric-value">${data.alerts.counts.warning}</div>
                    <div class="metric-label">WARNING</div>
                </div>
                <div class="alert-count alert-error">
                    <div class="metric-value">${data.alerts.counts.error}</div>
                    <div class="metric-label">ERROR</div>
                </div>
                <div class="alert-count alert-critical">
                    <div class="metric-value">${data.alerts.counts.critical}</div>
                    <div class="metric-label">CRITICAL</div>
                </div>
            </div>
        </div>
        
        ${data.recommendations.length > 0 ? `
        <div class="card recommendations">
            <h2>💡 Recommendations</h2>
            <ul>
                ${data.recommendations.map(rec => `
                    <li><strong>${rec.message}</strong><br>
                    <small>Action: ${rec.action}</small></li>
                `).join('')}
            </ul>
        </div>
        ` : `
        <div class="card">
            <h2>💡 Recommendations</h2>
            <p>✅ All systems are operating normally. Continue monitoring.</p>
        </div>
        `}
        
        <div class="card">
            <h2>📊 Raw Data</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
    </div>
</body>
</html>
`;
  
  const reportPath = path.resolve(__dirname, '../../cache/dashboard-report.html');
  await fs.writeFile(reportPath, html);
  
  console.log(`📄 HTMLレポートを生成しました: ${reportPath}`);
  return reportPath;
}

/**
 * JSONレポート生成
 */
async function generateJSONReport() {
  const data = await collectDashboardData();
  const reportPath = path.resolve(__dirname, '../../cache/dashboard-report.json');
  
  await fs.writeFile(reportPath, JSON.stringify(data, null, 2));
  
  console.log(`📄 JSONレポートを生成しました: ${reportPath}`);
  return reportPath;
}

// コマンドライン引数処理
const args = process.argv.slice(2);

async function main() {
  if (args.length === 0) {
    await showDashboard();
    return;
  }
  
  const command = args[0];
  
  switch (command) {
    case 'html':
      await generateHTMLReport();
      break;
      
    case 'json':
      await generateJSONReport();
      break;
      
    case 'all':
      await showDashboard();
      console.log('\n📄 レポート生成中...');
      await generateHTMLReport();
      await generateJSONReport();
      break;
      
    default:
      console.log('使用方法:');
      console.log('  yarn cache:dashboard         # ダッシュボード表示');
      console.log('  yarn cache:dashboard html    # HTMLレポート生成');
      console.log('  yarn cache:dashboard json    # JSONレポート生成');
      console.log('  yarn cache:dashboard all     # 全て実行');
      break;
  }
}

main().catch(error => {
  console.error('💥 ダッシュボードエラー:', error);
  process.exit(1);
});