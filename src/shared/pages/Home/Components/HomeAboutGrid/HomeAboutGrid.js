import React from "react";
import HomeAboutGridItem from "../HomeAboutGridItem/HomeAboutGridItem";
import "./HomeAboutGrid.css";

const HomeAboutGrid = function (props) {
  return (
    <div className="HomeAboutGrid">
      <div className="wrapper wrapper--content">
        <div className="HomeAboutGrid__grid">
          <HomeAboutGridItem
            title="About Us"
            icon="beliefs"
            to="/about"
          />
          <HomeAboutGridItem
            title="Sermons"
            icon="ministries"
            to="/sermons"
          />
          <HomeAboutGridItem
            title="Our Leadership"
            icon="leadership"
            to="/leadership"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutGrid;
