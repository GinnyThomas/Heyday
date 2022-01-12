import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from 'react'

const RoomSetup = () => {

  // const today = Date.now()
  // const day = (1000 * 60 * 60 * 24)

  // const myStartDate = new Date(today)
  // const myEndDate = new Date(today + (day * 7))

  // let state = {
  //   roomID: 1,
  //   startDate: null,
  //   endDate: null,
  //   friendCount: 0,
  //   friendCurrent: -1,
  //   roomFormsRatings: [],
  //   };

  // let [state, setState] = useState({
  //   roomID: 1,
  //   startDate: myStartDate,
  //   endDate: myEndDate,
  //   friendCount: 0,
  //   friendCurrent: -1,
  //   roomFormsRatings: []
  // });

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
    
  // const handleChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

    // setState({
    //   roomID: 1,
    //   startDate: "2000-01-12",
    //   endDate: "2000-01-19",
    //   friendCount: value,
    //   friendCurrent: -1,
    //   roomFormsRatings: []
    // });
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    let state = {
      roomID: 1,
      startDate: startDate,
      endDate: endDate,
      friendCount: friendCount,
      friendCurrent: -1,
      roomFormsRatings: [],
      };

    console.log(state);
  }
  
  let navigate = useNavigate();

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
