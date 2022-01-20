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
      autoplaySpeed: 3400,
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
            bio="Myoung is a ARB Architect with 6+ years experience and a focus on furniture design. Outside of his professional life he enjoys photography and Olympic weightlifting."
            fullName="Myoung Bae"
            role="Software Developer"
            github="mhbae-dev"
          />
          <Card
            name={"andy"}
            bio="Life long NFL fan (Go Titans!). Secret Table Tennis Pro. Open minded, positive thinker. Passionate about making people's lives easier through tech."
            fullName="Andy Bird"
            role="Software Developer"
            github="Andybird88"
          />
          <Card
            name={"ryan"}
            bio="Ryan is a keen amateur sportsman who's enthusiasm surpasses his ability. He has previous professional experience as an Engineering Geologist."
            fullName="Ryan Grimes"
            role="Software Developer"
            github="RPGrimes"
          />
          <Card
            name={"ginny"}
            bio="Ginny has traded in her stethoscope for a computer to gain better work-life harmony.  In her free time she enjoys taking walks with her dog as well as catching up on movies and TV show series."
            fullName="Ginny Thomas"
            role="Software Developer"
            github="ginnyamazed"
          />
          <Card
            name={"matt"}
            bio="Coming from a professional background in healthcare and advertising, and an amateur background of video-game mod development."
            fullName="Matt Zimmer"
            role="Software Developer"
            github="Zimmja"
          />
        </Slider>
      </div>
    );
  }
}
