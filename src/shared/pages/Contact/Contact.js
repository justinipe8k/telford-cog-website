import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import Email from './Components/Email';
import Call from "./Components/Call";
import Whatsapp from "./Components/Whatsapp";

const Contact = function (props) {
  return (
    <Page name="Contact Us">
      <PageBanner>
        <PageTitle title="Contact Us" />
      </PageBanner>
      <div className="contact-parent-div">
      <Email/>
      <Call/>
      <Whatsapp/>
      </div>
    </Page>
  );
};

export default Contact;
