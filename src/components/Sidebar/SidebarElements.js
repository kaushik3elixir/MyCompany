import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { theme } from "../../styles/theme";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  /* usually we take props, but isOpen is destructured from props */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${theme.color.themeColor};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outlines: none;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  /* the rows were acquiring the whole width, therefore triggering hover effect so I set this high margin */
  /* margin: 0 20%; */
  grid-template-rows: repeat(6, calc(60vh / 6));
  text-align: center;
  /* background: pink; */

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  /* cursor: pointer; */
  /* max-width: 100%; */
  /* &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  } */
`;

export const LinkText = styled.p`
  cursor: pointer;
  &:hover {
    color: ${theme.color.themeColor};
    transition: 0.2s ease-in-out;
  }
`;

export const SideButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: ${theme.color.themeColor};
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${theme.color.lightColor};
    color: #010606;
  }
`;
