import "./results.scss";
import { Link } from "react-scroll";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import * as emailjs from "emailjs-com";


const emailResult = 'Hello'
const Results = ({ date }) => {
  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  // ---------------
  // FORM SUBMIT
  // ---------------

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 
    process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
    .then((result) => {
    alert("Results Sent, Thank you for using Anonymeet", result.text); //Pop up message if email sent ok
    },
    (error) => {
    alert("An error occurred, Please try again", error.text); //Pop up message if email not sent (user email address is wrong)
    });
    };

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
        <ul className="iconContainer">
          <li>
            <img src="/assets/RoomForm/gold.png" alt="gold button" />
            <p>x 6 </p>
          </li>
          <li>
            <img src="/assets/RoomForm/silver.png" alt="silver button" />
            <p>x 5 </p>
          </li>
          <li>
            <img src="/assets/RoomForm/bronze.png" alt="bronze button" />
            <p>x 3 </p>
          </li>
        </ul>
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
            <input
              type="hidden"
              name="emailResult"
              value= {emailResult}
            ></input>
         
          <button type="submit">Submit</button>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
          <script type="text/javascript">
          (function() {
          emailjs.init("user_59U7r4ChcRg0J38008gzW")
          })();
          </script>
        </div>
      </form>
    </div>
  );
};

export default Results;

