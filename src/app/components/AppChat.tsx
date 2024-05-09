import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import {
  MdOutlineShoppingCartCheckout,
  MdOutlineContentCopy,
} from "react-icons/md";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

import { colors } from "theme/colors";
import avatarImg from "assets/images/jpg/UcheAI.jpg";
import AppText from "./AppText";

interface AppChatProps {
  message: string;
  isUser?: boolean;
}

interface ContainerProps {
  isUser?: boolean;
}

const AppChat = ({ message, isUser }: AppChatProps) => {
  return (
    <Container isUser={isUser}>
      {isUser ? (
        <Avatar
          alt="user avatar"
          src={avatarImg.src}
          sx={{ width: 35, height: 35 }}
        />
      ) : (
        <Logo>
          <MdOutlineShoppingCartCheckout color={colors.white} size="12px" />
        </Logo>
      )}
      <TextDiv>
        <AppText lineHeight="1.5rem">{message}</AppText>
        {isUser ? (
          <></>
        ) : (
          <Actions>
            <Left>
              <CircleDiv>
                <GoThumbsup color="#476584" style={{ cursor: "pointer" }} />
              </CircleDiv>
              <CircleDiv>
                <GoThumbsdown color="#476584" style={{ cursor: "pointer" }} />
              </CircleDiv>
            </Left>
            <CopyDiv>
              <MdOutlineContentCopy color="#476584" />
              <AppText color="#797979">Copy</AppText>
            </CopyDiv>
          </Actions>
        )}
      </TextDiv>
    </Container>
  );
};

export default AppChat;

const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  background: ${(props) => (props.isUser ? "none" : colors.primaryLight)};
  border-radius: 10px;
`;

const TextDiv = styled.div`
  width: 100%;
  min-height: 4rem;
`;

const Logo = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
`;

const Actions = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${colors.white};
  height: 2rem;
  width: 2rem;
`;

const Left = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CopyDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border-radius: 1rem;
  background: ${colors.white};
  cursor: pointer;
`;
