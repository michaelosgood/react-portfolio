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
          <i className="fa fa-book fa-lg fa-fw" aria-hidden="true"></i>Bio
        </a>
      </li>
      <li className="nav-item" id="center">
        <a href="#port">
          <i className="fa fa-code fa-lg fa-fw" aria-hidden="true"></i>Portfolio
        </a>
      </li>
      <li className="nav-item" id="right">
        <a href="#contact">
          <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>Contact
        </a>
      </li>
    </ul>
  </div>

export default Navpills;
