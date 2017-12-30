import React from "react";
import "./Navpills.css";

const Navpills = props =>
  <div className="NavWrapper">
    <ul className="nav nav-pills">
      <li className="nav-item" onClick={() => props.handlePageChange("Home")}>
        <a>Home</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("About")}>
        <a>About</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("Portfolio")}>
        <a>Portfolio</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("Contact")}>
        <a>Contact</a>
      </li>
    </ul>
    <div className="contact">      
        <i className="fa fa-github" aria-hidden="true"></i>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
    </div>
  </div>

export default Navpills;
