import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ proje }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const length = proje.imageSource.length;
  const prevSlide = () => {
    if (currentImg === 0) {
      setCurrentImg(length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };
  const nextSlide = () => {
    if (currentImg === length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <div className="project_card">
      <FaChevronLeft
        size={25}
        className="arrow left_arrow"
        onClick={prevSlide}
      />
      <FaChevronRight
        size={25}
        className="arrow right_arrow"
        onClick={nextSlide}
      />
      {proje.imageSource.map((im, index) => (
        <div className={index === currentImg ? "slider active" : "slider"}>
          {index === currentImg && <img src={im} alt="" />}
        </div>
      ))}
      <h2 className="project_title">{proje.title}</h2>
      <div className="project_details">
        <p>{proje.about}</p>
        <div className="project_buttons">
          <NavLink to="www.google.com" className="btn">
            view
          </NavLink>
          <NavLink to="www.google.com" className="btn">
            source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
