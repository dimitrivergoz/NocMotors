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
      { src: "https://vergoz.xyz/img/280sl.jpg", name: "911", annee: "2020" },
      {
        src: "https://vergoz.xyz/img/alfaromeo.jpg",
        name: "911",
        annee: "2020",
      },
      {
        src: "https://vergoz.xyz/img/aventador.jpg",
        name: "911",
        annee: "2020",
      },
      { src: "https://vergoz.xyz/img/ds21.jpg", name: "911", annee: "2020" },
      {
        src: "https://vergoz.xyz/img/jeepwillys.jpg",
        name: "911",
        annee: "2020",
      },
      {
        src: "https://vergoz.xyz/img/mustang1966.jpg",
        name: "911",
        annee: "2020",
      },
      { src: "https://vergoz.xyz/img/r8.jpg", name: "911", annee: "2020" },
    ];
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
      <>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className="my-20" id="vehicules">
          <div className="flex flex-row justify-between text-gray-100 rounded">
            <h2 className=" text-xl md:text-3xl mb-3 ml-5">Nos véhicules</h2>
          </div>

          <div className="gap-5 text-gray-100 mx-6">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {Links.map((link) => (
                <div className="shadow-lg rounded-lg border-2">
                  <p className="absolute bg-yellow-200 text-black p-2 rounded-br-lg">
                    A louer
                  </p>
                  <img
                    src={link.src}
                    className="rounded-tl-lg rounded-tr-lg "
                    alt={link.name}
                  />
                  <div className="p-5 hover:from-black hove:to-blue-100 flex justify-between">
                    <h3>{link.name}</h3>
                    <h4>{link.annee} </h4>
                  </div>
                </div>
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
      </>
    );
  }
}
