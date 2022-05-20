import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const About = function (props) {
  return (
    <Page name="about">
      <PageBanner>
        <PageTitle title="About Us" />
      </PageBanner>
      <h1>About us</h1>
    </Page>
  );
};

export default About;
