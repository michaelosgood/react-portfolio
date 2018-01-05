import React from "react";
import "./About.css";
import Footer from "../../components/Footer";

const About = () =>
  <div className="AboutWrapper">
    <div className="picture">
    </div>
    <h1 id="bio">Biography</h1>
    <div className="paragraph">
      <p>
        My name is Michael Osgood and I am a full-stack web developer. I possess a wide array of skills
        in many technologies including: HTML, CSS, JavaScript, jQuery, React.js, MySQL, ReactJS, Express, MongoDB,
        GitHub, and Jira to name a few.
        </p>
        <p>
        I studied Ecology and Evolutionary Biology at the University of Colorado. During that time, I learned about a 
        myriad of topics to include evolution, genetics, ecology, chemistry, and physics. During college, 
        I started working for a software company in Colorado as a support analyst. After graduation, I moved 
        to California and resumed working on the client-facing side of software for a pharmaceutical software company. 
        After 3 years working on the client-facing side of software, I became a User Acceptance Tester. I work with 
        developers to test and trouble-shoot the software before it goes to production. 
        </p>
        <p>
        In my tenure, I have gained valuable 
        experience from assisting clients on the client-facing side to collaborating with the development team to resolve 
        bugs on the development side. Not only that, I understand how frustrating using poorly-designed software 
        can affect the end-user. This knowledge I accumulated working with software is going to help me become 
        a better developer. Furthermore, I am gaining crucial knowledge in the development and testing of 
        software through the full-stack coding boot camp. 
        </p>
    </div>
    <Footer />
  </div>
export default About;
