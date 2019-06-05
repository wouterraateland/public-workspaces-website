import React from "react";

import Theme from "containers/Theme";

import { Wrapper } from "components/UI";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

const Layout = ({ size, children, navChildren, withFilters }) => (
  <Theme>
    <Page>
      <Nav siteTitle="Public Workspaces" withFilters={withFilters}>
        {navChildren}
      </Nav>
      <Main>
        <Wrapper size={size}>{children}</Wrapper>
      </Main>
      <Footer />
    </Page>
  </Theme>
);
export default Layout;
