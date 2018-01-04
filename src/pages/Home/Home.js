import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const Home = () =>
  <div className="home-wrapper">
    <div className="intro">
      <h1> Michael F. Osgood </h1>
      <h2> Full-Stack Web Developer</h2>
    </div>
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>;
export default Home;
