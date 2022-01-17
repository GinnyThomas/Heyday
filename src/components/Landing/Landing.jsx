import React from "react";
import "./landing.scss";
import { useParams, useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <div className="landing">
      <div className="backgroundContainer">
        <img src="assets/LandingPage/Rectangle1.png" alt="background wave" />
      </div>
      <div className="hambtnContainer">
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
          Organise meetings with <br />
          complete <br />
          <span>anonymity</span>
        </h2>
        <p className="landingText">
          Find the most convenient day for everyone in your group to meet up.
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
    </div>
  );
};

export default Landing;
