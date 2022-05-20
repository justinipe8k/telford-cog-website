import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import BeliefsList from "../../components/BeliefsList/BeliefsList";

const Ministries = function (props) {
  return (
    <Page name="Ministries">
      <PageBanner>
        <PageTitle title="Our Ministries" />
      </PageBanner>
      <BeliefsList />
    </Page>
  );
};

export default Ministries;
