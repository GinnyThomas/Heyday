import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useState } from 'react'

const RoomSetup = () => {

  // const state = {
  //   roomID: "",
  //   startDate: "",
  //   endDate: "",
  //   friendCount: 0,
  //   friendCurrent: -1,
  //   roomFormsRatings: [],
  //   };

  const [state, setState] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }
  
  let navigate = useNavigate();

  return (
    <div className="roomsetup">
      <div classname="roomsetup_form">
        <form onSubmit={handleSubmit}>
          <label>Start Date
            <input 
              type='date' 
              placeholder='dd/mm/yyyy'
              name="startDate"
              value={state.startDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>End Date
            <input 
              type='date' 
              placeholder='dd/mm/yyyy'
              name="endDate"
              value={state.endDate}
              onChange={handleChange}></input>
          </label>
          <label>Number of Attendees
            <input
              type='number'
              placeholder='4'
              name="friendCount"
              value={state.friendCount}
              onChange={handleChange}>  
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
