import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const RoomForm = () => {
  // const { state } = useLocation();
  const state = {
    roomID: 1, 
    startDate: 5, 
    endDate: 12, 
    friendCount: 5, 
    friendCurrent: 1, 
    roomFormsRatings: []
  }

  const navigate = useNavigate();

  const returnToRoom = (stateParams) => {
    navigate("../room-form", stateParams);
  }

  const clickCancel = () => {
    console.log("Return to room with all parameters unchanged.")
    returnToRoom({
      roomID: state.roomID, 
      startDate: state.startDate, 
      endDate: state.endDate, 
      friendCount: state.friendCount, 
      friendCurrent: state.friendCurrent, 
      roomFormsRatings: state.roomFormsRatings
    })
  }

  const clickSubmit = (newArr) => {
    console.log("Return to room, update the roomFormsRatings object")
    const newRoomFormsRatings = state.roomFormsRatings.splice()
    newRoomFormsRatings[state.friendCurrent] = newArr
    returnToRoom({
      roomID: state.roomID, 
      startDate: state.startDate, 
      endDate: state.endDate, 
      friendCount: state.friendCount, 
      friendCurrent: state.friendCurrent, 
      roomFormsRatings: newRoomFormsRatings
    })
  }

  const renderDateBox = (date, i) => {
    console.log("loading date box: "+i)
    return (
      <DateBox key={`dateBox${i}`} date={date}/>
    )
  }

  const renderDateBoxes = () => {
    const num = state.endDate - state.startDate
    const newArr = Array.from(Array(num).keys())
    const mappedArr = newArr.map((date, i) => {return renderDateBox(date, i)})
    return (
      <div>
        {mappedArr}
      </div>
    )
  }

  console.log("RoomForm loaded");
  return (
    <div className="RoomForm">
      <h1>Calendar 1</h1>
      <h3>What days work for you?</h3>
      <p>First date: {state.startDate}, last date: {state.endDate}</p>
      <div className="DateButtons">
        {renderDateBoxes()}
      </div>
      <button>Submit</button>
      <button onClick={() => { navigate("../room");}}>Cancel</button>
    </div>
  );
};

export default RoomForm