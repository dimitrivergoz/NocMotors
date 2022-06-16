import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import Button from '../Button'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroDivSvg, NavLinks} from './Hero'


const HeroSection = () =>{
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    };

  return (
    <>
    <HeroContainer>
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        
            <HeroContent>
                <img width={400} src={require('../../logo.svg').default}/>
                <HeroP>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</HeroP>
                <HeroBtnWrapper>
                <button className='text-black bg-white py-2 px-6  rounded mr-2'>
                Contact
             </button>
                </HeroBtnWrapper>
                    <HeroDivSvg>
                    <a href="#">
                    <svg  xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 animate-bounce inline-block" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                    </a>
                </HeroDivSvg>
            </HeroContent>
    </HeroContainer>
    </>
  )
};

export default HeroSection;