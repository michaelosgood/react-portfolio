import React from "react";
import "./Portfolio.css";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";
import Wrapper from "../../components/Wrapper";
import projects from "../../components/Projects/projects.json";

const Portfolio = () =>
  <div className="PortfolioWrapper">
    <h1 id="port"> <i className="fa fa-code fa-lg fa-fw" aria-hidden="true"></i>Portfolio</h1>
      <Wrapper>
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
        <PortfolioCard
          name={projects[2].name}
          image={projects[2].image}
          description={projects[2].description}
          url={projects[2].url}
        />
        <PortfolioCard
          name={projects[3].name}
          image={projects[3].image}
          description={projects[3].description}
          url={projects[3].url}
        />
        <PortfolioCard
          name={projects[4].name}
          image={projects[4].image}
          description={projects[4].description}
          url={projects[4].url}
        />
        <PortfolioCard
          name={projects[5].name}
          image={projects[5].image}
          description={projects[5].description}
          url={projects[5].url}
        />
    </Wrapper>
    <Footer />
  </div>;

export default Portfolio;
