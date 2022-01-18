import "./results.scss";
import { Link } from "react-scroll";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import finalResult from "../../helpers/calculation.js";
import day from "../../helpers/day.js";

const Results = (props) => {
  // ----------------
  // NAV HANDLING
  // ----------------

  let navigate = useNavigate();

  // ----------------
  // BUTTON CLICKS
  // ----------------

  const handleSubmit = () => {};

  // ----------------
  // DATA MANAGEMENT
  // ----------------

  const formsArr = finalResult.getFinalResult(props.formRatings),
    bestDay = day.toInt(props.date, formsArr.best),
    bestMedals = formsArr.bestMedals,
    otherDay = (formsArr.next != null) ? day.toInt(props.date, formsArr.next) : null,
    otherMedals = (formsArr.nextMedals != null) ? formsArr.nextMedals : null,
    bestIsHighest = formsArr.bestIsHighest

  const displayBest = `${day.weekDay(bestDay)} ${day.display(bestDay)}`
  const displayOther = `${day.weekDay(otherDay)} ${day.display(otherDay)}`

  // -------------------
  // RENDER ELEMENTS
  // -------------------

  const goldButton = () => <img src="/assets/RoomForm/gold.png" alt="gold button" />
  const silverButton = () => <img src="/assets/RoomForm/silver.png" alt="silver button" />
  const bronzeButton = () => <img src="/assets/RoomForm/bronze.png" alt="bronze button" />

  const renderBackground = () => (
    <>
      <div className="wave1Container"><img src="/assets/Result/wave1.png" alt="background wave" /></div>
      <div className="wave2Container"><img src="/assets/Result/wave2.png" alt="background wave" /></div>
      <div className="wave3Container"><img src="/assets/Result/wave3.png" alt="background wave" /></div>
      <div className="resultImg"><img src="/assets/Result/Saly-26.png" alt="Home Button" /></div>
    </>
  )

  const renderIcons = () => (
    <>
      <div
          className="homebtnContainer"
          onClick={() => {
            navigate("../");
          }}
      ><img src="/assets/Home.png" alt="Home Button" /></div>
      <div className="hambtnContainer">
        <img src="/assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
      </div>
      <div className="uparrContainer">
        <Link to="room" spy={true} smooth={true}>
          <img src="/assets/Expand_up_double.png" alt="Up arrow Button" />
        </Link>
      </div>
    </>
  )

  const renderUnavailables = () => {
    if (bestMedals[3] > 0) return (
      <>
        <p className="unavailability">x{bestMedals[3]} person is unavailable</p>
      </>
    )
  }

  const renderMainResult = () => (
    <>
      <h2>The best day for everyone is:</h2>
        <h3>{displayBest}</h3>
        <ul className="iconContainer">
          <li>{goldButton()}<p>x{bestMedals[0]}</p></li>
          <li>{silverButton()}<p>x{bestMedals[1]}</p></li>
          <li>{bronzeButton()}<p>x{bestMedals[2]}</p></li>
        </ul>
        {renderUnavailables()}
    </>
  )

  const renderOtherResult = () => {
    if (otherDay != null) return (
      <div className="otherResults">
        <p>
          {bestIsHighest 
          ? "Best day when everyone's' free:" 
          : "Most popular day (but not everyone's free):"}
        </p>
        <p className="bold">{displayOther}</p>
        <p>
          <span className="gold bold">x{otherMedals[0]} </span> 
          <span className="silver bold">x{otherMedals[1]} </span> 
          <span className="bronze bold">x{otherMedals[2]}</span>
        </p>
      </div>
    )
  }

  // -------------------
  // RENDER
  // -------------------

  return (
    <div className="results">
      {renderBackground()}
      {renderIcons()}
      <h1>The results are in!</h1>
      <div className="resultContainer">
        <div className="resultsDisplay">
          {renderMainResult()}
          {renderOtherResult()}
        </div>
      </div>

      {/* <div className="resultContainer">
        <ul className="otherResults">
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
      </div> */}
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
