import React from "react";
import "./roomSetup.scss";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from "react";

const RoomSetup = (props) => {
  let navigate = useNavigate();

  // ---------------
  // STATE HANDLING
  // ---------------

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = yyyy + "/" + mm + "/" + dd;

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
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

    const intFriendCount = Number(friendCount);

    const ratings = new Array(intFriendCount).fill([]);

    props.createRoom(
      {
        startDate: startDate,
        endDate: endDate,
        friendCount: intFriendCount,
        roomFormsRatings: ratings,
      },
      navigate
    );
  };

  // ---------------
  // NAV HANDLING
  // ---------------

  const proceedToRoom = (stateParams) => {
    navigate(`../room/${props.getRoomId()}`, { state: stateParams });
  };

  return (
    <div className="roomsetup">
      <div className="wave1Container backWave" data-speed="2">
        <img src="assets/RoomSetup/wave1.png" alt="background wave" />
      </div>
      <div className="wave2Container backWave" data-speed="-3">
        <img src="assets/RoomSetup/wave2.png" alt="background wave" />
      </div>
      <div className="wave3Container backWave" data-speed="-1">
        <img src="assets/RoomSetup/wave3.png" alt="background wave" />
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
      <form className="roomsetup_form" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="dateContainer">
            <div className="textContainer">
              <h2>1. Choose a time range for a meetup</h2>
              <p>
                For example, if you want a meetup some time in March 2025, set
                your start date as 01/03/2025 and your end date as 31/03/2025.
              </p>
            </div>
            <div className="inputContainer">
              <label>
                Start date: <br />
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  name="startDate"
                  value={startDate}
                  onChange={handleStartDate}
                ></input>
              </label>
              <label className="endLabel">
                End date: <br />
                <input
                  className="endInput"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  name="endDate"
                  value={endDate}
                  onChange={handleEndDate}
                ></input>
              </label>
            </div>
          </div>
          <div className="groupContainer">
            <div className="textContainer">
              <h2>2. Choose a group size</h2>
              <p>This is the number of people you want to attend the meetup.</p>
            </div>
            <div className="inputContainer">
              <label>
                Group Size: <br />
                <input
                  type="number"
                  name="friendCount"
                  value={friendCount}
                  onChange={handleFriendCount}
                ></input>
              </label>
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RoomSetup;
