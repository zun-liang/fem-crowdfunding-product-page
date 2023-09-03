import { useState } from "react";
import styled from "styled-components";

import MenuCloseIcon from "../assets/images/icon-close-menu.svg";
/* eslint-disable react/prop-types */
import MenuIcon from "../assets/images/icon-hamburger.svg";
import { ViewportContainer } from "../assets/styles/elementStyles";
import MenuList from "./children-components/MenuList";

const Header = styled.header`
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    margin-left: 3rem;
  }
  @media (min-width: 745px) {
    margin-left: 8rem;
  }
`;
const Title = styled.h1`
  font-size: 1.4rem;
`;
const Hr = styled.hr`
  border: 0.1px solid var(--light-gray);
`;
const MenuImg = styled.img`
  height: 0.8rem;
  display: ${({ menuToggler }) => (menuToggler ? "" : "none")};
  &:hover {
    cursor: pointer;
  }
`;
const MobileMenu = styled.div`
  display: ${({ menuToggler }) => (menuToggler ? "none" : "")};
`;
const MenuCloseImg = styled.img`
  width: 0.8rem;
  position: absolute;
  top: 1.7rem;
  right: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const MobileList = styled.ul`
  width: 88vw;
  height: 10.9rem;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 4.7rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DesktopMenu = styled.ul`
  display: flex;
  position: relative;
  right: 3.5rem;
  @media (min-width: 745px) {
    right: 12rem;
  }
`;

const Navbar = ({ screenWidth }) => {
  const [menuToggler, setMenuToggler] = useState(true);
  const toggleMenu = () => setMenuToggler((prev) => !prev);
  return (
    <Header>
      <Title>crowdfund</Title>
      <nav>
        {screenWidth < 600 ? (
          <>
            <MenuImg
              src={MenuIcon}
              alt="icon menu"
              onClick={toggleMenu}
              menuToggler={menuToggler}
            />
            <MobileMenu menuToggler={menuToggler}>
              <ViewportContainer>
                <MenuCloseImg
                  src={MenuCloseIcon}
                  alt="icon close menu"
                  onClick={toggleMenu}
                />
                <MobileList>
                  <MenuList list="about" toggleMenu={toggleMenu} />
                  <Hr />
                  <MenuList list="discover" toggleMenu={toggleMenu} />
                  <Hr />
                  <MenuList list="get-started" toggleMenu={toggleMenu} />
                </MobileList>
              </ViewportContainer>
            </MobileMenu>
          </>
        ) : (
          <DesktopMenu>
            <MenuList list="about" />
            <MenuList list="discover" />
            <MenuList list="get-started" />
          </DesktopMenu>
        )}
      </nav>
    </Header>
  );
};

export default Navbar;
