import React,{useState} from "react";
import Page from "../../components/Page/Page";
import HomeWelcome from "../../pages/Home/Components/HomeWelcome/HomeWelcome";
import HomeGreetings from "../../pages/Home/Components/HomeGreetings/HomeGreetings";
import HomeMeetingInfo from "../../pages/Home/Components/HomeMeetingInfo/HomeMeetingInfo";
import HomeAbout from "../../pages/Home/Components/HomeAbout/HomeAbout";
import WelcomeSlider from "./Components/WelcomeSlider";
import './Home.css';


const Home = function (props) {
  return (
    <Page name="home"> 
      <WelcomeSlider/>
      <HomeGreetings />
      <HomeMeetingInfo/>
      <HomeAbout />
    </Page>
  );
};


export default Home;
