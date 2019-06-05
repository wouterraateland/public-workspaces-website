import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { Button } from "components/UI";
import Layout from "components/Layout";
import SEO from "components/SEO";

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
      suggestions, ideas or critiques...
    </p>
    <Button
      as={OutboundLink}
      importance="primary"
      color="primary"
      href="https://forms.gle/TjFc5tNyW2nRX4H37"
      target="_blank"
      rel="noopener noreferrer"
    >
      Let us know
    </Button>
  </Layout>
);

export default ForWorkersPage;
