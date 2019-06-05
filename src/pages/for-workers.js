import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ForWorkersPage = () => (
  <Layout>
    <SEO title="For Workers" />
    <h1>For the hard worker</h1>
    <p>
      Public Workspaces gives you all the information you can ask for, when you
      want to work somewhere outside of the confines of your home or your
      regular office. All the information on the places is based on data
      provided by the place itself.
    </p>
    <p>
      If you feel like some information is not right, or if you have any
      suggestions, ideas or critiques, feel free to send us an email at{" "}
      <OutboundLink
        href="mailto:info@publicworkspaces.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        info@publicworkspaces.com
      </OutboundLink>
    </p>
  </Layout>
);

export default ForWorkersPage;
