import React from "react";
import "./navbarWithStyling.module.css";

function NavbarWithStyling(props) {
  console.log(props)
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>
          <a href="#">{props.menu[0]}</a>
        </li>
        <li><a href="#">About</a></li>
        <li>
          <a href="#">{props.menu[2]}</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarWithStyling;