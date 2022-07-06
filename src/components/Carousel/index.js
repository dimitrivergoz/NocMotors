import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    let Links = [
      { name: "ACCUEIL", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "SERVICES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "VEHICULES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "ACCUEIL", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "SERVICES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "VEHICULES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "ACCUEIL", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "SERVICES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
      { name: "VEHICULES", src: "https://vergoz.xyz/img/911.jpg", name:"911", annee:"2020" },
    ];
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows:false
          }
        }
      ]
    };
    return (
      <div className="my-20" id="vehicules">
      <div className="flex flex-row justify-between text-gray-100 rounded">
        <h2 className=" text-xl md:text-3xl mb-3 ml-5">En vedette</h2>
        <a href="#" className="text-xl flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[5px] lg ml-4 mr-5 inline-block rounded-md border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </a>
      </div>


        <div className=" px-2 md:px-2 mx-2 grid grid-flow-row grid-cols-1">
        <Slider ref={c => (this.slider = c)} {...settings}>
        {Links.map((link)=>(
          <div className="shadow-lg rounded-lg border-2 border-grey-400">
              <img src={link.src} className="rounded-tl-lg rounded-tr-lg" />
            <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
              <h3>{link.name}</h3>
              <h4>{link.annee}</h4>
            </div>
        </div>
        ))}
        <div className="shadow-lg rounded-lg border-2 border-grey-400 py-8">
            <a href="#">
              <h1 className='text-l text-center p-2 align-baseline'>Voir tous les modèles...</h1>
            </a>
          </div>
    
        </Slider>
        <div style={{ textAlign: "center" }} className="mt-5">
          <button className="button w-[120px] mr-5" onClick={this.previous}>
            <span aria-hidden="true"><ion-icon name="arrow-back-outline"></ion-icon></span>
          </button>
          <button className="button w-[120px]" onClick={this.next}>
            <span aria-hidden="true"><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </button>
        </div>
        </div>
        
      </div>
    );
  }
}