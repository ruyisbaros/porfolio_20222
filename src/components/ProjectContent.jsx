import React from "react";
import { TbHandFinger } from "react-icons/tb";
import Masker from "./Masker";

const ProjectContent = ({ contactMask, ptext, head1, head2 }) => {
  return (
    <div className="background_layer">
      <Masker url={contactMask} />
      <div className="bg_content">
        <p>{ptext}</p>
        <h1>
          {head1}
          <br />
          {head2}{" "}
          <a href="#work_cards">
            <TbHandFinger
              size={30}
              style={{
                transform: "rotate(180deg)",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            />
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ProjectContent;
