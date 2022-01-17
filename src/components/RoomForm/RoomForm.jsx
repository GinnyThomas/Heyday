import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";
import { useNavigate, useLocation, useParams} from "react-router-dom";
import { useState } from "react";
import day from "../../helpers/day.js";

const RoomForm = (props) => {

  const navigate = useNavigate();

  const urlRoomID = useParams().roomidnum.slice(1)
  if (props.getRoomId() !== urlRoomID) props.setRoom(urlRoomID)

  const roomData = props.getRoom()

  const { state } = useLocation();

  const friendInt = () => {
    return (state === null) ? -1 : state.friendCurrent
  }

  // ---------------
  // VALUES MANAGER
  // ---------------

  const dayCount = () => day.difference(roomData.startDate, roomData.endDate) + 1

  const datesArrBase = Array.from(Array(dayCount()).fill(0))
  
  const [datesArr, setDatesArr] = useState(datesArrBase);

  const updateBoxVals = (i, val) => {
    const newArr = datesArr.slice()
    newArr[i] = val
    setDatesArr(newArr)
    console.log("Updated datesArr to "+newArr)
  }

  // ---------------
  // NAV MANAGER
  // ---------------

  const returnToRoom = () => {
    navigate(`../room/:${roomData.roomID}`);
  }

  const clickCancel = () => {
    console.log("Return to room with all parameters unchanged.")
    returnToRoom()
  }

  const clickSubmit = () => {
    const newArr = datesArr.slice()
    console.log("Return to room, update the roomFormsRatings object to: " + newArr)
    const roomArr = roomData.roomFormsRatings.slice()
    roomArr[friendInt()] = newArr
    props.editRoom(roomData.roomID, {roomFormsRatings: roomArr})
    returnToRoom()
  }

  // ---------------
  // RENDERING
  // ---------------

  const renderDateBox = (_v, i) => {
    if (datesArr.length !== dayCount()) setDatesArr(datesArrBase)
    return (
      <DateBox key={`dateBox${i}`} index={i} date={roomData.startDate} onClick={(i, val) => updateBoxVals(i, val)}/>
    )
  }

  const renderDateBoxes = () => {
    const mappedArr = datesArr.map((val, i) => renderDateBox(val, i))
    return <div>{mappedArr}</div>
  }

  const renderContent = () => {
    return (
      <div className="RoomForm">
        <h1>Calendar {friendInt() + 1}</h1>
        <h3>What days work for you?</h3>
        <p>First date: {day.toCalDate(roomData.startDate)}
          , last date: {day.toCalDate(roomData.endDate)}</p>
        <div className="DateButtons">
          {renderDateBoxes()}
        </div>
        <button onClick={() => clickSubmit()}>Submit</button>
        <button onClick={() => clickCancel()}>Cancel</button>
      </div>
    );
  }

  const blockContent = () => {
    return (
      <div className="RoomFormError">
        <p>Please choose a response form that's not in use.</p>
        <button onClick={() => clickCancel()}>Return to room</button>
      </div>
    )
  }

  return friendInt() >= 0 ? renderContent() : blockContent()
};

export default RoomForm