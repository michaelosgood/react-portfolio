import React from "react";
import "./Portfolio.css";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";
import projects from "../../components/Projects/projects.json";

const Portfolio = () =>
<div id="port">
  <div className="PortfolioWrapper">
    <div className="PortfolioHeader">

      <h1> <i className="fa fa-code fa-lg fa-fw" aria-hidden="true"></i>&nbsp; Portfolio</h1>
    </div>
        <div className="PortfolioBoard">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            description={projects[0].description}
            url={projects[0].url}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            description={projects[1].description}
            url={projects[1].url}
          />
          {/* <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            description={projects[2].description}
            url={projects[2].url}
          /> */}
          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            description={projects[3].description}
            url={projects[3].url}
          />
        </div>
    <Footer />
  </div>
</div>;

export default Portfolio;
