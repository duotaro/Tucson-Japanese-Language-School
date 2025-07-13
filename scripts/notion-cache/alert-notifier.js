#!/usr/bin/env node

/**
 * アラート通知システム
 * Slack, Email, GitHub Issues等への通知機能
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 通知設定
 */
const NOTIFICATION_CONFIG = {
  // 通知レベル閾値
  levels: {
    info: 0,
    warning: 1,
    error: 2,
    critical: 3
  },
  
  // 各通知チャンネルの最小レベル
  channels: {
    slack: 'warning',
    email: 'error',
    github: 'critical',
    console: 'info'
  },
  
  // 通知レート制限（同じアラートの連続送信を防ぐ）
  rateLimiting: {
    enabled: true,
    windowMinutes: 30,
    maxPerWindow: 3
  }
};

/**
 * Slack通知クラス
 */
class SlackNotifier {
  constructor(webhookUrl) {
    this.webhookUrl = webhookUrl;
  }
  
  async send(alert) {
    if (!this.webhookUrl) {
      console.log('⚠️ Slack Webhook URL が設定されていません');
      return false;
    }
    
    const emoji = {
      info: ':information_source:',
      warning: ':warning:',
      error: ':x:',
      critical: ':rotating_light:'
    };
    
    const color = {
      info: 'good',
      warning: 'warning',
      error: 'danger',
      critical: 'danger'
    };
    
    const payload = {
      username: 'Notion Cache Monitor',
      icon_emoji: ':robot_face:',
      attachments: [{
        color: color[alert.level],
        title: `${emoji[alert.level]} ${alert.level.toUpperCase()}: ${alert.message}`,
        text: alert.details ? '```' + JSON.stringify(alert.details, null, 2) + '```' : '',
        fields: [
          {
            title: 'Timestamp',
            value: new Date(alert.timestamp).toLocaleString(),
            short: true
          },
          {
            title: 'Environment',
            value: alert.environment || 'unknown',
            short: true
          }
        ],
        footer: 'Notion Cache System',
        ts: Math.floor(new Date(alert.timestamp).getTime() / 1000)
      }]
    };
    
    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        console.log('✅ Slack通知送信成功');
        return true;
      } else {
        console.error('❌ Slack通知送信失敗:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('❌ Slack通知エラー:', error.message);
      return false;
    }
  }
}

/**
 * Email通知クラス（基本実装）
 */
class EmailNotifier {
  constructor(config) {
    this.config = config || {};
  }
  
  async send(alert) {
    console.log('📧 Email通知 (実装中):', alert.message);
    
    // 実際のEmail通知実装が必要な場合は、
    // nodemailer等のライブラリを使用してSMTP送信を実装
    
    return true;
  }
}

/**
 * GitHub Issues通知クラス
 */
class GitHubNotifier {
  constructor(token, repo) {
    this.token = token;
    this.repo = repo; // 'owner/repo' 形式
  }
  
