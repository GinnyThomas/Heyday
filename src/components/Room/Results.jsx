import "./results.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  return (
    <div className="results">
      <div className="wave1Container">
        <img src="assets/Result/wave1.png" alt="background wave" />
      </div>
      <div className="wave2Container">
        <img src="assets/Result/wave2.png" alt="background wave" />
      </div>
      <div className="wave3Container">
        <img src="assets/Result/wave3.png" alt="background wave" />
      </div>
      <div className="homebtnContainer">
        <img src="../../../public/assets/Home.png" alt="Home Button" />
      </div>
      <div className="hambtnContainer">
        <img src="assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
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
