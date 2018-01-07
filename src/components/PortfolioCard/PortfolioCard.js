import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Application</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>URL:</strong> {props.url}
        </li>
      </ul>
    </div>
  </div>
);

export default PortfolioCard;
