import { use, useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "@emotion/styled";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiVoiceprintFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { TbEdit } from "react-icons/tb";

import { ChatContext } from "../context/ChatContext";
import { colors } from "theme/colors";
import AppText from "components/AppText";

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { setChatMessages } = use(ChatContext);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    setChatMessages((prev) => [...prev, { message, type: "Human" }]);
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13) handleClick();
  };

  return (
    <Container>
      <TextArea
        placeholder="Ask anything"
        rows={2}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={message}
      />
      <Bottom>
        <Outer>
          <Div>
            <CircleDiv>
              <IoDocumentAttachOutline color="#787878" size={"14px"} />
            </CircleDiv>
            <AppText color="#ABABAB" fontSize="13px">
              attach docs
            </AppText>
          </Div>
          <Div>
            <CircleDiv>
              <RiVoiceprintFill color="#787878" size={"14px"} />
            </CircleDiv>
            <AppText color="#ABABAB" fontSize="13px">
              speak to AI
            </AppText>
          </Div>
        </Outer>
        <Outer>
          <Div>
            <CircleDiv>
              <TbEdit color="#787878" size={"14px"} />
            </CircleDiv>
            <AppText color="#ABABAB" fontSize="13px">
              Improve
            </AppText>
          </Div>
          <SendButton onClick={handleClick}>
            <IoIosSend color={colors.white} />
          </SendButton>
        </Outer>
      </Bottom>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  position: relative;
  background: #fbfbfb;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 1.5rem;
  height: 8rem;
`;

const TextArea = styled.textarea`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  height: 4.5rem;
  padding: 0.8rem 1rem 0.5rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  background: #f2f2f2;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.white};
  height: 100%;
  padding: 5px;
  padding-right: 10px;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CircleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
`;

const Outer = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.dark};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
