import { Client } from "@notionhq/client";

// Notionクライアントを遅延初期化
let notion = null;

const getNotionClient = () => {
  if (!notion) {
    const token = process.env.NOTION_API_KEY || process.env.NEXT_PUBLIC_NOTION_TOKEN;
    if (!token) {
      throw new Error('Notion API token is not configured');
    }
    notion = new Client({
      auth: token,
      notionVersion: '2022-06-28',
    });
  }
  return notion;
};

export const getDatabase = async (databaseId) => {

  try {
    const notionClient = getNotionClient();

    // scheduleデータベースには新しいAPIバージョンが必要
    // データベースIDを正規化（ハイフンを削除して比較）
    const normalizedId = databaseId.replace(/-/g, '');
    if (normalizedId === '8d87080f73f14e8a9e7ba934c1d928c6') {
      const token = process.env.NOTION_API_KEY || process.env.NEXT_PUBLIC_NOTION_TOKEN;
      const scheduleClient = new Client({
        auth: token,
        notionVersion: '2022-06-28',
      });
      // ハイフン付きの形式に統一
      const formattedId = '8d87080f-73f1-4e8a-9e7b-a934c1d928c6';
      const response = await scheduleClient.databases.query({
        database_id: formattedId,
      });
      return response.results;
    }

    const response = await notionClient.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch(e) {
    console.log(e)
  }
};

// 最適化されたデータベース取得（必要なプロパティのみ）
export const getOptimizedDatabase = async (
  databaseId, 
  options = {}
) => {
  const {
    pageSize = 50,
    filterProperties = [],
    sorts = [{ timestamp: 'last_edited_time', direction: 'descending' }],
    filter = null
  } = options;

  try {
    const queryParams = {
      database_id: databaseId,
      page_size: pageSize,
      sorts
    };

    // フィルターが指定されている場合のみ追加
    if (filter) {
      queryParams.filter = filter;
    }

    // 必要なプロパティのみ選択（Notion APIの制限により、現在はすべてのプロパティを取得）
    // 将来的にAPIが対応したら、プロパティ選択機能を追加

    const notionClient = getNotionClient();
    const response = await notionClient.databases.query(queryParams);
    
    // クライアント側で不要なプロパティを除外
    if (filterProperties.length > 0) {
      return response.results.map(item => ({
        ...item,
        properties: Object.keys(item.properties)
          .filter(key => filterProperties.includes(key) || key === 'title')
          .reduce((obj, key) => {
            obj[key] = item.properties[key];
            return obj;
          }, {})
      }));
    }

    return response.results;
  } catch (error) {
    console.error(`Notion API Error for ${databaseId}:`, error);
    return [];
  }
};

export const getPage = async (pageId) => {
  const notionClient = getNotionClient();
  const response = await notionClient.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  blockId = blockId.replaceAll("-", "");

  const notionClient = getNotionClient();
  const { results } = await notionClient.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
