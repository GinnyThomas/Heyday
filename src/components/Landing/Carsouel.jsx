import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "carousel",
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
      <div>
        <h2>Developer Team</h2>
        <Slider {...settings}>
          <div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <h3>Myoung</h3>
          </div>
          <div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <h3>2</h3>
          </div>
          <div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <h3>3</h3>
          </div>
          <div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <h3>4</h3>
          </div>
          <div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