  async send(alert) {
    if (!this.token || !this.repo) {
      console.log('⚠️ GitHub token または repo が設定されていません');
      return false;
    }
    
    const issueTitle = `[${alert.level.toUpperCase()}] ${alert.message}`;
    const issueBody = `
## アラート詳細

**レベル**: ${alert.level.toUpperCase()}
**メッセージ**: ${alert.message}
**タイムスタンプ**: ${new Date(alert.timestamp).toLocaleString()}
**環境**: ${alert.environment || 'unknown'}

## 詳細情報

\`\`\`json
${JSON.stringify(alert.details, null, 2)}
\`\`\`

---
*このIssueは自動生成されました by Notion Cache Monitor*
`;
    
    try {
      const response = await fetch(`https://api.github.com/repos/${this.repo}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody,
          labels: ['alert', `severity:${alert.level}`, 'auto-generated']
        })
      });
      
      if (response.ok) {
        const issue = await response.json();
        console.log(`✅ GitHub Issue作成成功: #${issue.number}`);
        return true;
      } else {
        console.error('❌ GitHub Issue作成失敗:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('❌ GitHub通知エラー:', error.message);
      return false;
    }
  }
}

/**
 * レート制限チェック
 */
class RateLimiter {
  constructor() {
    this.alertHistory = new Map();
  }
  
  shouldSend(alert) {
    if (!NOTIFICATION_CONFIG.rateLimiting.enabled) {
      return true;
    }
    
    const key = `${alert.level}:${alert.message}`;
    const now = Date.now();
    const windowMs = NOTIFICATION_CONFIG.rateLimiting.windowMinutes * 60 * 1000;
    
    if (!this.alertHistory.has(key)) {
      this.alertHistory.set(key, []);
    }
    
    const history = this.alertHistory.get(key);
    
    // 古い履歴を削除
    const cutoff = now - windowMs;
    const recentAlerts = history.filter(timestamp => timestamp > cutoff);
    
    // 制限チェック
    if (recentAlerts.length >= NOTIFICATION_CONFIG.rateLimiting.maxPerWindow) {
      console.log(`⏭️ レート制限: ${key} の通知をスキップ`);
      return false;
    }
    
    // 履歴更新
    recentAlerts.push(now);
    this.alertHistory.set(key, recentAlerts);
    
    return true;
  }
}

/**
 * メイン通知マネージャー
 */
class NotificationManager {
  constructor() {
    this.notifiers = {};
    this.rateLimiter = new RateLimiter();
    
    // 環境変数から設定を読み込み
    this.setupNotifiers();
  }
  
  setupNotifiers() {
    // Slack設定
    const slackWebhook = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhook) {
      this.notifiers.slack = new SlackNotifier(slackWebhook);
    }
    
    // Email設定
    this.notifiers.email = new EmailNotifier({
      // SMTP設定等
    });
    
    // GitHub設定
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPOSITORY;
    if (githubToken && githubRepo) {
      this.notifiers.github = new GitHubNotifier(githubToken, githubRepo);
    }
  }
  
  async sendAlert(level, message, details = {}) {
    const alert = {
      level,
      message,
      details,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      hostname: process.env.HOSTNAME || 'unknown',
      branch: process.env.GITHUB_REF_NAME || 'local'
    };
    
    // レート制限チェック
    if (!this.rateLimiter.shouldSend(alert)) {
      return false;
    }
    
    const levelValue = NOTIFICATION_CONFIG.levels[level];
    const results = {};
    
    // 各通知チャンネルに送信
    for (const [channel, minLevel] of Object.entries(NOTIFICATION_CONFIG.channels)) {
      const minLevelValue = NOTIFICATION_CONFIG.levels[minLevel];
      
      if (levelValue >= minLevelValue) {
        if (channel === 'console') {
          console.log(`🔔 [${level.toUpperCase()}] ${message}`);
          if (Object.keys(details).length > 0) {
            console.log('   詳細:', JSON.stringify(details, null, 2));
          }
          results[channel] = true;
        } else if (this.notifiers[channel]) {
          try {
            results[channel] = await this.notifiers[channel].send(alert);
          } catch (error) {
            console.error(`❌ ${channel} 通知エラー:`, error.message);
            results[channel] = false;
          }
        }
      }
    }
    
    return results;
  }
}

/**
 * 通知テスト
 */
async function testNotifications() {
  console.log('🧪 通知機能テスト開始...');
  
  const manager = new NotificationManager();
  
  // 各レベルのテスト通知
  await manager.sendAlert('info', 'テスト用INFO通知', { test: true, feature: 'notification' });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await manager.sendAlert('warning', 'テスト用WARNING通知', { test: true, issue: 'cache_outdated' });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await manager.sendAlert('error', 'テスト用ERROR通知', { test: true, error: 'api_failure' });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await manager.sendAlert('critical', 'テスト用CRITICAL通知', { test: true, severity: 'system_failure' });
  
  console.log('✅ 通知機能テスト完了');
}

/**
 * 環境変数ガイド表示
 */
function showEnvGuide() {
  console.log('🔧 通知機能 環境変数設定ガイド:');
  console.log('='.repeat(60));
  console.log('');
  console.log('## Slack通知');
  console.log('export SLACK_WEBHOOK_URL="https://hooks.slack.com/services/..."');
  console.log('');
  console.log('## GitHub通知');
  console.log('export GITHUB_TOKEN="ghp_..."');
  console.log('export GITHUB_REPOSITORY="owner/repo"');
  console.log('');
  console.log('## その他');
  console.log('export NODE_ENV="production"');
  console.log('export HOSTNAME="server-name"');
  console.log('');
  console.log('💡 GitHub Actions環境では自動設定されます');
}

// コマンドライン引数処理
const args = process.argv.slice(2);

async function main() {
  if (args.length === 0) {
    console.log('使用方法:');
    console.log('  yarn cache:notify test       # 通知テスト');
    console.log('  yarn cache:notify env        # 環境変数ガイド');
    console.log('  yarn cache:notify send LEVEL MESSAGE  # 手動通知');
    process.exit(1);
  }
  
  const command = args[0];
  
  switch (command) {
    case 'test':
      await testNotifications();
      break;
      
    case 'env':
      showEnvGuide();
      break;
      
    case 'send':
      if (args.length < 3) {
        console.error('使用方法: yarn cache:notify send LEVEL MESSAGE');
        process.exit(1);
      }
      
      const level = args[1];
      const message = args.slice(2).join(' ');
      const manager = new NotificationManager();
      
      await manager.sendAlert(level, message, { manual: true });
      break;
      
    default:
      console.error(`不明なコマンド: ${command}`);
      process.exit(1);
  }
}

// モジュールとしてもエクスポート
export { NotificationManager, SlackNotifier, EmailNotifier, GitHubNotifier };

// 直接実行の場合
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('💥 通知システムエラー:', error);
    process.exit(1);
  });
}