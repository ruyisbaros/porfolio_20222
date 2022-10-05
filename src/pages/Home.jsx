import React from "react";
import { Link } from "react-router-dom";
import BackgroundImg from "../components/BackgroundImg";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BackgroundImg />
      <Footer />
    </div>
  );
};

export default Home;
