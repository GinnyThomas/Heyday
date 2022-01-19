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
      autoplaySpeed: 8000,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
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
            name={"Myoung"}
            bio="Full Stack Software Developer and ARB Architect"
            fullName="Myoung Bae"
            role="Software Developer"
            github="mhbae-dev"
          />
          <Card
            name={"andy"}
            bio="I'm a logical, driven problem solver. I have a background in accounting,tiling and fictional writing. The innovation, creativity and freedom to explore are what excites me about tech."
            fullName="Andy Bird"
            role="Software Developer"
            github="Andybird88"
          />
          <Card
            name={"ryan"}
            bio="I am a determined and driven aspiring full-stack developer with a background in engineering and geology. "
            fullName="Ryan Grimes"
            role="Software Developer"
            github="RPGrimes"
          />
          <Card
            name={"ginny"}
            bio="I am a Makers' student excited to learn software engineering. I had previously received my MSN-FNP from Grand Canyon University in 2015."
            fullName="Ginny Thomas"
            role="Software Developer"
            github="ginnyamazed"
          />
          <Card
            name={"matt"}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            fullName="Matt Zimmer"
            role="Software Developer"
            github="Zimmja"
          />
        </Slider>
      </div>
    );
  }
}
