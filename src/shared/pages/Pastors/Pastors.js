import React from "react";
import Page from "../../components/Page/Page";
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";
import PastorsList from "../../components/PastorsList/PastorsList";

const Pastors = function (props) {
  return (
    <Page name="pastors">
      <PageBanner>
        <PageTitle title="Our Pastors" />
      </PageBanner>
      <PastorsList />
    </Page>
  );
};

export default Pastors;
