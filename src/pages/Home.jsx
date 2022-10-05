import React from "react";
import { Link } from "react-router-dom";
import HomeBackground from "../components/HomeBackground";
import Footer from "../components/Footer";
import Header from "../components/Header";
import masker from "../assets/bgp-2.jpg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeBackground masker={masker} />
      <Footer />
    </div>
  );
};

export default Home;
