import React from "react";
import "./Contact.css";
import Wrapper from "../../components/Wrapper";
import ContactMe from "../../components/ContactMe";

const Contact = () =>
  <div className="ContactWrapper">
    <div className="ContactHeader">
      <h1 id="contact">
        <i className="fa fa-paper-plane-o fa-lg fa-fw" aria-hidden="true">
        </i>&nbsp; Contact Me
      </h1>
    </div>
    <Wrapper >
      <ContactMe />
    </Wrapper >
  </div>;
export default Contact;
