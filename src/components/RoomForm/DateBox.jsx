import React from "react";
import "./dateBox.scss";

export default class DateBox extends React.Component {
  render() {
    console.log("DateBox loaded");
    return (
      <div className="DateBox">
        <h4>Date</h4>
        <p><input type="radio" id="gold" name={`pref${this.props.boxID}`} value="no"></input></p>
        <p><input type="radio" id="silver" name={`pref${this.props.boxID}`} value="no"></input></p>
        <p><input type="radio" id="bronze" name={`pref${this.props.boxID}`} value="no"></input></p>
        <p><input type="radio" id="no" name={`pref${this.props.boxID}`} value="no"></input></p>
      </div>
    );
  }
}