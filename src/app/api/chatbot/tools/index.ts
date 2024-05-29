import { DynamicTool } from "@langchain/core/tools";
import { scrapeProductDataFromStore } from "../functions";

const customTool = new DynamicTool({
  name: "search_products",
  description: "use the browseai api to search for products",
  func: scrapeProductDataFromStore,
});

/** Define your list of tools. */
export const tools = [customTool];
