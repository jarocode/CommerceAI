import { DynamicTool } from "@langchain/core/tools";

const customTool = new DynamicTool({
  name: "search_products",
  description: "use the browseai api to search for products",
  func: async (input: string) => input.length.toString(),
});

/** Define your list of tools. */
const tools = [customTool];
