import React from 'react'

const RoomSetup = () => {
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
          </form>   
      </div>
    </div>
  )
}

export default RoomSetup