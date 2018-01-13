import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li className="li">
          <h3>{props.name}</h3> 
        </li>
        <li className="li">
          <h4>{props.description}</h4>
        </li>
        <button
          className="btn btn-default">
          <a href={props.url} target="_blank" rel="noopener noreferrer">See Application</a>
        </button>
        </ul>
    </div>
  </div>
);

export default PortfolioCard;
