import React from "react";
import "./Home.css";
import Bio from "../Bio";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../../components/Footer";

const Home = () =>
  <div className="home-wrapper">
    <div className="intro">
      <div className="mfo">
      <h1 className="text">Hello, I'm Michael.</h1>
      <h2 className="text">I am a Full Stack Web Developer who is fervent about science &#38; technology</h2>
      </div>
    </div><br />
    <Bio /><br />
    <Portfolio /><br />
    <Contact />
    <Footer />
  </div>;
export default Home;
