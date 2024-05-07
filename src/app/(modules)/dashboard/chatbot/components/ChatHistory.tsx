import styled from "@emotion/styled";

import AppText from "components/AppText";
import { colors } from "theme/colors";

const ChatHistory = () => {
  return (
    <Container>
      <AppText color="#BCBBBF">Recent</AppText>
    </Container>
  );
};

export default ChatHistory;

const Container = styled.div`
  background: ${colors.white};
  position: fixed;
  top: 7rem;
  right: 2rem;
  height: 100vh;
  width: 16rem;
  border: 1px solid #f2f3f1;
  border-radius: 1.5rem;
  padding: 2rem 1rem;
`;
