import React,{useState} from "react";
import Page from "../../components/Page/Page";
import Cover from "../../pages/Home/Components/Cover/Cover";
import Slider from "../../pages/Home/Components/Slider/Slider";
import SliderItem from "../../pages/Home/Components/SliderItem/SliderItem";
import HomeWelcome from "../../pages/Home/Components/HomeWelcome/HomeWelcome";
import HomeGreetings from "../../pages/Home/Components/HomeGreetings/HomeGreetings";
import HomeMeetingInfo from "../../pages/Home/Components/HomeMeetingInfo/HomeMeetingInfo";
import HomeAbout from "../../pages/Home/Components/HomeAbout/HomeAbout";
import WelcomeSlider from "./Components/WelcomeSlider";

const Home = function (props) {
  const[sliderItemNo,setSliderItemNo] = useState(1);
  const maxSlides=2;
  return (
    <Page name="home"> 
   
      {/* <Cover animate={true}>
        <Slider>
          <SliderItem>
            <HomeWelcome />
          </SliderItem>
        </Slider>
      </Cover> */}
      <WelcomeSlider 
      sliderItemNo={sliderItemNo} 
      setSliderItemNo = {setSliderItemNo}
      maxSlides={maxSlides}
      />
      <HomeGreetings />
      <HomeMeetingInfo/>
      <HomeAbout />
    </Page>
  );
};

export default Home;
