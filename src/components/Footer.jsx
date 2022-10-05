import React from "react";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
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
        </div>
        <div className="right">
          <p>
            This is me, Ahmet Erdonmez from Germany. I am a Full Stack Web
            Developer. I really enjoy codding, creating new projects and handle
            new challanges.
          </p>
          <div className="social">
            <BsGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
