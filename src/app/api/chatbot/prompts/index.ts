import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';

export const agentPrompt = ChatPromptTemplate.fromMessages([
  ['system', "You are very powerful assistant, but don't know current events"],
  ['human', '{input}'],
  new MessagesPlaceholder('agent_scratchpad'),
]);

export const qaPrompt = `You are a helpful assistant. Answer all questions to the best of your ability.
Be friendly and as conversational as possible like a real human would be. 
`;

export const queryTransform = `Given the above conversation, generate a search query to look up in order to get 
information relevant to the conversation. Only respond with the query, nothing else.
`;
