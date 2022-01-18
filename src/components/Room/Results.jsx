import "./results.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Results = ({ date }) => {
  return (
    <div className="results">
      <div className="wave1Container">
        <img src="/assets/Result/wave1.png" alt="background wave" />
      </div>
      <div className="wave2Container">
        <img src="/assets/Result/wave2.png" alt="background wave" />
      </div>
      <div className="wave3Container">
        <img src="/assets/Result/wave3.png" alt="background wave" />
      </div>
      <div className="homebtnContainer">
        <img src="/assets/Home.png" alt="Home Button" />
      </div>
      <div className="hambtnContainer">
        <img src="/assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
      </div>
      <div className="uparrContainer">
        <img src="/assets/Expand_up_double.png" alt="Home Button" />
      </div>
      <div className="resultImg">
        <img src="/assets/Result/Saly-26.png" alt="Home Button" />
      </div>
      <h1>The results are in!</h1>

      <div className="whiteBox"></div>
      <div className="resultContainer">
        <h2>The best day for everyone is:</h2>
        <h3>{date}</h3>
        <div className="iconContainer">
        <p>Gold: </p>
        <p>Silver: </p>
        <p>Bronze: </p>
        </div>
        <ul>
          <li>- Other days that are equally convenient but further in the future: <span>2020</span> </li>
          <li>- The day with the highest score (but not everyone is available): <span>2020</span> </li>
          <li>- The day with the most golds:: <span>2020</span> </li>
          <li>- The soonest day everyone's available: <span>2020</span> </li>
          <li>- The latest day everyone's available: <span>2020</span> </li>
        </ul>
      </div>
    </div>
  );
};

export default Results;
