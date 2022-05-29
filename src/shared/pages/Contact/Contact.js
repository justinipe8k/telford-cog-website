import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "./Components/ContactForm";

const Contact = function (props) {
  return (
    <Page name="Contact Us">
      <PageBanner>
        <PageTitle title="Contact Us" />
      </PageBanner>
    <ContactForm/>
    </Page>
  );
};

export default Contact;
