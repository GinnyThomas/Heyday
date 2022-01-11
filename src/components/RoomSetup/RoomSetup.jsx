import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const RoomSetup = () => {

  let navigate = useNavigate();

  return (
    <div className="roomsetup">
      <div classname="roomsetup_form">
        <form>
          <label>Start Date
            <input type='date' placeholder='dd/mm/yyyy'></input>
          </label>
          <label>End Date
            <input type='date' placeholder='dd/mm/yyyy'></input>
          </label>
          <label>Number of Attendees
            <input type='number' placeholder='4'></input>
          </label>
          <button type='submit' onClick={() => { navigate("../room");}}>
            Submit Preferences
          </button>
        </form>   
      </div>
    </div>
  )
}

export default RoomSetup