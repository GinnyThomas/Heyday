import "./room.scss";
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
    roomFormsRatings: [
      [1, 2, 3],
      [3, 2, 4],
      [0, 2, 3],
      [1, 0, 3],
    ],
  };
  // const { state } = useLocation();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonClass, setButtonClass] = useState("");
  // this need to be worked on further
  const handleSubmit = (e) => {
    setButtonClass("buttonOnClick");
    navigate("../room-form");
  };

  const calculateRating = () => {
    // let datesCount = state.roomFormsRatings[0].length;
    // let summedDateRanks = Array(datesCount);

    // const newArr = summedDateRanks.map((date, index) => {
    //   if (state.roomFormsRatings.each((rating) => rating[index] === 0)) {
    //     date.push(0);
    //   } else {
    //     let sum = 0;
    //     state.roomFormsRatings.each((rating) => (sum += rating[index]));
    //     date.push(sum);
    //   }
    // });

    // const max = Math.max(...newArr);
    // const index = newArr.indexOf(max);

    // const bestDate = index + state.startDate;

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
            <button
              className={"button " + buttonClass}
              type="button"
              key={index + 1}
              onClick={() => {
                handleSubmit();
              }}
            >
              Response {user + 1}
            </button>
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
