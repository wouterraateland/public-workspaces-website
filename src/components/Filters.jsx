import React, { useCallback } from "react";
import styled from "styled-components";

import useSpaceControls from "hooks/useSpaceControls";

const Filter = styled.span`
  cursor: pointer;
  display: inline-block;
  margin: 0 0.5em 0.5em 0;

  padding: 0.25em 0.5em;

  border-radius: ${props => props.theme.borderRadius};

  background-color: #0002;
`;

const Strong = styled.strong`
  color: #fff;
`;

const FilterContainer = styled.div``;

const Filters = () => {
  const { filters, setFilters } = useSpaceControls();

  const deleteFilter = useCallback(
    name =>
      setFilters(filters => filters.filter(filter => filter.name !== name)),
    []
  );

  return filters.length > 0 ? (
    <FilterContainer>
      {filters.map(filter => (
        <Filter key={filter.name} onClick={() => deleteFilter(filter.name)}>
          <Strong>{filter.label}</Strong> {filter.valueLabel} &times;
        </Filter>
      ))}
    </FilterContainer>
  ) : null;
};

export default Filters;
