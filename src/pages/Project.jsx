import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactMask from "../assets/bgp-1.jpg";
import ProjectContent from "../components/ProjectContent";

const Project = () => {
  return (
    <div>
      <Header />
      <ProjectContent
        contactMask={contactMask}
        ptext="Projects."
        head1="Some of my recent"
        head2="Full Stack projects"
      />
      <Footer />
    </div>
  );
};

export default Project;
