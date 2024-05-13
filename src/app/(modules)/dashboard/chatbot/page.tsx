"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ChatProvider } from "./context/ChatContext";
import ChatBoard from "./components/ChatBoard";
import ChatHistory from "./components/ChatHistory";

const Page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <>
          <ChatBoard />
          <ChatHistory />
        </>
      </ChatProvider>
    </QueryClientProvider>
  );
};

export default Page;
