import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";
import About from "../About";
import Portfolio from "../Portfolio";

const Home = () =>
  <div className="home-wrapper">
   <h1> Michael F. Osgood </h1>
   <h2> Full-Stack Web Developer | User Acceptance Tester | Evolutionary Biologist </h2>
   <About />
   <Portfolio />
   <Footer />
  </div>;
export default Home;
