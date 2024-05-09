import { ChatOpenAI } from "@langchain/openai";

const chatOpenAI = new ChatOpenAI({
  temperature: 0.5,
  modelName: "gpt-4-turbo",
});

export const LLM = {
  chatOpenAI,
};
