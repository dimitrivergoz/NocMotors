import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../Button'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './hero'


const HeroSection = () =>{
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    };

  return (
    <HeroContainer>
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        
            <HeroContent>
                <img width={400} src={require('../../images/logo.svg').default}/>
                <HeroP>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>Contact {hover ? <ArrowRight /> :  <ArrowForward />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
    </HeroContainer>
  )
};

export default HeroSection;