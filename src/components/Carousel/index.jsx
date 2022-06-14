import React, { useEffect, useState, useRef } from 'react'
import {Button} from '../Button'
import { CarouselContainer, CarouselContent,Column3, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,Heading, Subtitle, BtnWrap, Img, ImgWrap, Logo } from './Carousel'
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
const cars = [
  {img: require('../../images/1.jpg'),
  name:"Thunderbird", annee:"1254"},
  {img: require('../../images/2.jpg'),
  name:"Mustang ", annee:"4784"
},
  {img: require('../../images/3.jpg'),
  name:"Xf", annee:"9999"},
];

let count = 0;
let slideInterval;
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideRef = useRef();
  
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  }

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
        clearInterval(slideInterval);
    };
  }, []);
  
  const startSlider = () => {
    slideInterval = setInterval(() =>{
      handleOnNextClick();
    },6000);
  }

  const pauseSlider = () => {
    clearInterval(slideInterval);
  }

  const handleOnNextClick = () => {
    count = (count+1) % cars.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  }

  const handleOnPreviousClick = () => {
    count = (count+cars.length-1) % cars.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  }

  return (
    <>
    <div id="carousel" className='h-10'>
    </div>
<InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column2>
                            <TextWrapper>
                                <TopLine>Les vedettes</TopLine>
                                <Heading>{cars[currentIndex].name}</Heading>
                                <Subtitle>{cars[currentIndex].annee}</Subtitle>
                                <BtnWrap><Button>Voir le modèle</Button></BtnWrap>
                            </TextWrapper>
                        </Column2>
                        
                        <Column1>
              
                            <ImgWrap>
                            <div ref={slideRef} className='w-full select-none relative object-center'>
      
                            <div className="aspect-w-16 aspect-h-9">
                            <img src={cars[currentIndex].img} className='object-center block' alt="" />
                            </div> 
                            <div className='w-full static transform mt-4 px-5 flex justify-between items-center'>
                              <button onClick={handleOnNextClick} className="bg-black text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 p-1 transition"><AiFillCaretLeft/></button>
                              <button onClick={handleOnPreviousClick} className="bg-black text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 p-1 transition"><AiFillCaretRight/></button>
                            </div>
                            
                                <Logo />
                                </div>
                            </ImgWrap>
                            
                        </Column1>
          
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
            



      </>
  )
}

export default Carousel