import React from "react";
import "./Navpills.css";

const Navpills = props =>
  <div className="NavWrapper">
    <ul className="nav nav-pills">
      <li className="nav-item" onClick={() => props.handlePageChange("Home")}>
        <a><i className="fa fa-home fa-lg" aria-hidden="true"></i>Home</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("About")}>
      <a><i class="fa fa-flask fa-lg" aria-hidden="true"></i>Skills</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("Portfolio")}>
        <a><i class="fa fa-briefcase fa-lg" aria-hidden="true"></i>Portfolio</a>
      </li>
      <li className="nav-item" onClick={() => props.handlePageChange("Contact")}>
        <a><i class="fa fa-address-card-o fa-lg" aria-hidden="true"></i>Contact</a>
      </li>
    </ul>
  </div>

export default Navpills;
