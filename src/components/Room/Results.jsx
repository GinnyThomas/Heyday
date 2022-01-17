import "./results.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  return (
    <div className="results">
      <div className="homebtnContainer">
        <img src="assets/Home.png" alt="Home Button" />
      </div>
      <div className="hambtnContainer">
        <img src="assets/Hamburger_menu.png" alt="Home Button" />
      </div>
      <div className="uparrContainer">
        <img src="assets/Expand_up_double.png" alt="Home Button" />
      </div>
      <div className="resultImg">
        <img src="assets/Result/Saly-26.png" alt="Home Button" />
      </div>
      <div className="whiteBox"></div>
      <h1>The results are in!</h1>
    </div>
  );
};

export default Results;
