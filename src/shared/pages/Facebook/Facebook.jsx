import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";

const Facebook = function (props) {
  return (
    <Page name="Facebook">
      <PageBanner>
        <PageTitle title="Facebook" />
      </PageBanner>      
      <div class="fb-video" data-href="https://www.facebook.com/mahanaimtelford/live" data-width="500" data-show-text="false"></div>
    </Page>
  );
};

export default Facebook;