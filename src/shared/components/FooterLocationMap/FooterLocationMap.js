import React from "react";
import "./FooterLocationMap.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const FooterLocationMap = function (props) {
  return (
    /*<div className="FooterLocationMap">
      <div className="FooterLocationMap__static-map"></div>
      <div className="FooterLocationMap__overlay">
        <div className="FooterLocationMap__marker">
          <div className="FooterLocationMap__marker__circle"></div>
          <div className="FooterLocationMap__marker__circle"></div>
        </div>
      </div>
  </div>*/
  <div className="google-map-code">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.6734771831666!2d-2.519048484185737!3d52.70198837984909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf437dbe101dede3e!2sMahanaim%20Pentecostal%20Church%20of%20God%20Telford%20(Malayalam%20and%20English%20Service)!5e0!3m2!1sen!2suk!4v1652964867706!5m2!1sen!2suk" width="600" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
  );
};

export default FooterLocationMap;
