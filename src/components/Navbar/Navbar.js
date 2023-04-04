import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
          MyCompany
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="requirements"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Requirements
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="departments"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Departments
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="joinus"
                smooth={true}
                duration={500}
                spy={true}
                // exact="true"
                offset={-80}
              >
                Join us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin">Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
