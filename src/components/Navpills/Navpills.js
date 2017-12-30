import React from "react";

const Navpills = props =>
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Home")}>
      <a>Home</a>
    </li>
    <li onClick={() => props.handlePageChange("About")}>
      <a>About</a>
    </li>
    <li onClick={() => props.handlePageChange("Portfolio")}>
      <a>Portfolio</a>
    </li>
    <li onClick={() => props.handlePageChange("Contact")}>
      <a>Contact</a>
    </li>
  </ul>;

export default Navpills;
