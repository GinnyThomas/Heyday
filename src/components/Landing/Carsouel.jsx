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
      <div>
        <h2 className="title">Developer Team</h2>
        <Slider {...settings}>
          <div className="container">
            <div className="background"></div>
            <img src="assets/Carousel/Myoung.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h3>Myoung</h3>
            <h2>Software Developer</h2>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/matt.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h3>Matt</h3>
            <h2>Software Developer</h2>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/ryan.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h3>Ryan</h3>
            <h2>Software Developer</h2>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/andy.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h3>Andy</h3>
            <h2>Software Developer</h2>
          </div>
          <div>
            <div className="background"></div>
            <img src="assets/Carousel/ginny.jpg" alt="" />
            <p>
              Lorem blakclksdjf osduhfl afsdoihl fadsolihlfasd afosdihjl
              afsdoihjfldasi foasdihafsdolihfasdolih
            </p>
            <hr />
            <h3>Ginny</h3>
            <h2>Software Developer</h2>
          </div>
        </Slider>
      </div>
    );
  }
}
