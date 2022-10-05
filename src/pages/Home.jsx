import React from "react";
import { Link } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import homeMask from "../assets/bgp-2.jpg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeContent
        homeMask={homeMask}
        ptext="HI, I'M A FULL-STACK DEVELOPER"
        head1="JavaScript, React"
        head2="Java Developer."
      />
      <Footer />
    </div>
  );
};

export default Home;
