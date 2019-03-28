import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SpaceControlsProvider } from "../contexts/SpaceControls";

import Theme from "../containers/Theme";

import Wrapper from "./Wrapper";
import Nav from "./Nav";

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
        <Nav siteTitle="Public Workspaces">{navChildren}</Nav>
        <main>
          <Wrapper size={size}>{children}</Wrapper>
        </main>
        <footer />
      </Theme>
    </SpaceControlsProvider>
  );
};
export default Layout;
