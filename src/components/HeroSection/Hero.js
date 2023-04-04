import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Button from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroButtonWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const Hero = () => {
  const [hover, SetHover] = useState(false);

  const onHover = () => {
    SetHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroBg>
        {/* <h1 style={{ color: "#fff" }}>Hero</h1> */}
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to MyCompany!</HeroH1>
        <HeroP>
          MyCompany is the #1 eCommerce Agency in the world and it takes a lot
          to push the boundaries and stay ahead! Join us and be part of the
          ambitious journey!
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            // big="true"
            primary="true"
            dark="true"
            // to="signup"
            smooth={true}
            duration={500}
            spy={true}
            // exact="true"
            offset={-80}
          >
            Start Your Journey {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
