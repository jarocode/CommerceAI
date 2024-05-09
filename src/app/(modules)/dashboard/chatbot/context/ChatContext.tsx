"use client";

import { useState, createContext, JSX, Dispatch, SetStateAction } from "react";

interface CampusTourContextValues {
  chatMessage: string;
  setChatMessage: Dispatch<SetStateAction<string>>;
}

export const ChatContext = createContext<CampusTourContextValues>({
  chatMessage: "",
  setChatMessage: () => null,
});

export const ChatProvider = ({ children }: { children: JSX.Element }) => {
  const [chatMessage, setChatMessage] = useState("");

  return (
    <ChatContext.Provider value={{ chatMessage, setChatMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
