import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "components/Logo";
import Wrapper from "components/Wrapper";

const NavContainer = styled.nav`
  border-bottom: 0.1em solid #0001;
`;

const NavWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  height: 2em;
  margin-right: 0.5em;
  vertical-align: middle;
`;

const Title = styled.h1`
  display: inline-block;

  font-size: 1.5em;
  vertical-align: middle;

  color: ${props => props.theme.color.primary};
`;

const ControlsContainer = styled.div`
  flex-grow: 1;

  margin: 0 2em;
`;

const NavLinks = styled.div``;

const NavLink = styled(Link)`
  padding: 0.5em;
`;

const Nav = ({ siteTitle, children }) => (
  <NavContainer>
    <NavWrapper size="large">
      <Link to="/">
        <StyledLogo />
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
