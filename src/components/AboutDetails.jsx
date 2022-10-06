import React from "react";
import ahmet from "../assets/a2.jpg";
import { MdWork } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Link } from "react-router-dom";
import cv from "../assets/Ahmet Erdonmez-last.pdf";
const AboutDetails = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me...</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ahmet} alt="ahmet" />
          </div>
          <div className="cv_btn">
            <button className="btn btn_light">
              <a href={cv} download>
                Download cv
              </a>
            </button>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Connections</h5>
              <small>3000+ Professionals Worldwide</small>
            </article>
            <Link to="/project">
              <article className="about__card">
                <AiOutlineFundProjectionScreen className="about_icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </Link>
          </div>
          <p>
            I was appointed as a Class Tutor at DCI-Berlin in August 2021, where
            I started as a student , due to my advanced level in coding. I guide
            students to develop their MERN stack skills. We have been developing
            small and medium sized MERN Stack projects together. In the
            meantime, I am deepening my existing knowledge even more. <br />{" "}
            <br /> I can handle coding a modern a website front-to-end,
            end-to-front. In this sense, I can effectively use many of most
            modern Full Stack Web Development tools such as JavaScript, React,
            HTML5, CSS3, Java, Spring Boot, Hibernate, Java security tools etc.
            I prefer Mysql for database. But I have knowledge of MongoDB as
            well.
          </p>

          <Link to="/contact" className="btn ">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
