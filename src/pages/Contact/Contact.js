import React from "react";
import "./Contact.css";
import Wrapper from "../../components/Wrapper";

const Contact = () =>
  <div className="ContactWrapper">
    <h1 id="contact">Contact Me</h1>
      <Wrapper >
        <h3><i className="fa fa-address-card" aria-hidden="true"></i> Name </h3>
        <h3> <i className="fa fa-envelope-open" aria-hidden="true"></i>Email </h3>
        <h3> <i className="fa fa-inbox" aria-hidden="true"></i>Message </h3>
      </Wrapper >
  </div>;
export default Contact;
