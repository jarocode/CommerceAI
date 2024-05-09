"use client";

import { useState, createContext, JSX, Dispatch, SetStateAction } from "react";

export interface ChatMessage {
  message: string;
  type: "Human" | "AI";
}

interface CampusTourContextValues {
  chatMessages: Array<ChatMessage>;
  setChatMessages: Dispatch<SetStateAction<Array<ChatMessage>>>;
}

export const ChatContext = createContext<CampusTourContextValues>({
  chatMessages: [{ message: "", type: "AI" }],
  setChatMessages: () => null,
});

export const ChatProvider = ({ children }: { children: JSX.Element }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "",
      type: "AI" as "AI" | "Human",
    },
  ]);

  return (
    <ChatContext.Provider value={{ chatMessages, setChatMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
