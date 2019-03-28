import React, { useMemo } from "react";
import _ from "utils";
import styled from "styled-components";
import { darken } from "polished";

import useSpaceControls from "hooks/useSpaceControls";

const Container = styled.label`
  cursor: pointer;

  display: inline-block;
  width: calc(100% - 2.2em);

  border: 0.1em solid #0002;
  border-radius: ${props => props.theme.borderRadius} 0 0
    ${props => props.theme.borderRadius};

  &:hover {
    border-color: #0004;
  }

  &:focus-within {
    border-color: ${props => props.theme.color.primary};
  }
`;

const LocationIcon = styled.span`
  position: relative;

  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0.5em;
  border: 0.1em solid #000;
  border-radius: 100%;

  opacity: 0.6;

  &::before,
  &::after {
    content: "";

    position: absolute;
    left: 50%;
    top: 50%;

    border-radius: 0.1em;

    background: #000;

    transform: translate(-50%, -50%);
  }

  &::before {
    width: 1.2em;
    height: 0.2em;
  }

  &::after {
    width: 0.2em;
    height: 1.2em;
  }
`;

const FilterIcon = styled.div`
  position: relative;
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

const Select = styled.select`
  cursor: pointer;
  -webkit-appearance: none;

  width: calc(100% - 2em);
  padding: 0.5em;
  border: none;

  line-height: 1;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;

  width: 2.2em;
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

const CityControl = () => {
  const { allSpaces, city, setCity, showFilters } = useSpaceControls();

  const allCities = useMemo(() => _.unique(_.mapKey("city")(allSpaces)), [
    allSpaces
  ]);

  return (
    <>
      <Container>
        <LocationIcon />
        <Select value={city} onChange={event => setCity(event.target.value)}>
          {allCities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </Container>
      <Button onClick={showFilters}>
        <FilterIcon />
      </Button>
    </>
  );
};

export default CityControl;
