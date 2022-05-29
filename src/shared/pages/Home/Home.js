import React from "react";
import Page from "../../components/Page/Page";
import Cover from "../../components/Cover/Cover";
import Slider from "../../components/Slider/Slider";
import SliderItem from "../../components/SliderItem/SliderItem";
import HomeWelcome from "../../components/HomeWelcome/HomeWelcome";
import HomeGreetings from "../../components/HomeGreetings/HomeGreetings";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeMeetingInfo from "../../components/HomeMeetingInfo/HomeMeetingInfo";
import Navbar from "../../components/Header/Navbar";

const Home = function (props) {
  return (
    <Page name="home"> 
    
      <Cover animate={true}>
        <Slider>
          <SliderItem>
            <HomeWelcome />
          </SliderItem>
        </Slider>
      </Cover>
      <HomeGreetings />
      <HomeMeetingInfo/>
      <HomeAbout />
    </Page>
  );
};

export default Home;
