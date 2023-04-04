import React from "react";
import Button from "../ButtonElement";
// import { ReactComponent as ReactLogo } from "../../images/svg-1.svg";
import {
  Column2,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  Column1,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrap,
} from "./InfoElements";

const Info = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {/* <h1>Heading 1</h1> */}
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <ButtonWrap>
                  <Button
                    to="hero"
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
