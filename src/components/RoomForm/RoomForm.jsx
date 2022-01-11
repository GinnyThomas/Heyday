import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";
import { useParams, useNavigate } from "react-router-dom";

// export default class RoomForm extends React.Component {
const RoomForm = () => {
  let navigate = useNavigate();
  let indicator = 0

  console.log("RoomForm loaded");
  return (
    <div className="RoomForm">
      <h1>Calendar 1</h1>
      <h3>What days work for you?</h3>
      <p>{indicator}</p>
      <div className="DateButtons">
          <DateBox boxID={1} />
          <DateBox boxID={2} />
          <DateBox boxID={3} />
          <DateBox boxID={4} />
      </div>
      <button>Submit</button>
      <button onClick={() => { navigate("../room");}}>Cancel</button>
    </div>
  );
};

export default RoomForm

