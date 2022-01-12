import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const RoomForm = () => {
  // const { state } = useLocation();
  const today = Date.now()
  const day = (1000 * 60 * 60 * 24)
  const duration = 8

  const myStartDate = new Date(today)
  const myEndDate = new Date(today + (day * duration))

  const state = {
    roomID: 1, 
    startDate: myStartDate, 
    endDate: myEndDate, 
    friendCount: 5, 
    friendCurrent: 1, 
    roomFormsRatings: []
  }

  // ---------------
  // VALUES MANAGER
  // ---------------

  const [datesArr, setDatesArr] = useState(Array.from(Array(duration + 1).fill(0)));

  const updateBoxVals = (i, val) => {
    const newArr = datesArr
    newArr[i] = val
    setDatesArr(newArr)
    console.log("Updated datesArr to "+newArr)
  }

  // ---------------
  // NAV MANAGER
  // ---------------

  const navigate = useNavigate();

  const returnToRoom = (stateParams) => {
    navigate("../room", stateParams);
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

  const clickSubmit = () => {
    const newArr = datesArr
    console.log("Return to room, update the roomFormsRatings object to: " + newArr)
    const newRoomFormsRatings = state.roomFormsRatings.splice()
    newRoomFormsRatings.push(newArr)
    returnToRoom({
      roomID: state.roomID, 
      startDate: state.startDate, 
      endDate: state.endDate, 
      friendCount: state.friendCount, 
      friendCurrent: state.friendCurrent, 
      roomFormsRatings: newRoomFormsRatings
    })
  }

  // ---------------
  // RENDERING
  // ---------------

  const renderDateBox = (val, i) => {
    // console.log("loading date box: "+i)
    return (
      <DateBox key={`dateBox${i}`} index={i} date={new Date(today + (day * i))} onClick={(i, val) => updateBoxVals(i, val)}/>
    )
  }

  const renderDateBoxes = () => {
    const mappedArr = datesArr.map((val, i) => renderDateBox(val, i))
    return (
      <div>
        {mappedArr}
      </div>
    )
  }

  const formatDate = (date) => date < 10 ? `0${date}` : `${date}`

  return (
    <div className="RoomForm">
      <h1>Calendar 1</h1>
      <h3>What days work for you?</h3>
      <p>First date: {formatDate(state.startDate.getDate())}/{formatDate(state.startDate.getMonth() + 1)}
        , last date: {formatDate(state.endDate.getDate())}/{formatDate(state.startDate.getMonth() + 1)}</p>
      <div className="DateButtons">
        {renderDateBoxes()}
      </div>
      <button onClick={() => clickSubmit()}>Submit</button>
      <button onClick={() => clickCancel()}>Cancel</button>
    </div>
  );
};

export default RoomForm