import React from "react";
import "./Navpills.css";

const Navpills = props =>
  <div className="NavWrapper">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="."><i className="fa fa-home fa-lg" aria-hidden="true"></i>Home</a>
      </li>
      <li className="nav-item">
      <a href="#bio"><i className="fa fa-flask fa-lg" aria-hidden="true"></i>Biography</a>
      </li>
      <li className="nav-item">
        <a href="#port"><i className="fa fa-code fa-lg" aria-hidden="true"></i>Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="#contact"><i className="fa fa-phone fa-lg" aria-hidden="true"></i>Contact</a>
      </li>
    </ul>
  </div>

export default Navpills;
