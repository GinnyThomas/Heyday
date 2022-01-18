import React from "react";
import "./roomForm.scss";
// import DateBox from "./DateBox";
import DateButton from "./DateButton";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import day from "../../helpers/day.js";

const RoomForm = (props) => {
  const navigate = useNavigate();

  const urlRoomID = useParams().roomidnum.slice(1);
  if (props.getRoomId() !== urlRoomID) props.setRoom(urlRoomID);

  const roomData = props.getRoom();

  const { state } = useLocation();

  const friendInt = () => {
    return state === null ? -1 : state.friendCurrent;
  };

  // ---------------
  // VALUES MANAGER
  // ---------------

  const dayCount = () =>
    day.difference(roomData.startDate, roomData.endDate) + 1;

  const datesArrBase = Array.from(Array(dayCount()).fill(0));

  const [datesArr, setDatesArr] = useState(datesArrBase);

  const updateBoxVals = (i, val) => {
    const newArr = datesArr.slice();
    newArr[i] = val;
    setDatesArr(newArr);
    console.log("Updated datesArr to " + newArr);
  };

  // ---------------
  // NAV MANAGER
  // ---------------

  const returnToRoom = () => {
    navigate(`../room/:${roomData.roomID}`);
  };

  const clickCancel = () => {
    console.log("Return to room with all parameters unchanged.");
    returnToRoom();
  };

  const clickSubmit = () => {
    const newArr = datesArr.slice();
    console.log(
      "Return to room, update the roomFormsRatings object to: " + newArr
    );
    const roomArr = roomData.roomFormsRatings.slice();
    roomArr[friendInt()] = newArr;
    props.editRoom(roomData.roomID, { roomFormsRatings: roomArr });
    returnToRoom();
  };

  // ---------------
  // RENDERING
  // ---------------

  const getDuration = () =>
    day.difference(roomData.startDate, roomData.endDate);

  const renderDateBox = (i) => (
    <DateButton
      key={`dateBox${i}`}
      index={i}
      visible={true}
      date={roomData.startDate}
      onClick={(i, val) => updateBoxVals(i, val)}
    />
  );

  const renderHiddenBox = (i) => (
    <DateButton
      key={`hiddenBox${i}`}
      index={i}
      visible={false}
      date={roomData.startDate}
    />
  );

  const beforeDates = () => {
    const beforeCount =
      getDuration() < 7 ? 0 : day.sinceMonday(roomData.startDate);
    const hiddenArr = new Array(beforeCount).fill(0);
    return hiddenArr.map((_val, i) => renderHiddenBox(i - beforeCount));
  };

  const afterDates = () => {
    const afterCount =
      getDuration() < 7 || day.toDate(roomData.endDate).getDay() === 0
        ? 0
        : 6 - day.sinceMonday(roomData.endDate);
    const hiddenArr = new Array(afterCount).fill(0);
    return hiddenArr.map((_val, i) => renderHiddenBox(i + getDuration() + 1));
  };

  const renderDateBoxes = () => {
    const beforeDateBoxes = beforeDates();
    const afterDateBoxes = afterDates();
    const dateBoxes = datesArr.map((_val, i) => renderDateBox(i));
    return (
      <div>
        {beforeDateBoxes}
        {dateBoxes}
        {afterDateBoxes}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="RoomForm">
        <div className="wave1Container">
          <img src="assets/RoomForm/wave1.png" alt="background wave" />
        </div>
        <div className="wave2Container">
          <img src="assets/RoomForm/wave2.png" alt="background wave" />
        </div>
        <div className="wave3Container">
          <img src="assets/RoomForm/wave3.png" alt="background wave" />
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
          <img src="assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
        </div>
        <h1>Calendar {friendInt() + 1}</h1>
        <h3>What days work for you?</h3>
        <p>
          First date: {day.toCalDate(roomData.startDate)}, last date:{" "}
          {day.toCalDate(roomData.endDate)}
        </p>
        <div className="DateButtons">{renderDateBoxes()}</div>
        <button onClick={() => clickSubmit()}>Submit</button>
        <button onClick={() => clickCancel()}>Cancel</button>
      </div>
    );
  };

  const blockContent = () => {
    return (
      <div className="RoomFormError">
        <p>Please choose a response form that's not in use.</p>
        <button onClick={() => clickCancel()}>Return to room</button>
      </div>
    );
  };

  return friendInt() >= 0 ? renderContent() : blockContent();
};

export default RoomForm;
