import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> Finkenweg 5, 72186 Empfingen </p>
              <p>Baden-Wurttemberg, Germany</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +49 176 73881 902
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ahmet.erdonmez77@gmail.com
            </h4>
          </div>
          <div className="github">
            <h4>
              {" "}
              <BsGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              https://github.com/ruyisbaros
            </h4>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
