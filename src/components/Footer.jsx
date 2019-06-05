import React from "react";
import styled from "styled-components";
import moment from "moment";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { Wrapper } from "components/UI";

const FooterContainer = styled.footer`
  padding: 1em 0;
  background-color: #00000009;

  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <Wrapper size="large">
      &copy; {moment().year()} Public Workspaces -{" "}
      <OutboundLink
        href="mailto:info@publicworkspaces.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        info@publicworkspaces.com
      </OutboundLink>
    </Wrapper>
  </FooterContainer>
);

export default Footer;
