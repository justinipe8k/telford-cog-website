import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import ContactForm from "./Components/ContactForm";
import { Divider } from 'semantic-ui-react'

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
