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
  const blankButton = () => <img src="/assets/RoomForm/DateButton/greySquare.png" alt="blank" className="keyButton"/>

  const upSequence = () => {
    const seqIndex = sequence.indexOf(value)
    const newVal = (seqIndex === sequence.length - 1) ? sequence[0] : sequence[seqIndex + 1]
    setValue(newVal)
    return newVal
  }

  const getButton = () => {
    if (value === 1) return bronzeButton()
    if (value === 2) return silverButton()
    if (value === 3) return goldButton()
    return whiteButton()
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
      <h4><span className={workOrWeekend()}>{day.weekDay(myDay).slice(0,3)}.</span> <br></br>{day.displayCal(myDay)}</h4>
      <div className={`DateButtonBox ${workOrWeekend()}`}>
        <button className={`RankingButton clickable`} onClick={() => handleClick()}>
          <span className="RankingButtonIcon">{getButton()}</span>
        </button>
      </div>
    </div>
  );

  const hiddenContent = () => (
    <div className="DateBlock">
      <h4 className="hiddenText">{day.displayCal(myDay)}</h4>
      <div className={`DateButtonBox`}>
        <button className={`RankingButton`}>
          <span className="RankingButtonIcon">{blankButton()}</span>
        </button>
      </div>
    </div>
  );

  return props.visible ? visibleContent() : hiddenContent()
}

export default DateButton;