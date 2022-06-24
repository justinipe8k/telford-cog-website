import React from "react";
import Slider1 from "./Slider1.jsx";
import Slider1mobile from "./Slider1mobile.jsx";
import Slider2 from "./Slider2.jsx";
import Slider3 from "./Slider3.jsx";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";

function WelcomeSlider() {
  const isMobile = window.innerWidth <= 550;
  return (
    <AwesomeSlider
      className="slider-parent"
      play={true}
      cancelOnInteraction={false}
      interval={2000}
      mobileTouch={true}
    >
      <div className="slider-child">
        {!isMobile ? <Slider1 /> : <Slider1mobile/>}
      </div>
      <div className="slider-child">
        <Slider2 />
      </div>
      {/* <div className="slider-child">
       <Slider3/>
      </div> */}
    </AwesomeSlider>
  );
}

export default WelcomeSlider;
