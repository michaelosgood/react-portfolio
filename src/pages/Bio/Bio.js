import React from "react";
import "./Bio.css";
import Footer from "../../components/Footer";

const Bio = () =>
<div id="bio">
  <div className="BioWrapper">
    <div className="BioHeader">
      <h1>About Me</h1>
    </div>
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
            HTML, CSS, JavaScript, Boostrap, React.js, jQuery, MySQL, Express.js, MongoDB, Heroku,
            Node.js, Media-Queries, Bootstrap, GitHub, Jira, Agile
          </p>
          <h3>Hobbies </h3>
          <p>
            Hiking, Photograpy, Botany, Kayaking, Snowboarding, Fishing, 
            Traveling, Web Development
          </p>
        </div>
    <Footer />
  </div>
</div>
export default Bio;
