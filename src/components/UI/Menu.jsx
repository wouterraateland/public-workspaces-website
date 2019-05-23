import styled, { css } from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  position: relative;
  width: 2em;
  height: 1.5em;
`;

const Toggle = styled.div`
  height: 0.1em;
  margin: 0.65em 0;
  box-shadow: 0 -0.4em, 0 0.4em;

  background-color: currentColor;
`;

const Items = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;

  overflow-x: hidden;
  overflow-y: auto;

  width: 20em;
  max-width: calc(100vw - 2em);
  max-height: calc(100vh - 4em);

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.small};

  background: #fff;

  pointer-events: none;
  opacity: 0;

  transform: translate(0, -1em);

  transition-property: opacity, transform, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;

  will-change: opacity, transform, box-shadow;

  ${props =>
    props.isOpen &&
    css`
      pointer-events: auto;
      opacity: 1;

      box-shadow: ${props => props.theme.boxShadow.large};

      transform: translate(0, 0);
    `}
`;

const Item = styled(Link)`
  display: block;
  padding: 1em;

  &:nth-child(2n) {
    background: #00000009;
  }

  &:hover {
    background: #0001;
  }
`;

const Menu = {
  Container,
  Toggle,
  Items,
  Item
};

export default Menu;
