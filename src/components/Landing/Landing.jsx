import React from "react";
import "./landing.scss";
import Carousel from "./Carsouel";
import { useParams, useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

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
          Welcome to <span>Anonymeet</span>
        </h1>
        <h2 className="landingCatchPhrase">
          Find the most convenient day for <br />
          everyone in your group to <br />
          <span>meet up.</span>
        </h2>
        <p className="landingText">
          Press the button below to get started with your meet up.
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

      {/* INTRO SECTION */}

      <div className="introSection">
        <div className="textContainer">
          <h2>Why use Anonymeet?</h2>
          <p>
            Organising a meetup can be difficult. It's hard enough figuring out
            when you're all free, even harder to figure out when works well for
            the whole group, and near impossible to find the best day for
            everyone.
          </p>
          <p>Anonymeet is designed to take hassle out of this process:</p>
        </div>
        <ul className="listContainer">
          <div className="top">
            <li className="one">
              <h2>1</h2>
              <p>
                Easy to use. Submitting your availability is simple and
                straightforward, and we won't ask anyone for login details.
              </p>
            </li>
            <li className="two">
              <h2>2</h2>
              <p>
                Your preferences matter. Tell us when works well for you, not
                just when you're available.
              </p>
            </li>
          </div>
          <div className="bottom">
            <li className="three">
              <h2>3</h2>
              <p>
                Privacy is important. Other users won't be able to see your
                availability or your preferences.
              </p>
            </li>
            <li className="four">
              <h2>4</h2>
              <p>
                No need to decide. Our algorithm will figure out the best day
                for you, there's no need to figure it out yourself.
              </p>
            </li>
          </div>
        </ul>
      </div>

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
        <h2>Anonymeet</h2>
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
          © 2010 — 2020 <span> Anonymeet </span> Privacy — Terms
        </p>
      </div>

      <div className="bot1Container backWave" data-speed="2.5">
        <img src="assets/LandingPage/bot1.png" alt="background wave" />
      </div>
      <div className="bot2Container backWave" data-speed="3">
        <img src="assets/LandingPage/bot2.png" alt="background wave" />
      </div>
    </div>
  );
};

export default Landing;
