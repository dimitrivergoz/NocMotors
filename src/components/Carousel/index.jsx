import React, { useEffect, useState, useRef } from 'react'
import { CarouselContainer, CarouselContent } from './Carousel'
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
        <CarouselContainer>
          <CarouselContent>
            
            <div ref={slideRef} className='w-full select-none relative object-center'>
              <div className="aspect-w-16 aspect-h-9">
              <img src={cars[currentIndex].img} className='object-center block' alt="" />
              </div> 
              <div className='absolute w-full transform -translate-y-3/2 px-3 flex justify-between items-center'>
                <h1 className='text-white text-2xl flex justify-between items-center'>{cars[currentIndex].name}</h1>
                <h1 className='text-white text-2xl'>{cars[currentIndex].annee}</h1>
              </div>
                <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                  <button onClick={handleOnNextClick} className="bg-black text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 p-1 transition"><AiFillCaretLeft/></button>
                  <button onClick={handleOnPreviousClick} className="bg-black text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 p-1 transition"><AiFillCaretRight/></button>
                </div>

            </div>

          </CarouselContent>

        </CarouselContainer>
      </>
  )
}

export default Carousel