"use client";

import { ChatProvider } from "./context/ChatContext";
import ChatBoard from "./components/ChatBoard";
import ChatHistory from "./components/ChatHistory";

const Page = () => {
  return (
    <ChatProvider>
      <>
        <ChatBoard />
        <ChatHistory />
      </>
    </ChatProvider>
  );
};

export default Page;
