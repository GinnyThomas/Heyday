import "./room.scss";
import ResponseForm from "./ResponseForm";
import Results from "./Results";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import finalResult from "../../helpers/calculation.js"
import day from "../../helpers/day.js";

<<<<<<< HEAD
const Room = () => {
  const { state } = useLocation();
=======
const Room = (props) => {
  // -------------------
  // HANDLING ROOM DATA
  // -------------------
  
  const urlRoomID = useParams().roomidnum.slice(1)
  if (props.getRoomId() !== urlRoomID) props.setRoom(urlRoomID)

  const state = props.getRoom()
>>>>>>> main

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
<<<<<<< HEAD
  const determineClass = (index) => {
=======

  const determineClass = (index) => { 
>>>>>>> main
    if (state.roomFormsRatings[index].length > 0) {
      return "clickDiddyClick";
    } else {
      return "button";
    }
  };

<<<<<<< HEAD
  const handleSubmit = (e, index) => {
=======
  const handleSubmit = (e, index) => {           

>>>>>>> main
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
<<<<<<< HEAD
    if (determineClass(index) === "clickDiddyClick") {
      console.log("Form has been submitted, form is not accessible");
=======
    if(determineClass(index) === 'clickDiddyClick') {
      console.log("Form has been submitted, form is not accessible")
>>>>>>> main
    } else {
      proceedToRoomForm(params);
    }
  };

  // const getBeginDate = (start = state.startDate) => {
  //   const startDigits = start.slice(-2);
  //   return Number(startDigits);
  // };

  const setResult = () => {
    const roomForms = state.roomFormsRatings
    if(!finalResult.isReady(roomForms)) return <h2>Waiting for results...</h2>;
    const bestDay = finalResult.getBestDay(roomForms)
    const medalCounts = finalResult.medalCounts(roomForms, bestDay)
    if(bestDay < 0) return <h2>No one is available on any date! <br></br> Perhaps try different dates?</h2>;
    return (
      <div>
        <h2>SUCCESS!</h2>
        <p>The best day for everyone:</p>
        <p className="result">{day.toCalDate(state.startDate, bestDay)}</p>
        <p>Gold: {medalCounts[0]}</p>
        <p>Silver: {medalCounts[1]}</p>
        <p>Bronze: {medalCounts[2]}</p>
      </div>
    );
  };

  console.log('Room.jsx state: ', state);

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
        <div className="clickableLink">
        <button value={`localhost:3000/room/:${urlRoomID}`} onClick={() => {navigator.clipboard.writeText(`localhost:3000/room/:${urlRoomID}`)}}>Copy Shareable Link</button>
      </div>
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
