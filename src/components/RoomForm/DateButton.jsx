import React from "react";
import "./dateButton.scss";
import { useState } from "react";
import day from "../../helpers/day.js";

const DateButton = (props) => {

  const sequence = [0, 1, 2, 3]
  const [value, setValue] = useState(0);

  const upSequence = () => {
    const seqIndex = sequence.indexOf(value)
    const newVal = (seqIndex === sequence.length - 1) ? sequence[0] : sequence[seqIndex + 1]
    setValue(newVal)
    return newVal
  }

  const myDay = day.toInt(props.date, props.index)
  const sinceMonday = () => day.sinceMonday(myDay)
  const workOrWeekend = () => (sinceMonday() > 4) ? "weekend" : "workday"

  const handleClick = () => {
    const newVal = upSequence()
    props.onClick(props.index, newVal)
  }

  const visibleContent = () => (
    <div className="DateBlock">
      <h4>{day.displayCal(myDay)}</h4>
      <div className={`DateButtonBox ${workOrWeekend()}`}>
        <button className={`RankingButton ButtonCol0${value}`} onClick={() => handleClick()}>
          <span className="RankingButtonText">{day.weekDay(myDay)}</span>
        </button>
      </div>
    </div>
  );

  const hiddenContent = () => (
    <div className="DateBlock">
      <h4 className="hiddenText">{day.displayCal(myDay)}</h4>
      <div className={`DateButtonBox`}>
        <button className={`RankingButton hiddenBox`}></button>
      </div>
    </div>
  );

  return props.visible ? visibleContent() : hiddenContent()
}

export default DateButton;