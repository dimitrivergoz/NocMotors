import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button, ArrowForward, ArrowRight } from "../Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  HeroDivSvg,
} from "./hero";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <img width={400} src={require("../../logo.svg").default} />
          <HeroP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
              CONTACT {hover ? <ArrowForward /> : <ArrowRight />}{" "}
            </Button>
          </HeroBtnWrapper>
          <HeroDivSvg className="mt-10 relative md:bottom-[-10em] inline-block">
            <a href="#services">
            <ion-icon size="large" className="animate-bounce" name="arrow-down-outline"></ion-icon>
            </a>
          </HeroDivSvg>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
