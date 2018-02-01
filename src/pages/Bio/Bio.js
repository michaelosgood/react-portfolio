import React from "react";
import "./Bio.css";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

const Bio = () =>
  <div className="BioWrapper">
    <div className="BioHeader">
      <h1 id="bio"><i className="fa fa-globe fa-lg fa-fw" aria-hidden="true"></i>&nbsp; Biography</h1>
    </div>
      <Wrapper >
        <div className="picture">
        </div>
        <div className="paragraph">
          <h3>Education</h3>
          <p>
            Full Stack Web Developer Course | University of California, Irvine | 2017
          </p>
          <p> 
            B.A. Ecology and Evolutionary Biology | University of Colorado, Boulder | 2015
          </p>
        <h3>Skills </h3>
          <p>
            HTML, CSS, Boostrap, ReactJS, JavaScript, jQuery, MySQL, ExpressJS, MongoDB, Heroku,
            NodeJS, Media-Queries, Bootstrap, GitHub, Jira, Agile
          </p>
          <h3>Work Experience</h3>
          <p>
            In my tenure, I have gained valuable experience from assisting clients on the client-facing side to 
            collaborating with product managers and developers. Not only that, I understand how developing user-friendly software 
            impacts the users' experience. 
            The knowledge I have accumulated working with software has been instrumental in my journey to 
            becoming a full-stack web developer. Furthermore, I have gained crucial knowledge in 
            the development and testing of software through the full-stack coding program. 
          </p>
          <h3>Hobbies </h3>
          <p>
            Hiking, cycling, photograpy, 
            traveling, and web development. Thank you for visiting my portfolio.
          </p>
        </div>
      </Wrapper>
    <Footer />
  </div>
export default Bio;
