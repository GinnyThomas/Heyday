import React from "react";
import "./dateBox.scss";
import { useState } from "react";

const DateBox = (props) => {

  const [goldStatus, setGoldStatus] = useState("unchecked");
  const [silverStatus, setSilverStatus] = useState("unchecked");
  const [bronzeStatus, setBronzeStatus] = useState("unchecked");
  const [ironStatus, setIronStatus] = useState("checked");
  const setFunctions = [{call: setIronStatus, val: 0}, {call: setBronzeStatus, val: 1}, {call: setSilverStatus, val: 2}, {call: setGoldStatus, val: 3}]

  const checkedClass = (id, myVal) =>  id === myVal ? "checked" : "unchecked"

  const handleSelect = (mVal) => {
    setFunctions.forEach((func) => func.call(checkedClass(func.val, mVal)))
    props.onClick(props.index, mVal)
  }

  const formatDate = (date) => date < 10 ? `0${date}` : `${date}`

  return (
    <div className="DateBox">
      <h4>{props.index}</h4>
      <input type="radio" id="gold" name={`pref${props.index}`} className={goldStatus}
        onClick={() => handleSelect(3)}></input>
      <input type="radio" id="silver" name={`pref${props.index}`} className={silverStatus}
        onClick={() => handleSelect(2)}></input>
      <input type="radio" id="bronze" name={`pref${props.index}`} className={bronzeStatus}
        onClick={() => handleSelect(1)}></input>
      <input type="radio" id="iron" name={`pref${props.index}`} className={ironStatus}
        onClick={() => handleSelect(0)}></input>
    </div>
  );
}

export default DateBox;