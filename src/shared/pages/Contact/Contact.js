import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const Contact = function (props) {
  return (
    <Page name="Contact Us">
      <PageBanner>
        <PageTitle title="Contact Us" />
      </PageBanner>
    <h1>Contact Us</h1>
    </Page>
  );
};

export default Contact;
