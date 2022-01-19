import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "./carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "carousel",
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="carouselContainer">
        <h2 className="title">Developer Team</h2>
        <Slider {...settings}>
          <Card
            className="card"
            name={"Myoung"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            fullName="Myoung Bae"
            role="Software Developer"
            github="mhbae-dev"
          />
          <Card
            name={"andy"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            fullName="Andy Bird"
            role="Software Developer"
            github="Andybird88"
          />
          <Card
            name={"ryan"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            fullName="Ryan Grimes"
            role="Software Developer"
            github="RPGrimes"
          />
          <Card
            name={"ginny"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            fullName="Ginny Thomas"
            role="Software Developer"
            github="ginnyamazed"
          />
          <Card
            name={"matt"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            fullName="Matt Zimmer"
            role="Software Developer"
            github="Zimmja"
          />
        </Slider>
      </div>
    );
  }
}
