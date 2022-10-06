import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutMask from "../assets/about.jpg";
const About = () => {
  return (
    <div>
      <Header />
      <AboutContent
        aboutMask={aboutMask}
        ptext="Ahmet Erdonmez"
        head1="I am a Full Stack Web Developer"
      />
      <Footer />
    </div>
  );
};

export default About;
