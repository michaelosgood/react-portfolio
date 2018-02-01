import React from "react";
import "./About.css";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

const About = () =>
  <div className="AboutWrapper">
    <h1 id="bio"><i className="fa fa-globe fa-lg fa-fw" aria-hidden="true"></i>&nbsp; Font Options</h1>
      <Wrapper >
      <ul>
        <li><h1 className ="one">Michael Osgood</h1> </li>
        <li> <h1 className ="two">Michael Osgood</h1>  </li>
        <li><h1 className ="three">Michael Osgood</h1>  </li>
        <li><h1 className ="four">Michael Osgood</h1>   </li>
        <li><h1 className ="five">Michael Osgood</h1>  </li>
        <li><h1 className ="six">Michael Osgood</h1>  </li>
        <li><h1 className ="seven">Michael Osgood</h1>  </li>
        <li><h1 className ="eight">Michael Osgood</h1>  </li>
        <li> <h1 className ="nine">Michael Osgood</h1>  </li>
    </ul>
      </Wrapper>
    <Footer />
  </div>
export default About;
