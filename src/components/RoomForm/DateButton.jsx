import React from "react";
import "./dateButton.scss";
import { useState } from "react";
import day from "../../helpers/day.js";

const DateButton = (props) => {

  const sequence = [0,2,3,1]


  return (
    <div className="DateBlock">
      <h4>{day.display(props.date)}</h4>
      <div className="DateButtonBox">
        <button className="RankingButton"></button>
      </div>
    </div>
  );
}

export default DateButton;