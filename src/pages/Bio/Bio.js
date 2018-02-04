import React from "react";
import "./Bio.css";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

const Bio = () =>
<div id="bio">
  <div className="BioWrapper">
    <div className="BioHeader">
      <h1><i className="fa fa-globe fa-lg fa-fw" aria-hidden="true"></i>&nbsp; Biography</h1>
    </div>
      <Wrapper >
        <div className="paragraph">
          <div className="picture"></div>
          <h3>Education</h3>
          <p>
            The Coding Boot Camp | University of California, Irvine | 2017
          </p>
          <p> 
            B.A. Ecology and Evolutionary Biology | University of Colorado, Boulder | 2015
          </p>
        <h3>Skills </h3>
          <p>
            HTML, CSS, Boostrap, React.js, JavaScript, jQuery, MySQL, ExpressJS, MongoDB, Heroku,
            Node.js, Media-Queries, Bootstrap, GitHub, Jira, Agile
          </p>
          <h3>Hobbies </h3>
          <p>
            Hiking, cycling, photograpy, kayaking, snowboarding, fishing,
            learning, traveling, and web development.
          </p>
        </div>
      </Wrapper>
    <Footer />
  </div>
</div>
export default Bio;
