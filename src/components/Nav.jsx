import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Wrapper from "./Wrapper";

const NavContainer = styled.nav`
  border-bottom: 0.1em solid #0001;
`;

const NavWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  &::after {
    content: '${props => props.siteTitle}';
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.theme.color.primary};
`;

const ControlsContainer = styled.div`
  flex-grow: 1;

  margin: 0 1em;
`;

const NavLinks = styled.div``;

const NavLink = styled(Link)`
  padding: 0.5em;
`;

const Nav = ({ siteTitle, children }) => (
  <NavContainer>
    <NavWrapper size="large">
      <Link to="/">
        <Logo />
        <Title>{siteTitle}</Title>
      </Link>
      <ControlsContainer>{children}</ControlsContainer>
      <NavLinks>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/for-companies">Info for Companies</NavLink>
        <NavLink to="/for-workers">Info for workers</NavLink>
      </NavLinks>
    </NavWrapper>
  </NavContainer>
);

Nav.defaultProps = {
  siteTitle: ``
};

export default Nav;
