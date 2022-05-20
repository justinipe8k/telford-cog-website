import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import PastorsList from "../../components/PastorsList/PastorsList";

const Leadership = function (props) {
  return (
    <Page name="leadership">
      <PageBanner>
        <PageTitle title="Our Leadership" />
      </PageBanner>
      <PastorsList />
    </Page>
  );
};

export default Leadership;
