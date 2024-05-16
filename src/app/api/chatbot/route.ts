import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { HumanMessage, AIMessage } from "@langchain/core/messages";
import { MongoDBChatMessageHistory } from "@langchain/mongodb";
import { ObjectId } from "mongodb";
import { request as httpRequest } from "https";

import { LLM } from "llms";
import { getMongoDBCollection } from "utils/dbConnect";
import { qaPrompt } from "./prompts";

const sessionId = new ObjectId().toString();

const options = {
  method: "GET",
  hostname: "api.browse.ai",
  port: null,
  path: "/v2/robots",
  headers: {
    Authorization: `Bearer ${process.env.BROWSEAI_API_KEY}`,
  },
};
export async function POST(request: Request) {
  try {
    const req = httpRequest(options, function (res) {
      const chunks: any[] | Uint8Array[] = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.end();
    const collection = await getMongoDBCollection();

    const { message } = await request.json();

    const model = LLM.chatOpenAI;
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", qaPrompt],
      new MessagesPlaceholder("messages"),
    ]);

    const chain = prompt.pipe(model);

    const messageHistory = new MongoDBChatMessageHistory({
      sessionId,
      collection,
    });

    await messageHistory.addMessage(new HumanMessage(message));

    const { content } = await chain.invoke({
      messages: await messageHistory.getMessages(),
    });

    await messageHistory.addMessage(new AIMessage(content.toString()));

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
