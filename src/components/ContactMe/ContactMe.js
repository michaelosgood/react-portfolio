import React from "react";
import "./ContactMe.css";

const ContactMe = () =>
  <div className="ContactMeWrapper">
    <h3>
      <a href="mailto:michael.f.osgood@gmail.com">
        <i className="fa fa-envelope" aria-hidden="true">
        </i>&nbsp;Email Me
      </a>
    </h3> 
    <h3>
      <a href="https://www.linkedin.com/in/michaelfosgood" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin-square fa-fw" aria-hidden="true">
        </i>&nbsp;LinkedIn
      </a>
    </h3>
    <h3>
      <a href="https://www.instagram.com/kno_good" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram fa-fw" aria-hidden="true"> 
        </i>Instagram
      </a>
    </h3>
    <h3>
      <a href="https://twitter.com/kno_good" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter fa-fw" aria-hidden="true"> 
        </i>Twitter
      </a>
    </h3>
    <h3>
      <a href="https://github.com/michaelosgood" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github fa-fw" aria-hidden="true"> 
        </i>GitHub
      </a>
    </h3>
  </div>;

export default ContactMe;

