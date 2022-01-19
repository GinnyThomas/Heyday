import React, { Component } from "react";
import Slider from "react-slick";
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
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h2>Myoung</h2>
            <h3>Software Developer</h3>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/matt.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h2>Matt</h2>
            <h3>Software Developer</h3>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/ryan.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h2>Ryan</h2>
            <h3>Software Developer</h3>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/andy.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h2>Andy</h2>
            <h3>Software Developer</h3>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/ginny.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h2>Ginny</h2>
            <h3>Software Developer</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
