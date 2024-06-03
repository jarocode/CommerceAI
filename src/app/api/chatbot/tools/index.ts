import { DynamicTool } from '@langchain/core/tools';
import { getScrapedProductData } from '../functions';

export const customTool = new DynamicTool({
  name: 'search_products',
  description: 'use the browseai api to search for products',
  func: getScrapedProductData,
});

/** Define your list of tools. */
export const tools = [customTool];
