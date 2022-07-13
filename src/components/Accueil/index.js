import React from "react";
import Video from "../../videos/video.mp4";
import {Link } from "react-router-dom";
import {logonoir} from "../Style"
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
  let Links = [
    { name: "ACCUEIL", link: "/NocMotors", numero: "00" },
    { name: "SERVICES", link: "/NocMotors/services", numero: "01" },
    { name: "VEHICULES", link: "/NocMotors/voitures", numero: "02" },
    { name: "EVENEMENTS", link: "/NocMotors/events", numero: "03" },
  ];
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <img
            width={400}
            src={logonoir}
            alt="Logo de couleur noir Noc Motors"
          />
          <HeroP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </HeroP>
          <HeroBtnWrapper></HeroBtnWrapper>
          <HeroDivSvg className="mt-10 relative md:bottom-[-10em] inline-block hidden">
          {Links.map((link) => (
              <li className="list-none pt-2">
                <Link className="p-2 bg-black rounded-lg flex center justify-center" to={link.link}>
                  {link.numero} : {link.name}
                </Link>
              </li>
            ))}
          </HeroDivSvg>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Accueil;
