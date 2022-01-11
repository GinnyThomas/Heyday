import React from 'react'
import './landing.scss'
import { useParams, useNavigate } from "react-router-dom";

const Landing = () => {
  
  let navigate = useNavigate();

  return (
    <div className='landing'>
      <div className='landing_title'>
          <h1>Welcome To Anonymeet</h1>
      </div>
        <div>
            <button type='submit' onClick={() => { navigate("setup");}}>
                Create New Event
            </button>
        </div>
          </div>
  );
};

export default Landing
