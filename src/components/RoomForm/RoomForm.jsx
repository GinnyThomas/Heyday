import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";
import DateButton from "./DateButton";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import day from "../../helpers/day.js";

const RoomForm = () => {
  const { state } = useLocation();

  // ---------------
  // VALUES MANAGER
  // ---------------

  const getDuration = (start = state.startDate, end = state.endDate) => {
    const startDigits = start.slice(-2)
    const endDigits = end.slice(-2)
    return Number(endDigits) - Number(startDigits)
  }

  const [datesArr, setDatesArr] = useState(Array.from(Array(getDuration() + 1).fill(0)));

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
    navigate("../room", { state: stateParams });
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

  const clickSubmit = (ind = state.friendCurrent) => {
    const newArr = datesArr
    console.log("Return to room, update the roomFormsRatings object to: " + newArr)
    const newRoomFormsRatings = state.roomFormsRatings
    newRoomFormsRatings[ind] = newArr
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

  const renderDateBox = (i) => <DateButton key={`dateBox${i}`} index={i} visible={true} date={state.startDate} onClick={(i, val) => updateBoxVals(i, val)}/>

  const renderHiddenBox = (i) => <DateButton key={`hiddenBox${i}`} index={i} visible={false} date={state.startDate}/>

  const beforeDates = () => {
    const beforeCount = (getDuration() < 7) ? 0 : day.sinceMonday(state.startDate)
    const hiddenArr = new Array(beforeCount).fill(0)
    return hiddenArr.map((_val, i) => renderHiddenBox(i - beforeCount))
  }

  const afterDates = () => {
    const afterCount = (getDuration() < 7 || day.toDate(state.endDate).getDay() === 0) ? 0 : 6 - day.sinceMonday(state.endDate)
    const hiddenArr = new Array(afterCount).fill(0)
    return hiddenArr.map((_val, i) => renderHiddenBox(i + getDuration() + 1))
  }

  const renderDateBoxes = () => {
    const beforeDateBoxes = beforeDates()
    const afterDateBoxes = afterDates()
    const dateBoxes = datesArr.map((_val, i) => renderDateBox(i))
    return (
      <div>
        {beforeDateBoxes}
        {dateBoxes}
        {afterDateBoxes}
      </div>
    )
  }

  console.log("Opening RoomForm with friend: "+state.friendCurrent)

  return (
    <div className="RoomForm">
      <h1>Calendar {state.friendCurrent + 1}</h1>
      <h3>What days work for you?</h3>
      <p>First date: {day.toCalDate(state.startDate)}
        , last date: {day.toCalDate(state.endDate)}</p>
      <div className="DateButtons">
        {renderDateBoxes()}
      </div>
      <button onClick={() => clickSubmit()}>Submit</button>
      <button onClick={() => clickCancel()}>Cancel</button>
    </div>
  );
};

export default RoomForm