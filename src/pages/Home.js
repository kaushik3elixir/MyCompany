import React, { useState } from "react";
import Hero from "../components/HeroSection/Hero";
// import { Router } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
// import Hero from "../components/HeroSection/Hero";
import Info from "../components/Info/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Departments from "../components/Departments/Departments";
import Footer from "../components/Footer/Footer";
// import { ReactComponent as ReactLogo } from "./svg-4.svg";
// import { ThemeProvider } from "styled-components";
// import { theme } from "../styles/theme";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <ThemeProvider theme={theme}>
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Departments />
      <Info {...homeObjThree} />
      <Footer />
    </>
    // </ThemeProvider>
  );
};

export default Home;
