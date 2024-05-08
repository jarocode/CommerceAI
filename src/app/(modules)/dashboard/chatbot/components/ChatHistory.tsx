import styled from "@emotion/styled";
import { PiChats } from "react-icons/pi";

import AppText from "components/AppText";
import { colors } from "theme/colors";

const ChatHistory = () => {
  const chatHistory = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <AppText color="#BCBBBF">Recent</AppText>
      <History>
        {chatHistory.map((chat) => {
          return (
            <Conversation key={chat}>
              <CircleDiv>
                <PiChats size="14px" />
              </CircleDiv>
              <div style={{ width: "85%" }}>
                <AppText fontSize="11px">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </AppText>
              </div>
            </Conversation>
          );
        })}
      </History>
    </Container>
  );
};

export default ChatHistory;

const Container = styled.div`
  background: ${colors.white};
  position: fixed;
  top: 7rem;
  right: 2rem;
  height: calc(100vh - 7rem);
  overflow: auto;
  width: 16rem;
  border: 1px solid #f2f3f1;
  border-radius: 1.5rem;
  padding: 2rem 1rem;

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

const History = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Conversation = styled.div`
  display: flex;
  gap: 1rem;
  background: ${colors.primaryLight};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${colors.white};
  height: 1.5rem;
  width: 1.5rem;
`;
