// scripts/check-notion-databases.js
// Notionデータベースの存在確認スクリプト

require('dotenv').config({ path: '.env.local' });
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databasesToCheck = [
  { name: 'Philosophy', id: 'f40ad3a82b894969a6a1b0ee0bfcb0cf' },
  { name: 'Policy', id: '105a8c0ecf8c8082a456dd95fd87d0c2' },
  { name: 'About', id: 'd4eb3828e74c469b9179ca7be9edb5cf' },
  { name: 'News', id: process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID },
  { name: 'Slider', id: 'f2bd94d61f7c45958755562d366af5ea' },
  { name: 'Sponsor', id: '1e302ac5bce442b797e491aee309e7c4' },
  { name: 'Greeting', id: '5ceb6b37e4584fa39fb78161869d885f' },
  { name: 'Story', id: '02ed913f2ebe4151b0235d91a9306403' },
  { name: 'History', id: '15c93b4fe6154400902a623b20c6fe49' },
  { name: 'Schedule', id: '8d87080f73f14e8a9e7ba934c1d928c6' },
  { name: 'Opportunity', id: 'd9037016a0524f08adecdbab0c7302b7' },
];

async function checkDatabase(database) {
  try {
    const response = await notion.databases.query({
      database_id: database.id,
      page_size: 1, // 最小限のクエリ
    });
    
    console.log(`✅ ${database.name} (${database.id}): OK - ${response.results.length} pages found`);
    return { ...database, status: 'OK', count: response.results.length };
  } catch (error) {
    if (error.code === 'object_not_found') {
      console.log(`❌ ${database.name} (${database.id}): NOT FOUND`);
      return { ...database, status: 'NOT_FOUND', error: error.message };
    } else if (error.code === 'unauthorized') {
      console.log(`🔒 ${database.name} (${database.id}): UNAUTHORIZED - Check integration permissions`);
      return { ...database, status: 'UNAUTHORIZED', error: error.message };
    } else {
      console.log(`⚠️  ${database.name} (${database.id}): ERROR - ${error.message}`);
      return { ...database, status: 'ERROR', error: error.message };
    }
  }
}

async function main() {
  console.log('🔍 Checking Notion Database Connections...\n');
  console.log(`Using Notion Token: ${process.env.NOTION_TOKEN ? '✅ Set' : '❌ Missing'}`);
  console.log(`News Database ID: ${process.env.NEXT_PUBLIC_NOTION_NEWS_DATABASE_ID || '❌ Missing'}\n`);
  
  const results = [];
  
  for (const database of databasesToCheck) {
    if (!database.id) {
      console.log(`⚠️  ${database.name}: ID is missing`);
      results.push({ ...database, status: 'MISSING_ID' });
      continue;
    }
    
    const result = await checkDatabase(database);
    results.push(result);
  }
  
  // 結果サマリー
  console.log('\n📊 Summary:');
  const summary = results.reduce((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1;
    return acc;
  }, {});
  
  Object.entries(summary).forEach(([status, count]) => {
    console.log(`${status}: ${count} databases`);
  });
  
  // 問題のあるデータベース一覧
  const problemDatabases = results.filter(r => r.status !== 'OK');
  if (problemDatabases.length > 0) {
    console.log('\n❌ Problem Databases:');
    problemDatabases.forEach(db => {
      console.log(`- ${db.name} (${db.id}): ${db.status}`);
      if (db.error) {
        console.log(`  Error: ${db.error}`);
      }
    });
  }
  
  // 代替案の提案
  if (problemDatabases.length > 0) {
    console.log('\n💡 Next Steps:');
    console.log('1. Check Notion workspace for these databases');
    console.log('2. Verify integration permissions');
    console.log('3. Update database IDs in code if moved');
    console.log('4. Or implement fallback handling for missing databases');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { checkDatabase, databasesToCheck };