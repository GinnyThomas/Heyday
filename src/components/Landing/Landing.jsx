import React from "react";
import "./landing.scss";
import Carousel from "./Carsouel";
import Instructions from "./Instructions";
import Introduction from "./Introduction";
import { useParams, useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  const appName = "Heyday"

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <div className="wave1Container backWave" data-speed="3">
        <img src="assets/LandingPage/Rectangle1.png" alt="background wave" />
      </div>
      <div className="wave2Container backWave" data-speed="-2">
        <img src="assets/LandingPage/Rectangle2.png" alt="background wave" />
      </div>
      <div className="hambtnContainer" data-speed="5">
        <img src="assets/Hamburger_menu.png" alt="Home Button" />
      </div>
      <div className="calImgContainer">
        <img src="assets/LandingPage/Other16.png" alt="Image of calendar" />
      </div>
      <div className="landingTextContainer">
        <h1 className="landingTitle">
          Welcome to <span>{appName}</span>
        </h1>
        <h2 className="landingCatchPhrase">
          Find the most convenient day for <br />
          everyone in your group to <br />
          <span>meet up.</span>
        </h2>
        <p className="landingText">
          Scroll down for instructions, or press START to begin
        </p>
      </div>
      <button
        className="btn-start"
        type="submit"
        onClick={() => {
          navigate("setup");
        }}
      >
        START
      </button>

      {/* INSTRUCTIONS SECTION */}
      <Instructions />

      {/* INTRO SECTION */}
      <Introduction name={appName}/>

      {/* TECHNOLOGY SECTION */}
      <div className="technologies">
        <h2>Technologies</h2>
        <ul className="cards">
          <li>
            <img
              src="assets/LandingPage/JavaScript.png"
              alt="JavaScript logo"
            />
            <div></div>
            <h2>Language</h2>
            <h3>JavaScript</h3>
          </li>
          <li>
            <img src="assets/LandingPage/React.png" alt="ReactJS logo" />
            <div></div>
            <h2>Front-End</h2>
            <h3>React</h3>
          </li>
          <li>
            <img src="assets/LandingPage/Jest.png" alt="Jest logo" />
            <div></div>
            <h2>Testing</h2>
            <h3>Jest</h3>
          </li>
          <li>
            <img src="assets/LandingPage/express.png" alt="Express logo" />
            <div></div>
            <h2>Back-End</h2>
            <h3>Express</h3>
          </li>
        </ul>
      </div>

      <div className="mid1Container backWave" data-speed="-2.5">
        <img src="assets/LandingPage/mid1.png" alt="background wave" />
      </div>
      <div className="mid2Container backWave" data-speed="4">
        <img src="assets/LandingPage/mid2.png" alt="background wave" />
      </div>

      {/* TEAM SECTION */}
      <Carousel />

      {/* FOOTER SECTION */}
      <div className="footer">
        <h2>{appName}</h2>
        <ul className="iconContainer">
          <li>
            <img src="assets/Footer/facebook_icon.svg" alt="facebook icon" />
          </li>
          <li>
            <img src="assets/Footer/twitter_icon.svg" alt="twitter icon" />
          </li>
          <li>
            <img src="assets/Footer/instagram_icon.svg" alt="instagram icon" />
          </li>
          <li>
            <img src="assets/Footer/youtube_icon.svg" alt="youtube icon" />
          </li>
          <li>
            <img src="assets/Footer/pintrest_icon.svg" alt="pintrest icon" />
          </li>
        </ul>
        <p>
          © 2022 <span> {appName} </span> Privacy — Terms
        </p>
      </div>

      <div className="bot1Container backWave" data-speed="2.5">
        <img src="assets/LandingPage/bot1.png" alt="background wave" />
      </div>
      <div className="bot2Container backWave" data-speed="-3">
        <img src="assets/LandingPage/bot2.png" alt="background wave" />
      </div>
    </div>
  );
};

export default Landing;
