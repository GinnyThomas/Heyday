import React from "react";
import "./dateBox.scss";
import { useState } from "react";

const DateBox = (props) => {

  const [goldStatus, setGoldStatus] = useState("unchecked");
  const [silverStatus, setSilverStatus] = useState("unchecked");
  const [bronzeStatus, setBronzeStatus] = useState("unchecked");
  const [ironStatus, setIronStatus] = useState("checked");

  const checkedClass = (id, myVal) =>  id === myVal ? "checked" : "unchecked"

  const handleSelect = (mVal) => {
    setGoldStatus(checkedClass(3, mVal))
    setSilverStatus(checkedClass(2, mVal))
    setBronzeStatus(checkedClass(1, mVal))
    setIronStatus(checkedClass(0, mVal))
    props.onClick(props.index, mVal)
  }

  return (
    <div className="DateBox">
      <h4>{props.index}</h4>
      <p><input type="radio" id="gold" name={`pref${props.index}`} className={goldStatus}
        onClick={() => handleSelect(3)}></input></p>
      <p><input type="radio" id="silver" name={`pref${props.index}`} className={silverStatus}
        onClick={() => handleSelect(2)}></input></p>
      <p><input type="radio" id="bronze" name={`pref${props.index}`} className={bronzeStatus}
        onClick={() => handleSelect(1)}></input></p>
      <p><input type="radio" id="no" name={`pref${props.index}`} className={ironStatus}
        onClick={() => handleSelect(0)}></input></p>
    </div>
  );
}
export default DateBox;