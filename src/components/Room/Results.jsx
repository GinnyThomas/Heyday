import "./results.scss";
import { Link } from "react-scroll";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Results = ({ date }) => {
  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  // ---------------
  // FORM SUBMIT
  // ---------------

  const handleSubmit = () => {};

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
      <div
        className="homebtnContainer"
        onClick={() => {
          navigate("../");
        }}
      >
        <img src="/assets/Home.png" alt="Home Button" />
      </div>
      <div className="hambtnContainer">
        <img src="/assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
      </div>
      <div className="uparrContainer">
        <Link to="room" spy={true} smooth={true}>
          <img src="/assets/Expand_up_double.png" alt="Up arrow Button" />
        </Link>
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
          <li>
            - Other days that are equally convenient but further in the future:{" "}
            <span>2020</span>{" "}
          </li>
          <li>
            - The day with the highest score (but not everyone is available):{" "}
            <span>2020</span>{" "}
          </li>
          <li>
            - The day with the most golds:: <span>2020</span>{" "}
          </li>
          <li>
            - The soonest day everyone's available: <span>2020</span>{" "}
          </li>
          <li>
            - The latest day everyone's available: <span>2020</span>{" "}
          </li>
        </ul>
      </div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <h2>Please input your email address to receive a copy of the result</h2>
        <div className="inputContainer">
          <label>
            <input
              type="text"
              name="email"
              placeholder="email address"
              // value={friendCount}
              // onChange={handleFriendCount}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Results;
