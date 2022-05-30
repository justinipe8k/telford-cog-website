import React from "react";
import Page from "../../components/Page/Page";
import Cover from "../../pages/Home/Components/Cover/Cover";
import Slider from "../../pages/Home/Components/Slider/Slider";
import SliderItem from "../../pages/Home/Components/SliderItem/SliderItem";
import HomeWelcome from "../../pages/Home/Components/HomeWelcome/HomeWelcome";
import HomeGreetings from "../../pages/Home/Components/HomeGreetings/HomeGreetings";
import HomeMeetingInfo from "../../pages/Home/Components/HomeMeetingInfo/HomeMeetingInfo";
import HomeAbout from "../../pages/Home/Components/HomeAbout/HomeAbout";

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
