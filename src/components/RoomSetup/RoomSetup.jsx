import React from "react";
import "./roomSetup.scss";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

const RoomSetup = () => {
  // ---------------
  // STATE HANDLING
  // ---------------

  const [startDate, setStartDate] = useState("2022-01-12");
  const [endDate, setEndDate] = useState("2022-01-19");
  const [friendCount, setFriendCount] = useState(3);

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleFriendCount = (event) => {
    setFriendCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ratings = new Array(Number(friendCount)).fill([]);

    let state = {
      roomID: 1,
      startDate: startDate,
      endDate: endDate,
      friendCount: friendCount,
      friendCurrent: -1,
      roomFormsRatings: ratings,
    };

    console.log("RoomSetup.jsx: State: ", state);
    proceedToRoom(state);
  };

  // ---------------
  // NAV HANDLING
  // ---------------

  let navigate = useNavigate();

  const proceedToRoom = (stateParams) => {
    navigate("../room", { state: stateParams });
  };

  return (
    <div className="roomsetup">
      <div className="backgroundContainer">
        <img src="assets/ResponseForm/Rectangle1.png" alt="background wave" />
        {/* <img src="assets/ResponseForm/Rectangle1.png" alt="background wave" />
        <img src="assets/ResponseForm/Rectangle1.png" alt="background wave" /> */}
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
      <h1 className="title">Room set-up</h1>
      <div className="roomsetup_form">
        <form onSubmit={handleSubmit}>
          <div className="dateTextContainer">
            <h2>1. Choose a time range for a meetup</h2>
            <p>
              For example, if you want a meetup some time in March 2025, set
              your start date as 01/03/2025 and your end date as 31/03/2025.
            </p>
          </div>
          <label>
            Start date:
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              name="startDate"
              value={startDate}
              onChange={handleStartDate}
            ></input>
          </label>
          <label>
            End date:
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              name="endDate"
              value={endDate}
              onChange={handleEndDate}
            ></input>
          </label>
          <div className="groupTextContainer">
            <h2>2. Choose a group size</h2>
            <p>This is the number of people you want to attend the meetup.</p>
          </div>
          <label>
            Group Size:
            <input
              type="number"
              name="friendCount"
              value={friendCount}
              onChange={handleFriendCount}
            ></input>
          </label>
          <button
            type="submit"
            // onClick={() => { navigate("../room");}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomSetup;
