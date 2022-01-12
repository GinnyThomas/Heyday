import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from 'react'

const RoomSetup = () => {

  // ---------------
  // STATE HANDLING
  // ---------------

  const [startDate, setStartDate] = useState("2022-01-12");
  const [endDate, setEndDate] = useState("2022-01-19");
  const [friendCount, setFriendCount] = useState(2);

  const handleStartDate = (event) => {
    setStartDate(event.target.value)
  }
  const handleEndDate = (event) => {
    setEndDate(event.target.value)
  }
  const handleFriendCount = (event) => {
    setFriendCount(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let state = {
      roomID: 1,
      startDate: startDate,
      endDate: endDate,
      friendCount: friendCount,
      friendCurrent: -1,
      roomFormsRatings: [],
      }

    console.log(state);
    proceedToRoom(state)
  }

  // ---------------
  // NAV HANDLING
  // ---------------
  
  let navigate = useNavigate();

  const proceedToRoom = (stateParams) => {
    navigate("../room", { state: stateParams });
  }

  return (
    <div className="roomsetup">
      <div className="roomsetup_form">
        <form onSubmit={handleSubmit}>
          <label>Start Date
            <input 
              type='date' 
              placeholder='dd/mm/yyyy'
              name="startDate"
              value={startDate}
              onChange={handleStartDate}
            ></input>
          </label>
          <label>End Date
            <input 
              type='date' 
              placeholder='dd/mm/yyyy'
              name="endDate"
              value={endDate}
              onChange={handleEndDate}>
            </input>
          </label>
          <label>Number of Attendees
            <input
              type='number'
              name="friendCount"
              value={friendCount}
              onChange={handleFriendCount}>  
            </input>
          </label>
          <button type='submit' 
          // onClick={() => { navigate("../room");}}
          >
            Submit Preferences
          </button>
        </form>   
      </div>
    </div>
  )
}

export default RoomSetup
