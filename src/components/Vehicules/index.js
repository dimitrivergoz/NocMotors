import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "./Filter";
import Data from "../Data"
import NavLogo from "../navlogo";
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
          breakpoint: 600,
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
        <NavLogo />
          <div className="flex flex-row justify-between text-gray-100 rounded pt-5">
            <h2 className=" text-xl md:text-3xl mb-3 ml-5">Nos véhicules</h2>
          </div>

          <div className=" text-gray-100 mx-2">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {Data.map((link) => (
                <Link to={`/NocMotors/vehicules/${link.id}`}>
                <div className="shadow-lg rounded-lg border-2">
                  {link.type === "sell" && (
                    <p className="absolute bg-green-600 text-black p-2 text-m rounded-br-lg border-2">
                      A vendre
                    </p>
                  )}
                  {link.type === "rent" && (
                    <p className="absolute bg-orange-400 text-black p-2 text-m rounded-br-lg border-2">
                      A louer
                    </p>
                  )}
                  <img
                    src={link.front_img}
                    className="rounded-tl-lg rounded-tr-lg object-fit w-full h-[380px] sm:h-[400px]"
                    alt={link.name}
                  />
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