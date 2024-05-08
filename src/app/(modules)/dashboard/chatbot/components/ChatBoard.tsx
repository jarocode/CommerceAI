"use client";

import styled from "@emotion/styled";

import AppChat from "components/AppChat";
import { colors } from "theme/colors";
import ChatInput from "./ChatInput";

const ChatBoard = () => {
  return (
    <Container>
      <ChatDiv>
        <AppChat />
        <AppChat isUser />
        <AppChat />
      </ChatDiv>
      <ChatInput />
    </Container>
  );
};

export default ChatBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  height: calc(100vh - 7rem);
  margin-right: 18rem;
  border: 1px solid #f2f3f1;
  border-radius: 1.5rem;
  padding: 2rem 1rem;
`;

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: calc(100% - 8rem);
  overflow: auto;
  padding-bottom: 3rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e9eaea;
    border-radius: 5px;
    height: 5rem !important;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #d3d5d7;
  }
`;
