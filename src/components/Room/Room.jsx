import "./room.scss";
import ResponseForm from "./ResponseForm";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Room = (props) => {
  // -------------------
  // HANDLING ROOM DATA
  // -------------------
  
  const urlRoomID = useParams().roomidnum.slice(1)
  if (props.getRoomId() !== urlRoomID) props.setRoom(urlRoomID)

  const state = props.getRoom()

  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonClass, setButtonClass] = useState("");

  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  const proceedToRoomForm = (stateParams) => {
    navigate(`../room-form/:${state.roomID}`, { state: stateParams });
  };


  // GREY BUTTON OUT AFTER ROOMFORM IS SUBMITTED

  const determineClass = (index) => { 
    if (state.roomFormsRatings[index].length > 0) {
      return 'clickDiddyClick'
    } else {
      return 'button'
    }
  }

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
    if(determineClass(index) === 'clickDiddyClick') {
      console.log("Form has been submitted, form is not accessible")
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
      return summedDateRanks}
    );

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

  const ratingsArr = [1, 2, 3];
  let total = 0;

  for (let i = 0; i < ratingsArr.length; i++) {
    total += ratingsArr[i];
  }

  const setResult = () => {
    const newArr = [];
    let total = 0
    state.roomFormsRatings.map((ratingsArr) => {
      if (ratingsArr.length > 0) {
        for (let i = 0; i < ratingsArr.length; i++) {
          total += ratingsArr[i];
        }
        newArr.push(1);
      }
    });

    if ((total === 0) && (newArr.length == state.friendCount)) {
      return <h2>No one is available on any date! <br></br> Perhaps try different dates?</h2>;
    } else if (newArr.length == state.friendCount) {
      return calculateRating();
    } else {
      return <h2>Waiting for results...</h2>;
    }
  };

  console.log('Room.jsx state: ', state);

  console.log(
    `Friend count: ${state.friendCount}, array: [${state.roomFormsRatings}]`
  );
  
  return (
    <div className="room">
      <h1>Welcome to your Room!</h1>
      <div className="clickableLink"><button value={`localhost:3000/:${urlRoomID}`}>Copy Shareable Link</button></div>
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
                className={determineClass(index)} 
                id={index}
                user={user}
                onClick={(e) => handleSubmit(e, index)}
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
