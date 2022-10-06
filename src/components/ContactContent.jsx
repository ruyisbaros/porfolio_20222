import React from "react";
import Masker from "./Masker";
import { TbHandFinger } from "react-icons/tb";

const ContactContent = ({ contactMask, ptext, head1, head2 }) => {
  return (
    <div id="header" className="background_layer">
      <Masker url={contactMask} />
      <div className="bg_content">
        <p>{ptext}</p>
        <h1>
          {head1}{" "}
          <a href="#contact">
            <TbHandFinger
              size={30}
              style={{
                transform: "rotate(180deg)",
                cursor: "pointer",
                marginLeft: "20px",
              }}
            />
          </a>
          <br />
          {head2}
        </h1>
      </div>
    </div>
  );
};

export default ContactContent;
