import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutSummary from "../../components/AboutSummary/AboutSummary";
import HomeAboutGrid from "../../components/HomeAboutGrid/HomeAboutGrid";
import PageTitle from "../../components/PageTitle/PageTitle";
import AboutLocation from "../../components/AboutLocation/AboutLocation";

const About = function (props) {
  return (
    <Page name="about">
      <PageBanner>
        <PageTitle title="About Us" />
      </PageBanner>
      <AboutSummary />
      <AboutLocation />
      <HomeAboutGrid />
    </Page>
  );
};

export default About;
