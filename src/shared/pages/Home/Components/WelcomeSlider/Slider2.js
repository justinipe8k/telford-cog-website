import React from "react";
import "./WelcomeSlider.css";
import Button from "../../../../components/Button/Button";
import logo from  '../../../../images/logos/logo_full_dark_750x200.png';
import { Link } from 'react-router-dom';

const Slider2 = function() {
 return (
    
      <div className="Slider2_ParentDiv">

<div className="HomeWelcome">
      <div className='HomeWelcomeLogo'>
      <img alt='logo' className='logo_image' src={logo} />
      </div>
      <div className="HomeWelcome__title">
       <span className="HomeWelcome__title__name">Mahanaim Church of God</span>
      </div>
      <div className="HomeWelcome__title_place">
       <span className="HomeWelcome__title__name">Telford - UK</span>
      </div>
      <div className="HomeWelcome__text">Let's worship together</div>
      <div className="HomeWelcome__buttons">
<Link to='/contact'>
        <Button text="Contact Us" hoverType="outline" />
        </Link>
      </div>
    </div>

      </div>
  );
};

export default Slider2;
