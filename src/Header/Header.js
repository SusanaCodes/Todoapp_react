import React from "react";
import "./Header.css";
// import "./Timer.js";

function Header() {
  return (
    <header>
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h1 className="card-title">My todo list</h1>
          <p className="card-text">
            How to Accomplish Any Goal with a daily Action Plan
          </p>
          <p className="card-text">need putting current date and time</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
