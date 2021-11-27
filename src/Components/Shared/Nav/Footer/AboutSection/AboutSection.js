import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import "./AboutSection.css";
const AboutSection = () => {
  return (
    <div className="footerAbout">
      <h2 style={{ color: "yellow" }}>About Us</h2>
      <p>
        Owning your own luxury timepiece is an experience to be cherished and
        enjoyed. The Luxury Watch Company specialises in Rolex, Omega,
        Breitling, Cartier, Audemars Piguet watches along with many other
        watches for sale.
      </p>
      <h1
        style={{
          color: "yellow",
          display: "flex",
          justifyContent: "start",
          cursor: "pointer",
        }}
      >
        <AiFillInstagram className="footerIcons" />
        <MdFacebook className="footerIcons" />
        <AiFillTwitterCircle className="footerIcons" />
        <AiFillLinkedin className="footerIcons" />
      </h1>
      <p>Conosin!!! © 2021 All rights reserved</p>
    </div>
  );
};

export default AboutSection;
