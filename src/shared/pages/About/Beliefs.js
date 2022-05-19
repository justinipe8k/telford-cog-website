import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import BeliefsList from "../../components/BeliefsList/BeliefsList";

const Beliefs = function (props) {
  return (
    <Page name="beliefs">
      <PageBanner>
        <PageTitle title="Our Beliefs" />
      </PageBanner>
      <BeliefsList />
    </Page>
  );
};

export default Beliefs;
