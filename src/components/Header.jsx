import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderContainer = styled.header`
  padding: 0.5em;
  box-shadow: ${props => props.theme.boxShadow.medium};
`;

const Logo = styled.div`
  &::after {
    content: '${props => props.siteTitle}';
  }
`;

const ControlsContainer = styled.div``;

const NavLinks = styled.div``;

const Header = ({ siteTitle, children }) => (
  <HeaderContainer>
    <Link to="/">
      <Logo siteTitle={siteTitle} />
    </Link>
    <ControlsContainer>{children}</ControlsContainer>
    <NavLinks>
      <Link to="/about">About us</Link>
      <Link to="/for-companies">Info for Companies</Link>
      <Link to="/for-worker">Info for workers</Link>
    </NavLinks>
  </HeaderContainer>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
