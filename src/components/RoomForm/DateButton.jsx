import React from "react";
import "./dateButton.scss";
import { useState } from "react";
import day from "../../helpers/day.js";

const DateButton = (props) => {

  const sequence = [0, 1, 2, 3]
  const [value, setValue] = useState(0);
  const goldButton = () => <img src="/assets/RoomForm/DateButton/goldSquare.png" alt="gold button" className="keyButton"/>
  const silverButton = () => <img src="/assets/RoomForm/DateButton/silverSquare.png" alt="silver button" className="keyButton"/>
  const bronzeButton = () => <img src="/assets/RoomForm/DateButton/bronzeSquare.png" alt="bronze button" className="keyButton"/>
  const whiteButton = () => <img src="/assets/RoomForm/DateButton/whiteSquare.png" alt="white button" className="keyButton"/>
  const blankButton = () => <img src="/assets/RoomForm/DateButton/blankSquare.png" alt="blank" className="keyButton"/>

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
          {/* <span className="RankingButtonText">{day.weekDay(myDay).slice(0, 1)}</span> */}
          <span className="RankingButtonText">{whiteButton()}</span>
        </button>
      </div>
    </div>
  );

  const hiddenContent = () => (
    <div className="DateBlock">
      <h4 className="hiddenText">{day.displayCal(myDay)}</h4>
      <div className={`DateButtonBox`}>
        {/* <button className={`RankingButton hiddenBox`}></button> */}
        <button className={`RankingButton ButtonCol0${value}`}>
          {/* <span className="RankingButtonText">{day.weekDay(myDay).slice(0, 1)}</span> */}
          <span className="RankingButtonText">{blankButton()}</span>
        </button>
      </div>
    </div>
  );

  return props.visible ? visibleContent() : hiddenContent()
}

export default DateButton;