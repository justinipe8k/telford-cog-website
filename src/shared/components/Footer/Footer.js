import React from "react";
import "./Footer.css";
import FooterLocation from "./Components/FooterLocation/FooterLocation";
import FooterMain from "./Components/FooterMain/FooterMain";

const Footer = function (props) {
  return (
    <footer className="Footer">
      <div className="wrapper wrapper--inner">
        <div className="Footer__content">
          <FooterLocation />
          <FooterMain />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
