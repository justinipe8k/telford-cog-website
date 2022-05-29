import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import AboutUsContent from "./Components/AboutUsContent";

const About = function (props) {
  return (
    <Page name="about">
      <PageBanner>
        <PageTitle title="About Us" />
      </PageBanner>
     <AboutUsContent/>
    </Page>
  );
};

export default About;
