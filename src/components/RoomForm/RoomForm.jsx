import React from "react";
import "./roomForm.scss";
import DateBox from "./DateBox";

export default class RoomForm extends React.Component {
  render() {
    console.log("RoomForm loaded");
    return (
      <div className="RoomForm">
        <h1>Calendar 1</h1>
        <h3>What days work for you?</h3>
        <div className="DateButtons">
          <DateBox />
          <DateBox />
          <DateBox />
          <DateBox />
        </div>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
    );
  }
}

