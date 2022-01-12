import "./room.scss";
import ResponseForm from "./ResponseForm";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Room = () => {
  let navigate = useNavigate();
  const state = {
    roomID: 1,
    startDate: 5,
    endDate: 7,
    friendCount: 4,
    friendCurrent: 1,
    roomFormsRatings: [[], [3, 2, 4], [0, 2, 3], [1, 0, 3]],
  };
  // const { state } = useLocation();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonClass, setButtonClass] = useState("");

  // this need to be worked on further
  const handleSubmit = (e) => {
    // if (e.target.value === ) {}
    console.log(e.target);
    setButtonClass("buttonOnClick");
    // navigate("../room-form");
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

    const bestDate = index + state.startDate;

    return (
      <>
        <h2>SUCCESS!</h2>
        <p>The best day for everyone:</p>
        <p className="result">{bestDate}</p>
      </>
    );
  };

  return (
    <div className="room">
      <h1>Welcome to your Room!</h1>
      <div className="dataContainer">
        <h3>You'll be meeting up between:</h3>
        <p>
          {state.startDate} - {state.endDate}
        </p>
      </div>
      <div className="responseFormContainer">
        <h3>Choose a response to fill out:</h3>
        <div className="container">
          {Array.from(Array(state.friendCount).keys()).map((user, index) => (
            <ResponseForm
              className={"button " + buttonClass}
              id={index}
              user={user}
              onClick={handleSubmit}
            />
          ))}
        </div>
      </div>
      <div className="resultContainer">
        {state.roomFormsRatings.length < state.friendCount ? (
          <h2>Waiting for results .....</h2>
        ) : (
          calculateRating()
        )}
      </div>
    </div>
  );
};

export default Room;
