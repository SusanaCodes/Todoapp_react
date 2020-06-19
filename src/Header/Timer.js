import React from "react";
import "./Header.js";
import "./Header.css";
import Header from "./Header.js";

class Timer extends Header {
  state = {
    date: new Date(),
  };
  callMe() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return <h2>It is {this.state.date.toLocalTimeString()}</h2>;
  }
}
export default Timer;
