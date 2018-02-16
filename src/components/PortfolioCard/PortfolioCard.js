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
          <p>{props.description}</p>
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
