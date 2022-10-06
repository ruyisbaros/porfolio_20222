import React from "react";
import { NavLink } from "react-router-dom";
import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const WorkCard = () => {
  return (
    <div className="work_container" id="work_cards">
      <h1 className="project_heading">Projects</h1>
      <div className="project_container">
        <div className="project_card">
          <img src={pro1} alt="project1" />
          <h2 className="project_title">Project Title 1</h2>
          <div className="project_details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam at dolores asperiores. Laudantium ducimus ipsa similique
              cupiditate sit explicabo officiis tempore omnis culpa quaerat
              delectus, neque temporibus est, distinctio iste!S
            </p>
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
        <div className="project_card">
          <img src={pro2} alt="project1" />
          <h2 className="project_title">Project Title 2</h2>
          <div className="project_details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam at dolores asperiores. Laudantium ducimus ipsa similique
              cupiditate sit explicabo officiis tempore omnis culpa quaerat
              delectus, neque temporibus est, distinctio iste!S
            </p>
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
        <div className="project_card">
          <img src={pro3} alt="project1" />
          <h2 className="project_title">Project Title 3</h2>
          <div className="project_details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam at dolores asperiores. Laudantium ducimus ipsa similique
              cupiditate sit explicabo officiis tempore omnis culpa quaerat
              delectus, neque temporibus est, distinctio iste!S
            </p>
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
      </div>
    </div>
  );
};

export default WorkCard;
