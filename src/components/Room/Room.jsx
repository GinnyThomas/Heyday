import "./room.scss";
import ResponseForm from "./ResponseForm";
import Results from "./Results";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Room = () => {
  const { state } = useLocation();

  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonClass, setButtonClass] = useState("");

  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  const proceedToRoomForm = (stateParams) => {
    navigate("../room-form", { state: stateParams });
  };

  // GREY BUTTON OUT AFTER ROOMFORM IS SUBMITTED
  const determineClass = (index) => {
    if (state.roomFormsRatings[index].length > 0) {
      return "clickDiddyClick";
    } else {
      return "button";
    }
  };

  const handleSubmit = (e, index) => {
    setButtonClass("buttonOnClick");

    let params = {
      roomID: state.roomID,
      startDate: state.startDate,
      endDate: state.endDate,
      friendCount: state.friendCount,
      friendCurrent: index,
      roomFormsRatings: state.roomFormsRatings,
    };

    // DISABLES LINK TO ROOM IF FORM HAS BEEN SUBMITTED
    if (determineClass(index) === "clickDiddyClick") {
      console.log("Form has been submitted, form is not accessible");
    } else {
      proceedToRoomForm(params);
    }
  };

  const getBeginDate = (start = state.startDate) => {
    const startDigits = start.slice(-2);
    return Number(startDigits);
  };

  const calculateRating = () => {
    let summedDateRanks = [];
    state.roomFormsRatings.forEach((sub) => {
      sub.forEach((num, index) => {
        if (summedDateRanks[index]) {
          summedDateRanks[index] += num;
        } else {
          summedDateRanks[index] = num;
        }
      });
    });

    const max = Math.max(...summedDateRanks);
    const index = summedDateRanks.indexOf(max);

    const dateFirstPart = "2022-01-";
    const dateSecondPart = getBeginDate() + index;

    const bestDate = dateFirstPart + dateSecondPart;

    return (
      <>
        <h2>SUCCESS!</h2>
        <p>The best day for everyone:</p>
        <p className="result">{bestDate}</p>
      </>
    );
  };

  const setResult = () => {
    const newArr = [];

    state.roomFormsRatings.map((rating) => {
      if (rating.length > 0) {
        newArr.push(1);
      }
    });

    if (newArr.length == state.friendCount) {
      console.log(newArr.length);
      return calculateRating();
    } else {
      return <h2>Waiting for results .....</h2>;
    }
  };

  console.log("Room.jsx state: ", state);

  console.log(
    `Friend count: ${state.friendCount}, array: [${state.roomFormsRatings}]`
  );

  return (
    <>
      <div className="room">
        <div className="wave1Container">
          <img src="assets/Room/wave1.png" alt="background wave" />
        </div>
        <div className="wave2Container">
          <img src="assets/Room/wave2.png" alt="background wave" />
        </div>
        <div className="calImg">
          <img src="assets/Room/Saly-42.png" alt="Image of Calendar" />
        </div>
        <div
          className="homebtnContainer"
          onClick={() => {
            navigate("../");
          }}
        >
          <img src="assets/Home.png" alt="Home Button" />
        </div>
        <div className="hambtnContainer">
          <img src="assets/Hamburger_menu.png" alt="Home Button" />
        </div>
        <div className="downarrContainer">
          <img src="assets/Expand_down_double.png" alt="Home Button" />
        </div>
        <h1>Welcome to your Room!</h1>
        <div className="dataContainer">
          <h3>When are you available for a meetup between:</h3>
          <p>
            {state.startDate} - {state.endDate}
          </p>
        </div>
        <div className="responseFormContainer">
          <h3>Please complete one of the available Response Forms below.</h3>
          <div className="container">
            {Array.from(Array(Number(state.friendCount)).keys()).map(
              (user, index) => (
                <ResponseForm
                  className={determineClass(index)}
                  id={index}
                  user={user}
                  onClick={(e) => handleSubmit(e, index)}
                />
              )
            )}
          </div>
          <p>
            You won't be able to access forms that are being used or have
            already been completed by someone in your group.
          </p>
        </div>
        <div className="resultContainer">{setResult()}</div>
      </div>
      <Results />
    </>
  );
};

export default Room;
