import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

import { HumanMessage } from "@langchain/core/messages";

import { LLM } from "llms";
import { getMongoDBCollection } from "utils/dbConnect";

export async function POST(request: Request) {
  try {
    const collection = await getMongoDBCollection();
    console.log("collection", collection);
    const { message } = await request.json();

    const model = LLM.chatOpenAI;
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant. Answer all questions to the best of your ability.",
      ],
      new MessagesPlaceholder("messages"),
    ]);

    const chain = prompt.pipe(model);

    const { content } = await chain.invoke({
      messages: [new HumanMessage(message)],
    });

    const messageData = {
      message: content,
      type: "AI",
    };

    return Response.json(
      {
        success: true,
        data: messageData,
        message: "Ai response retreived sucessfully!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: error },
      {
        status: 500,
      }
    );
  }
}
