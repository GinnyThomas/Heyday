import React from "react";
import "./dateBox.scss";

const DateBox = (props) => {

  const handleSelect = (val) => {
    console.log("Attempting select with "+props.index)
    props.onClick(props.index, val)
  }

  return (
    <div className="DateBox">
      <h4>{props.index}</h4>
      <p><input type="radio" id="gold" name={`pref${props.index}`} value="no" 
        onClick={() => handleSelect(3)}></input></p>
      <p><input type="radio" id="silver" name={`pref${props.index}`} value="no"
        onClick={() => handleSelect(2)}></input></p>
      <p><input type="radio" id="bronze" name={`pref${props.index}`} value="no"
        onClick={() => handleSelect(1)}></input></p>
      <p><input type="radio" id="no" name={`pref${props.index}`} value="no"
        onClick={() => handleSelect(0)}></input></p>
    </div>
  );
}
export default DateBox;

// onChange={this.updateDescription}