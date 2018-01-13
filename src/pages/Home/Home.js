import React from "react";
import "./Home.css";
import Bio from "../Bio";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../../components/Footer";

const Home = () =>
  <div className="home-wrapper">
    <div className="intro">
    </div>
    <Bio />
    <Portfolio />
    <Contact />
    <Footer />
  </div>;
export default Home;
