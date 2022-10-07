import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { projects } from "../datas";
import ProjectCard from "./ProjectCard";

const WorkCard = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = projects.length;

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <div className="work_container" id="work_cards">
      <h1 className="project_heading">Projects</h1>
      <div className="project_container">
        {/*  <FaArrowAltCircleLeft
          size={20}
          className="arrow left_arrow"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          size={20}
          className="arrow right_arrow"
          onClick={nextSlide}
        /> */}
        {projects.map((proje) => (
          <ProjectCard proje={proje} />
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
