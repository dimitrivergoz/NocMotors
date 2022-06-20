import React, { useEffect, useState, useRef } from 'react'
import { Button } from '../Button'
import { CarouselContainer, CarouselContent, Column3, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap, Logo } from './Carousel'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"
const cars = [
  {
    img: require('../../images/1.jpg'),
    name: "Thunderbird", annee: "1254"
  },
  {
    img: require('../../images/2.jpg'),
    name: "Mustang ", annee: "4784"
  },
  {
    img: require('../../images/3.jpg'),
    name: "Xf", annee: "9999"
  },
];

let count = 0;
let slideInterval;
function Carousel() {
  return (
    <>
      <div className="my-20" id="vehicules">
        <div className="flex flex-row justify-between text-gray-100">
          <h2 className="text-3xl mb-3 ml-5">Classic car </h2>
          <a href="#" className="text-xl flex flex-row">
            <p className="">Voir les modèles</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[5px] lg ml-4 mr-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="grid grid-flow-row lg:grid-cols-3 gap-5 xl:grid-cols-3 xl:gap-8 mx-5 text-gray-100">
          <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
              <img src="https://vergoz.xyz/img/911.jpg" className="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
              <h3><a href="#">Ford Thunderbird</a></h3>
              <h4>1960</h4>
            </div>
          </div>

          <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
              <img src="https://vergoz.xyz/img/ds21.jpg" className="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
              <h3><a href="#">Ford Thunderbird</a></h3>
              <h4>1960</h4>
            </div>
          </div>

          <div className="shadow-lg rounded-lg border-2 border-grey-400">
            <a href="#">
              <img src="https://vergoz.xyz/img/SVI.jpg" className="rounded-tl-lg rounded-tr-lg" />
            </a>
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
              <h3><a href="#">Ford Thunderbird</a></h3>
              <h4>1960</h4>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Carousel