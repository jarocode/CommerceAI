"use client";

import styled from "@emotion/styled";

import AppChat from "components/AppChat";
import { colors } from "theme/colors";

const ChatBoard = () => {
  return (
    <Container>
      <AppChat />
    </Container>
  );
};

export default ChatBoard;

const Container = styled.div`
  background: ${colors.white};
  height: 75vh;
  margin-right: 18rem;
  border: 1px solid #f2f3f1;
  border-radius: 1.5rem;
  padding: 2rem 1rem;
`;
