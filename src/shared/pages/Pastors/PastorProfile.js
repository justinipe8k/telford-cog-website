import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const PastorProfilePage = function (props) {
  return (
    <Page name="pastor-profile">
      <PageBanner>
        <PageTitle title="About" />
      </PageBanner>
    </Page>
  );
};

export default PastorProfilePage;
