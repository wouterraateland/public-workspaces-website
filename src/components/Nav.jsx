import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import useClickOutside from "hooks/useClickOutside";
import useScroll from "hooks/useScroll";

import Logo from "components/Logo";
import { Menu, Wrapper } from "components/UI";
import FilterOptions from "components/SpaceControls/FilterOptions";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  box-shadow: ${props =>
    props.isDown
      ? props.theme.boxShadow.medium
      : "0 .5rem 1.5rem -.5rem #0000"};

  background-color: ${props => props.theme.color.primary};
  color: #fff;

  will-change: box-shadow;
  transition: box-shadow 0.2s ease-out;
`;

const NavWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledLogo = styled(Logo)`
  display: inline-block;
  height: 3em;

  vertical-align: middle;
`;

const ControlsContainer = styled.div`
  flex-grow: 1;

  margin: 0 1em;
`;

const StyledMenuContainer = styled(Menu.Container)`
  flex-grow: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
`;

const Nav = ({ children, withFilters }) => {
  const ref = useRef(null);
  const windowRef = useRef(typeof window === "undefined" ? null : window);

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = useCallback(() => setOpen(isOpen => !isOpen), []);
  useClickOutside({ ref, onClickOutside: () => setOpen(false) });
  const { top } = useScroll(windowRef);

  return (
    <NavContainer isDown={top > 0}>
      <NavWrapper size="large">
        <Link to="/">
          <StyledLogo />
        </Link>
        <ControlsContainer>
          {children ? children : <Title>Public Workspaces</Title>}
        </ControlsContainer>
        <StyledMenuContainer ref={ref} onClick={toggleMenu}>
          <Menu.Toggle />
          <Menu.Items isOpen={isOpen}>
            <Menu.Item to="/about">About us</Menu.Item>
            <Menu.Item to="/for-companies">Info for Companies</Menu.Item>
            <Menu.Item to="/for-workers">Info for workers</Menu.Item>
          </Menu.Items>
        </StyledMenuContainer>
      </NavWrapper>
      {withFilters && <FilterOptions />}
    </NavContainer>
  );
};

Nav.defaultProps = {
  siteTitle: ``
};

export default Nav;
