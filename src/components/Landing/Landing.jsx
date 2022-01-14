import React from "react";
import "./landing.scss";
import { useParams, useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing_title">
        <h1>
          Welcome to <span>Anonymeet</span>
        </h1>
      </div>
      <h2>Organise meetings with complete anonymity</h2>
      <div className="landing_paragraph">
        {" "}
        Welcome to the best anonymous preference survey app fo arrange a meet-up
        with friends.
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            navigate("setup");
          }}
        >
          Start Anonymeet
        </button>
      </div>
    </div>
  );
};

export default Landing;
