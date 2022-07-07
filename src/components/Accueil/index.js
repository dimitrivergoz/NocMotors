import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  HeroDivSvg,
} from "./hero";

const Accueil = () => {
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <img width={400} src="https://vergoz.xyz/img/logonoir.svg" alt="Logo de couleur noir" />
          <HeroP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </HeroP>
          <HeroBtnWrapper></HeroBtnWrapper>
          <HeroDivSvg className="mt-10 relative md:bottom-[-10em] inline-block">
          </HeroDivSvg>
        </HeroContent>
      </HeroContainer>



    </>
  );
};

export default Accueil;
