import React from "react";
import "./HomeWelcome.css";
import Button from "../Button/Button";

const HomeWelcome = function(props) {
  return (
    <div className="HomeWelcome">
      <div className="HomeWelcome__title">
        Welcome to <span className="HomeWelcome__title__name">Mahanaim Church of God, Telford</span>
      </div>
      <div className="HomeWelcome__text">Let's worship together</div>
      <div className="HomeWelcome__buttons">
        <Button text="Contact Us" hoverType="outline" />
      </div>
    </div>
  );
};

export default HomeWelcome;