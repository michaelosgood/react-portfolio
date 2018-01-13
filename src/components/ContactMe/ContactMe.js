import React from "react";
import "./ContactMe.css";

const ContactMe = () =>
  <div className="ContactMeWrapper">
    <h1>Contact Me</h1> 
      <a href="mailto:michael.f.osgood@gmail.com">
        michael.f.osgood@gmail.com
      </a>
    <h1>
      <a href="https://github.com/michaelosgood" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" aria-hidden="true"></i> 
      </a>
      <a href="https://www.linkedin.com/in/michaelfosgood" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://stackoverflow.com/users/8146499/michaelosgood" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-stack-overflow" aria-hidden="true"></i>
      </a>
    </h1>
  </div>;

export default ContactMe;