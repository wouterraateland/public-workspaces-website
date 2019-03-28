import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import SpaceBrowser from "components/SpaceBrowser";
import FilterControl from "components/SpaceControls/FilterControl";

const IndexPage = () => (
  <Layout size="large" navChildren={<FilterControl />}>
    <SEO
      title="Find Public Workspaces"
      keywords={["public workspace", "cafe"]}
    />
    <SpaceBrowser />
  </Layout>
);

export default IndexPage;
