import "./room.scss";
import ResponseForm from "./ResponseForm";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Room = (props) => {
  // const { state } = useLocation();
  
  let urlRoomID = useParams().roomidnum.slice(1)
  if (props.getRoomId() !== urlRoomID) props.setRoom(urlRoomID)

  const state = props.getRoom()

  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonClass, setButtonClass] = useState("");

  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  const proceedToRoomForm = (stateParams) => {
    navigate("../room-form", { state: stateParams });
  };

  // this need to be worked on further
  const handleSubmit = (index) => {
    // if (e.target.value === ) {}
    // console.log(e.target);
    setButtonClass("buttonOnClick");

    console.log("For testing, here's the index: " + index);

    let params = {
      roomID: state.roomID,
      startDate: state.startDate,
      endDate: state.endDate,
      friendCount: state.friendCount,
      friendCurrent: index,
      roomFormsRatings: state.roomFormsRatings,
    };

    // navigate("../room-form");
    proceedToRoomForm(params);
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
    // roomFormsRatings: [[], [3, 2, 4], [0, 2, 3], [1, 0, 3]]
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
  console.log(
    `Friend count: ${state.friendCount}, array: [${state.roomFormsRatings}]`
  );

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
          {Array.from(Array(Number(state.friendCount)).keys()).map(
            (user, index) => (
              <ResponseForm
                className={"button " + buttonClass}
                id={index}
                user={user}
                onClick={() => handleSubmit(index)}
              />
            )
          )}
        </div>
      </div>
      <div className="resultContainer">{setResult()}</div>
    </div>
  );
};

export default Room;
