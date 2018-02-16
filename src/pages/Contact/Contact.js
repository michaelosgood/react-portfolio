import React from "react";
import "./Contact.css";
import ContactMe from "../../components/ContactMe";

const Contact = () =>
<div  id="contact">
  <div className="ContactWrapper">
    <div className="ContactHeader">
      <h1>
        <i className="fa fa-paper-plane-o fa-lg fa-fw" aria-hidden="true">
        </i>&nbsp; Contact Me
      </h1>
    </div>
      <ContactMe />
  </div>
</div>;
export default Contact;