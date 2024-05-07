"use client";

import styled from "@emotion/styled";
import { Avatar, Badge, Divider } from "@mui/material";
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";

import { colors } from "theme/colors";
import AppText from "./AppText";

const DashboardHeader = () => {
  return (
    <Container>
      <SearchDiv>
        <RiSearchLine />
        <Input placeholder="Search products" />
      </SearchDiv>
      <Left>
        <Badge color={"error"} variant="dot" overlap="circular">
          <IoNotificationsOutline size={"1.2rem"} />
        </Badge>
        <Divider orientation="vertical" flexItem />
        <AvatarDiv>
          <Avatar
            alt="user avatar"
            src={"../../assets/images/jpg/UcheAI.jpg"}
            sx={{ width: 24, height: 24 }}
          />
          <AppText fontSize="14px">Okolie Uchenna</AppText>
        </AvatarDiv>
      </Left>
    </Container>
  );
};

export default DashboardHeader;

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: ${colors.white};
  position: fixed;
  padding: 1.5rem 2rem;
  padding-left: 16rem;
  display: flex;
  justify-content: space-between;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f8f9;
  width: 30rem;
  border-radius: 5px;
  border: 1px solid #f2f3f1;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: none;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AvatarDiv = styled.div`
  padding: 0.7rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f3f1;
  border-radius: 2rem;
  background: #f8f8f9;
`;
