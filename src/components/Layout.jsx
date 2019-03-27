import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Theme from "../containers/Theme";
import Header from "./Header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Theme>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer />
      </Theme>
    )}
  />
);

export default Layout;
