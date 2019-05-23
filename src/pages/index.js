import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import SpaceBrowser from "components/SpaceBrowser";
import FilterControl from "components/SpaceControls/FilterControl";
import { Align, Button, Message, VSpace } from "components/UI";

const IndexPage = () => (
  <Layout size="large" navChildren={<FilterControl />}>
    <SEO
      title="Find Public Workspaces"
      keywords={["public workspace", "cafe"]}
    />
    <SpaceBrowser />
    <VSpace.Large />
    <Align.Center>
      <Message>
        <p>Missing a space, or something else?</p>
        <br />
        <Button
          importance="primary"
          color="primary"
          onClick={() =>
            window.open("https://forms.gle/TjFc5tNyW2nRX4H37", "_blank")
          }
        >
          Let us know
        </Button>
      </Message>
    </Align.Center>
    <VSpace.Large />
  </Layout>
);

export default IndexPage;
