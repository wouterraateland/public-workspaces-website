import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { Button } from "components/UI";
import Layout from "components/Layout";
import SEO from "components/SEO";

const ForCompaniesPage = () => (
  <Layout>
    <SEO title="For Companies" />
    <h1>For Your Company</h1>
    Public Workspaces can help your company. By joining our platform you will
    offer more transparency towards guests, become more visible, and gain more
    customers.
    <br />
    <br />
    <p>
      You can add your company to the database by filling out our form linked
      below. You can always edit your data or finish the form later, by
      reopening it.
      <br />
      The basic data required to get on the site just takes 3 minutes to fill
      in.
    </p>
    <Button
      as={OutboundLink}
      color="primary"
      importance="primary"
      href="https://forms.gle/fLg6z5dqUCXjMPFa6"
      target="_blank"
      rel="noopener noreferrer"
    >
      Add your company
    </Button>
  </Layout>
);

export default ForCompaniesPage;
