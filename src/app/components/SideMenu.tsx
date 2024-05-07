"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import {
  MdOutlineShoppingCartCheckout,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";

import { colors } from "theme/colors";
import AppText from "./AppText";

interface MenuProps {
  isActive: boolean;
}

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const menu = [
    {
      name: "Dashboard",
      icon: (
        <MdOutlineDashboardCustomize
          color={activeMenu === "Dashboard" ? colors.white : colors.text}
          size="1.2rem"
        />
      ),
    },
    {
      name: "Chatbot",
      icon: (
        <TbMessageChatbot
          color={activeMenu === "Chatbot" ? colors.white : colors.text}
          size="1.2rem"
        />
      ),
    },
  ];

  const handleActiveMenu = (name: string) => {
    setActiveMenu(name);
  };

  return (
    <Container>
      <LogoDiv>
        <Logo>
          <MdOutlineShoppingCartCheckout color={colors.white} />
        </Logo>
        <AppText fontWeight={600} fontSize="18px">
          Shopper
        </AppText>
      </LogoDiv>
      <Collapse>
        <IoChevronBack />
      </Collapse>
      <MainMenu>
        <AppText color="#BCBBBF">Main Menu</AppText>
        <MenuDiv>
          {menu.map((menu) => {
            const { name } = menu;
            const isActive = name === activeMenu;
            return (
              <Menu
                key={name}
                isActive={isActive}
                onClick={() => handleActiveMenu(name)}
              >
                {menu.icon}
                <AppText
                  color={isActive ? colors.white : colors.text}
                  fontSize="14px"
                >
                  {menu.name}
                </AppText>
              </Menu>
            );
          })}
        </MenuDiv>
      </MainMenu>
    </Container>
  );
};

export default SideMenu;

const Container = styled.div`
  position: fixed;
  width: 14rem;
  height: 100vh;
  background: ${colors.white};
  padding: 1.5rem 1rem;
  border-right: 1px solid #f2f3f1;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Logo = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
`;

const Collapse = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  background: ${colors.white};
  box-shadow: 2px 5px 7px #f2f3f1;
  top: 4.25rem;
  left: calc(14rem - (1.5rem / 2));
`;

const MainMenu = styled.div`
  padding: 5rem 0 2rem;
`;

const MenuDiv = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background: ${(props) => (props.isActive ? colors.primary : "")};
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: ${colors.primary};
    /* color: ${colors.white}!important; */
  }
  &:hover p {
    color: ${colors.white}!important;
  }
`;
