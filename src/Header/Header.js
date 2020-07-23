import React from "react";
import "./Header.css";

// function Header() {
//   return (
//     <header>
//       <h1 id="mainTitle">My Todo List Application</h1>
//       <h4>Keep all your things organised</h4>
//     </header>
//   );
// }

function Header() {
  return (
    <header>
      <div class="card text-center">
        <div class="card-header"></div>
        <div class="card-body">
          <h1 class="card-title">My todo list</h1>
          <p class="card-text">
            How to Accomplish Any Goal with a daily Action Plan
          </p>
          <p class="card-text">need putting current date and time</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
