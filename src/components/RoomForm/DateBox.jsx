import React from "react";
import "./dateBox.scss";

const DateBox = (props) => {

  const handleSelect = () => {
    console.log("Attempting select with "+props.index)
    props.onClick(props.index, 1)
  }

  handleSelect()

  return (
    <div className="DateBox">
      <h4>{props.date}</h4>
      <p><input type="radio" id="gold" name={`pref${props.index}`} value="no"></input></p>
      <p><input type="radio" id="silver" name={`pref${props.index}`} value="no"></input></p>
      <p><input type="radio" id="bronze" name={`pref${props.index}`} value="no"></input></p>
      <p><input type="radio" id="no" name={`pref${props.index}`} value="no"></input></p>
    </div>
  );
}
export default DateBox;