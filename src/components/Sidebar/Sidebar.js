import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRoute,
  LinkText,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    // is isOpen, then opacity and top position will be changed
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* these given "to" are for smooth-scroll */}
          <SidebarLink to="about" onClick={toggle}>
            <LinkText>About</LinkText>
          </SidebarLink>
          {/* <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink> */}
          <SidebarLink to="requirements" onClick={toggle}>
            <LinkText>Requirements</LinkText>
          </SidebarLink>
          <SidebarLink to="departments" onClick={toggle}>
            <LinkText>Departments</LinkText>
          </SidebarLink>
          <SidebarLink to="joinus" onClick={toggle}>
            <LinkText>Join us</LinkText>
          </SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          {/* below "to" is from router link */}
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
