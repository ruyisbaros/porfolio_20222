import React from "react";
import { Link } from "react-router-dom";

const BackgroundImg = ({ masker }) => {
  return (
    <div className="background_layer">
      <div className="masker">
        <img src={masker} alt="masker" className="masker_img" />
      </div>
      <div className="bg_content">
        <p>HI, I'M A FULL-STACK DEVELOPER</p>
        <h1>
          JavaScript, React <br /> Java Developer.
        </h1>
        <div>
          <Link to="/project" className="btn">
            projects
          </Link>
          <Link to="/contact" className="btn btn_light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;
