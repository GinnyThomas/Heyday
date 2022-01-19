import "./modal.scss";
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Modal(props) {
  const [startDate, setStartDate] = useState(props.state.startDate);
  const [endDate, setEndDate] = useState(props.state.endDate);
  const [friendCount, setFriendCount] = useState(props.state.friendCount);

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleFriendCount = (event) => {
    setFriendCount(event.target.value);
  };

  const intFriendCount = Number(friendCount);

  const ratings = new Array(intFriendCount).fill([]);

  const handleSubmit = (event) => {
    props.editRoom(props.state.roomID, {
      startDate: startDate,
      endDate: endDate,
      friendCount: friendCount,
      roomFormsRatings: ratings,
    });
    console.log(props.state);
    event.preventDefault();
    props.onClose();
  };
  if (!props.open) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <img
          className="closeBtn"
          src="/assets/CloseIcon.png"
          alt="close icon"
          onClick={props.onClose}
        />
        <h1 className="title">Edit Room set-up</h1>
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
                <p>
                  This is the number of people you want to attend the meetup.
                </p>
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
    </>
  );
}
