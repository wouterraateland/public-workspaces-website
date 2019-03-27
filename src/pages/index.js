import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SpaceBrowser from "../components/SpaceBrowser";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Find Public Workspaces"
      keywords={["public workspace", "cafe"]}
    />
    <SpaceBrowser />
  </Layout>
);

export default IndexPage;
