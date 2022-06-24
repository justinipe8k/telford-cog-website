import React from "react";
import "./Footer.css";
import FooterMain from "./Components/FooterMain/FooterMain";
import FooterLocationInfo from "./Components/FooterLocationInfo/FooterLocationInfo";
import FooterLocationMap from "./Components/FooterLocationMap/FooterLocationMap";

const Footer = function (props) {
  return (
    <div className="Footer">
      <div className="wrapper wrapper--inner">
        <div className="Footer__content">
          {/* <FooterLocation /> */}
          <FooterLocationInfo/>
          <FooterLocationMap/>
          <FooterMain />
        </div>
      </div>
      <a href='https://www.facebook.com/Jubbafied'>
      <div className='credits'>Designed and developed by Jubbafied Digitization Solutions</div>
      </a>
      <br/>
    </div>
  );
};

export default Footer;
