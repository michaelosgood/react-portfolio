import React from "react";
import "./Navpills.css";

const Navpills = props =>
  <div className="NavWrapper">
    <ul className="nav nav-pills">
      <li className="nav-item" id="main">
        <a href=".">Michael F. Osgood</a>
      </li>
      <li className="nav-item" id="left">
        <a href="#bio"><i className="fa fa-book fa-lg fa-fw" aria-hidden="true"></i>Biography</a>
      </li>
      <li className="nav-item" id="center">
        <a href="#port"><i className="fa fa-code fa-lg fa-fw" aria-hidden="true"></i>Portfolio</a>
      </li>
      <li className="nav-item" id="right">
        <a href="#contact"><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>Contact</a>
      </li>
    </ul>
  </div>

export default Navpills;
