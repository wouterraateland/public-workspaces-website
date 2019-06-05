import React from "react";

import { SpaceControlsProvider } from "contexts/SpaceControls";
import { FilterVisibilityProvider } from "contexts/FilterVisibility";

import useSpaces from "hooks/useSpaces";

import Layout from "components/Layout";
import SEO from "components/SEO";
import SpaceBrowser from "components/SpaceBrowser";
import FilterControl from "components/SpaceControls/FilterControl";
import Introduction from "components/Introduction";
import { Align, Button, Message, VSpace } from "components/UI";

const IndexPage = ({ modal }) => {
  const { allSpaces } = useSpaces();
  return (
    <SpaceControlsProvider allSpaces={allSpaces}>
      <FilterVisibilityProvider>
        <Layout size="large" navChildren={<FilterControl />} withFilters>
          <SEO
            title="Find your space to work / study"
            keywords={[
              "public workspace",
              "study place",
              "flexwerk",
              "workspace",
              "study delft",
              "werkplek",
              "studeren delft",
              "werken delft",
              "working delft",
              "meeting spot",
              "hipster cafe",
              "cafe",
              "coffeeshop",
              "delft",
              "city"
            ]}
          />
          <Introduction />
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
          {modal}
        </Layout>
      </FilterVisibilityProvider>
    </SpaceControlsProvider>
  );
};

export default IndexPage;
