import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SpaceControlsProvider } from "contexts/SpaceControls";

import Theme from "containers/Theme";

import Wrapper from "components/Wrapper";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

const Layout = ({ size, children, navChildren }) => {
  const data = useStaticQuery(graphql`
    query AllSpacesQuery {
      allCompaniesJson {
        edges {
          node {
            id
            name
            slug
            city
            isOpen
            wifiSpeed
            coffeePrice
            images
          }
        }
      }
    }
  `);
  const allSpaces = data.allCompaniesJson.edges.map(edge => edge.node);

  return (
    <SpaceControlsProvider allSpaces={allSpaces}>
      <Theme>
        <Page>
          <Nav siteTitle="Public Workspaces">{navChildren}</Nav>
          <Main>
            <Wrapper size={size}>{children}</Wrapper>
          </Main>
          <Footer />
        </Page>
      </Theme>
    </SpaceControlsProvider>
  );
};
export default Layout;
