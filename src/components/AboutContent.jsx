import React from "react";
import Masker from "./Masker";

const AboutContent = ({ aboutMask, ptext, head1, head2 }) => {
  return (
    <div className="background_layer">
      <Masker url={aboutMask} />
      <div className="bg_content">
        <p>{ptext}</p>
        <h1>
          {head1}
          <br />
          {head2}
        </h1>
      </div>
    </div>
  );
};

export default AboutContent;
