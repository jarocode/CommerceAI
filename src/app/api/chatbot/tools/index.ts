import { DynamicTool } from '@langchain/core/tools';
import { getScrapedProductData } from '../functions';

export const customTool = new DynamicTool({
  name: 'search_product',
  description: `use the browseai api to search for a product based on a given 
  product description`,
  func: getScrapedProductData,
});

/** Define your list of tools. */
export const tools = [customTool];
