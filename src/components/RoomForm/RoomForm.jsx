import React from "react";
import "./roomForm.scss";
// import DateBox from "./DateBox";
import DateButton from "./DateButton";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import day from "../../helpers/day.js";
import parallax from "../../helpers/mousemove";

const RoomForm = (props) => {
  document.addEventListener("mousemove", parallax);
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
  // CALCULATIONS
  // ---------------

  const getDuration = () =>
    day.difference(roomData.startDate, roomData.endDate);

  if (datesArr.length < getDuration()) setDatesArr(datesArrBase)

  // Returns an array of blank boxes to sit in front of the selected dates
  const beforeDates = () => {
    const beforeCount =
      getDuration() < 7 ? 0 : day.sinceMonday(roomData.startDate);
    const hiddenArr = new Array(beforeCount).fill(0);
    return hiddenArr.map((_val, i) => renderBlankBox(i - beforeCount));
  };

  // Returns an array of blank boxes to sit after the selected dates
  const afterDates = () => {
    const afterCount =
      getDuration() < 7 || day.toDate(roomData.endDate).getDay() === 0
        ? 0
        : 6 - day.sinceMonday(roomData.endDate);
    const hiddenArr = new Array(afterCount).fill(0);
    return hiddenArr.map((_val, i) => renderBlankBox(i + getDuration() + 1));
  };

  // -------------------
  // RENDER ELEMENTS
  // -------------------

  const renderBackground = () => (
    <>
      <div className="wave1Container backWave" data-speed="1.5"><img src="/assets/RoomForm/wave1.png" alt="background wave" /></div>
      <div className="wave2Container backWave" data-speed="2.5"><img src="/assets/RoomForm/wave2.png" alt="background wave" /></div>
      <div className="wave3Container backWave" data-speed="0.5"><img src="/assets/RoomForm/wave3.png" alt="background wave" /></div>
    </>
  )

  // Include the Home button and Hamburger
  const renderIcons = () => (
    <>
    <div
      className="homebtnContainer"
      onClick={() => {
        navigate("../");
      }}
    >
    <img src="/assets/Home.png" alt="Home Button" /></div>
    <div className="hambtnContainer">
      <img src="/assets/Hamburger_menu.png" alt="Hamburger Menu Button" />
    </div>
    </>
  )

  const renderDateBox = (i) => (
    <DateButton
      key={`dateBox${i}`}
      index={i}
      visible={true}
      date={roomData.startDate}
      onClick={(i, val) => updateBoxVals(i, val)}
    />
  );

  const renderBlankBox = (i) => (
    <DateButton
      key={`hiddenBox${i}`}
      index={i}
      visible={false}
      date={roomData.startDate}
    />
  );

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

  const goldButton = () => <img src="/assets/RoomForm/DateButton/goldSquare.png" alt="gold button" className="keyButton"/>
  const silverButton = () => <img src="/assets/RoomForm/DateButton/silverSquare.png" alt="silver button" className="keyButton"/>
  const bronzeButton = () => <img src="/assets/RoomForm/DateButton/bronzeSquare.png" alt="bronze button" className="keyButton"/>
  const whiteButton = () => <img src="/assets/RoomForm/DateButton/whiteSquare.png" alt="white button" className="keyButton"/>

  const renderContent = () => {
    return (
      <div className="Content">
        <div className="RoomFormBackground">
          {renderBackground()}
          {renderIcons()}
        </div>
        <div className="RoomForm">
          <h2>Response Form</h2>
          <h3>
            When are you available for a meetup between{" "}
            <span>{day.toCalDate(roomData.startDate)}</span> and{" "}
            <span>{day.toCalDate(roomData.endDate)}</span>?
          </h3>
          <ul className="iconContainer">
            <p>Click on the calendar buttons below to cycle through the options:</p>
            <div className="iconBox">{whiteButton()}<p>you're not available to meet up on this day</p></div>
            <div className="iconBox">{bronzeButton()}<p>you're available, but it's an inconvenient day</p></div>
            <div className="iconBox">{silverButton()}<p>you're available and it's a convenient day</p></div>
            <div className="iconBox">{goldButton()}<p>you're available and it's a preferred day</p></div>
          </ul>
          <div className="DateButtons">{renderDateBoxes()}</div>
        </div>
        <div className="footerButtons">
          <p>
            Please note: to ensure your response is private, no one will be able
            to access or edit this form once you have submitted it, including you.
            Please make sure you've made the correct choices before submitting.
          </p>
          <div className="btnContainer">
            <button onClick={() => clickSubmit()}>Submit</button>
            <button onClick={() => clickCancel()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  const blockContent = () => {
    return (
      <div className="Content">
        <div className="RoomForm ErrorPage">
          <div className="RoomFormBackground">
            {renderBackground()}
            {renderIcons()}
          </div>
          <div className="RoomFormError">
            <p>Please choose a response form that's not in use.</p>
            <button onClick={() => clickCancel()}>Return to room</button>
          </div>
        </div>
      </div>
    );
  };

  // -------------------
  // RENDER
  // -------------------

  return friendInt() >= 0 ? renderContent() : blockContent();
};

export default RoomForm;
