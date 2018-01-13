import React from "react";
import "./ContactForm.css";
import Wrapper from "../../components/Wrapper";


const ContactForm = () =>
  <div className="ContactFormWrapper">
    <h1 id="contact"><i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>Contact Me</h1>
      <Wrapper >
        <form>
          <label>
            <h3>
              <i className="fa fa-id-card fa-fw" aria-hidden="true"></i>
              Name:
              <br />
              <input type="text" name="name" />
            </h3>
          </label> 
            <br />
          <label>
            <h3>
              <i className="fa fa-envelope-open fa-fw" aria-hidden="true"></i>
              Email:
              <br />
              <input type="text" name="email" />
            </h3>
          </label>
            <br />
          <label>
            <h3>
              <i className="fa fa-inbox fa-fw" aria-hidden="true"></i>
              Message: 
              <br />
              <textarea type="text" name="message">  </textarea>
            </h3>
          </label>
            <br />
          <input type="submit" value="Submit" />
        </form>
      </Wrapper >
  </div>;
export default ContactForm;
