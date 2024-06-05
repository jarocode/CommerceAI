import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

export const agentPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are very powerful shopping assistant, alway use the 'search_product' tool to get search for products based on the description of the product provided by the user  ",
  ],
  ["human", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);

export const qaPrompt = `You are a helpful assistant. Answer all questions to the best of your ability.
Be friendly and as conversational as possible like a real human would be. 
`;

export const queryTransform = `Given the above conversation, generate a search query to look up in order to get 
information relevant to the conversation. Only respond with the query, nothing else.
`;
