import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "./Filter";
import Data from "../Data";
import {styleSell, styleRent, styleSold} from "../Style"
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
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className="mt-20 mb-5 mx-2" id="vehicules">
        
          <div className="flex flex-row justify-between text-gray-100 rounded pt-5">
            <h2 className=" text-xl md:text-3xl mb-3 ml-5">Nos véhicules</h2>
          </div>

          <div className=" text-gray-100">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {Data.filter(({ vedette }) => vedette === "True").map((link) => (
                <Link to={`/NocMotors/vehicules/${link.id}`}>
                  <div className="shadow-lg rounded-lg border-2">
                    {link.type === "sell" && (
                      <p className={styleSell}>
                        A vendre
                      </p>
                    )}
                    {link.type === "rent" && (
                      <p className={styleRent}>
                        A louer
                      </p>
                    )}
                    {link.type === "sold" && (
                      <p className={styleSold}>
                        VENDU
                      </p>
                    )}
                    {link.type === "sold" && (
                      <img
                      src={link.front_img}
                      className="sm:object-cover grayscale h-[300px] lg:h-[450px] md:h-[300px] w-full"
                      alt={link.name}
                    />
                    )}
                    {link.type !== "sold" && (
                      <img
                      src={link.front_img}
                      className="sm:object-cover h-[300px] lg:h-[450px] md:h-[300px] w-full"
                      alt={link.name}
                    />
                    )}
                    <div className="p-4 hover:from-black hove:to-blue-100 flex justify-between">
                      <h3>{link.name}</h3>
                      <h4>{link.annee} </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>

          <div style={{ textAlign: "center" }} className="mt-5">
            <button className="button w-[120px] mr-5" onClick={this.previous}>
              <span aria-hidden="true">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button className="button w-[120px]" onClick={this.next}>
              <span aria-hidden="true">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
        <Filter />
      </div>
    );
  }
}
