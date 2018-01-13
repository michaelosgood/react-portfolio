import React from "react";
import "./Contact.css";
import Wrapper from "../../components/Wrapper";
import ContactMe from "../../components/ContactMe";

const Contact = () =>
  <div className="ContactWrapper">
    <h1 id="contact"><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>Contact Me</h1>
      <Wrapper >
        <ContactMe />
      </Wrapper >
  </div>;
export default Contact;
