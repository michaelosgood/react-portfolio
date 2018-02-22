import React from "react";
import "./Navpills.css";

const Navpills = props =>
  <div className="NavWrapper">
    <ul className="nav nav-pills" id="navpills">
      <li className="nav-item" id="main">
        <a href=".">
          Michael F. Osgood
        </a>
      </li>
      <li className="nav-item" id="left">
        <a className="page-scroll" href="#bio">
          About
        </a>
      </li>
      <li className="nav-item" id="center">
        <a href="#port">
          Portfolio
        </a>
      </li>
      <li className="nav-item" id="right">
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </div>

export default Navpills;
