import React from "react";
import { Link } from "react-router-dom";
import Masker from "./Masker";

const HomeContent = ({ homeMask, ptext, head1, head2 }) => {
  return (
    <div className="background_layer">
      <Masker url={homeMask} />
      <div className="bg_content">
        <p>{ptext}</p>
        <h1>
          {head1}
          <br />
          {head2}
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

export default HomeContent;
