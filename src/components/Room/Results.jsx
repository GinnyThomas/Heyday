import "./results.scss";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import * as emailjs from "emailjs-com";
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        'service_4wwy49e',
        'template_62oax9b',
        e.target,
        'user_z6BZpeiZKoUkWELw5n1ws'
      )
      .then(
        (result) => {
          alert("Results Sent, Thank you for using Heyday", result.text); //Pop up message if email sent ok
        },
        (error) => {
          alert("An error occurred, Please try again", error.text); //Pop up message if email not sent (user email address is wrong)
        }
      );
  };

  // ----------------
  // DATA MANAGEMENT
  // ----------------

  const formsArr = finalResult.getFinalResult(props.formRatings),
    bestDay =
      (formsArr.best != null && formsArr.best >= 0) ? day.toInt(props.date, formsArr.best) : null,
    bestMedals = formsArr.bestMedals != null ? formsArr.bestMedals : null,
    otherDay =
      (formsArr.next != null && formsArr.next >= 0) ? day.toInt(props.date, formsArr.next) : null,
    otherMedals = formsArr.nextMedals != null ? formsArr.nextMedals : null,
    bestIsHighest = formsArr.bestIsHighest;

  const displayBest =
    bestDay != null ? `${day.weekDay(bestDay)} ${day.display(bestDay)}` : `b`;
  const displayOther = `${day.weekDay(otherDay)} ${day.display(otherDay)}`;

  // ----------------
  // EMAIL MESSAGE
  // ----------------

  const emailMessage = () => {
    if (bestDay === null) return null;
    return bestIsHighest
      ? `The most popular day for your group to meet up is ${day.toCalDate(
          bestDay
        )}`
      : `The best day for everyone to meet is ${day.toCalDate(bestDay)}`;
  };

  // console.log(emailMessage());

  // -------------------
  // RENDER ELEMENTS
  // -------------------

  const renderBackground = () => (
    <>
      <div className="wave1Container backWave" data-speed="0">
        <img src="/assets/Result/wave1.png" alt="background wave" />
      </div>
      <div className="wave2Container backWave" data-speed="-1.5">
        <img src="/assets/Result/wave2.png" alt="background wave" />
      </div>
      <div className="wave3Container backWave" data-speed="2">
        <img src="/assets/Result/wave3.png" alt="background wave" />
      </div>
      <div className="resultImg">
        <img src="/assets/Result/Saly-26.png" alt="Home Button" />
      </div>
    </>
  );

  const renderIcons = () => (
    <>
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
    </>
  );

  const goldButton = () => (
    <img src="/assets/RoomForm/gold.png" alt="gold button" />
  );
  const silverButton = () => (
    <img src="/assets/RoomForm/silver.png" alt="silver button" />
  );
  const bronzeButton = () => (
    <img src="/assets/RoomForm/bronze.png" alt="bronze button" />
  );

  const renderMainResult = () => {
    if (bestDay != null)
      return (
        <div className="resultsDisplay">
          <h2>
            {bestIsHighest
              ? "The most popular day is:"
              : "The best day for everyone is:"}
          </h2>
          <h3>{displayBest}</h3>
          <ul className="iconContainer">
            <li>
              {goldButton()}
              <p>x{bestMedals[0]}</p>
            </li>
            <li>
              {silverButton()}
              <p>x{bestMedals[1]}</p>
            </li>
            <li>
              {bronzeButton()}
              <p>x{bestMedals[2]}</p>
            </li>
          </ul>
          {renderUnavailables()}
          {renderOtherResult()}
        </div>
      );
    return (
      <div className="resultsDisplay">
        <p className="errorMessage">
          Sorry, it looks like no one is available at any time.
        </p>
      </div>
    );
  };

  const renderUnavailables = () => {
    const pluralPeople = bestMedals[3] > 1 ? "people are" : "person is"
    if (bestMedals[3] > 0)
      return (
        <p className="unavailability">x{bestMedals[3]} {pluralPeople} unavailable</p>
      );
  };

  const renderOtherResult = () => {
    if (otherDay != null)
      return (
        <div className="otherResults">
          <p className="bold">
            {bestIsHighest
              ? "Best day when everyone's free:"
              : "Most popular day (but not everyone's free):"}
          </p>
          <p className="bold">
            {displayOther} (
            <span className="gold bold">x{otherMedals[0]} </span>
            <span className="silver bold">x{otherMedals[1]} </span>
            <span className="bronze bold">x{otherMedals[2]}</span>)
          </p>
        </div>
      );
  };

  const renderEmail = () => {
    if (bestDay != null)
      return (
        <form className="formContainer" onSubmit={handleSubmit}>
        <h2>Please input your email address to receive a copy of the result (please note: we don't store your email address)</h2>
        <div className="inputContainer">
          <label>
            <input type="text" name="email" placeholder="email address"></input>
          </label>
          <input type="hidden" name="emailMessage" value={emailMessage()}></input>

          <button type="submit">Submit</button>
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          ></script>
          <script type="text/javascript">
            (function() {emailjs.init("user_z6BZpeiZKoUkWELw5n1ws")})();
          </script>
        </div>
        </form>
      );
  };

  // -------------------
  // RENDER
  // -------------------

  return (
    <div className="results">
      {renderBackground()}
      {renderIcons()}
      <h1>The results are in!</h1>
      <div className="resultContainer">{renderMainResult()}</div>
      {renderEmail()}
    </div>
  );
};

export default Results;
