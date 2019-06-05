import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import useSpaceControls from "hooks/useSpaceControls";
import useFilterVisibility from "hooks/useFilterVisibility";

const Container = styled.label`
  cursor: pointer;

  display: inline-block;
  width: calc(100% - 5.5em);

  background-color: #fff;
  background-clip: padding-box;

  border: 0.1em solid #0002;
  border-radius: ${props => props.theme.borderRadius} 0 0
    ${props => props.theme.borderRadius};

  &:hover {
    border-color: #0004;
  }

  &:focus-within {
    border-color: #0004;
  }
`;

const FilterIcon = styled.div`
  position: relative;

  display: inline-block;
  width: 1em;
  height: 1em;

  border: 0.375em solid transparent;
  border-top-color: currentColor;

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    border-style: solid;
    border-width: 0.5em 0.25em 0.25em 0;
    border-bottom-color: transparent;
  }
`;

const SearchIcon = styled.div`
  position: relative;

  display: block;
  width: 1.5em;
  height: 1.5em;
  margin: 0.25em 0 0.25em 0.5em;

  float: left;

  color: #000;
  opacity: 0.5;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    right: 0.1em;
    top: 0.1em;

    width: 1em;
    height: 1em;
    border: 0.2em solid;
    border-radius: 100%;
  }

  &::after {
    left: 0.4em;
    bottom: -0.2em;

    width: 0.2em;
    height: 0.6em;

    background: currentColor;

    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const Input = styled.input`
  display: block;
  width: calc(100% - 2em);
  height: 2em;
  padding: 0.5em;
  border: none;

  line-height: 1;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;

  width: 5.5em;
  padding: 0.6em;
  border: none;
  border-radius: 0 0.25em 0.25em 0;

  line-height: 1;

  background-color: ${props => props.theme.color.primary};
  color: #fff;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.color.primary)};
  }

  &:focus {
    outline: none;
  }
`;

const FilterControl = () => {
  const { query, setQuery } = useSpaceControls();
  const { toggle } = useFilterVisibility();

  return (
    <>
      <Container>
        <SearchIcon />
        <Input
          placeholder="Search workspaces, cities, ..."
          value={query}
          onChange={event => setQuery(event.target.value)}
          type="search"
        />
      </Container>
      <Button onClick={toggle}>
        <FilterIcon /> Filters
      </Button>
    </>
  );
};

export default FilterControl;
