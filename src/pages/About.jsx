import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutDetails from "../components/AboutDetails";
const About = () => {
  return (
    <div>
      <Header />
      {/* <AboutContent
        aboutMask={aboutMask}
        ptext="Ahmet Erdonmez"
        head1="I am a Full Stack Web Developer"
      /> */}
      <AboutDetails />
      <Footer />
    </div>
  );
};

export default About;
