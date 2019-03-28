import React, { useCallback } from "react";
import styled from "styled-components";

import useSpaceControls from "hooks/useSpaceControls";

const Filter = styled.span`
  display: inline-block;
  margin-right: 0.5em;

  padding: 0.25em 0.5em;

  border-radius: ${props => props.theme.borderRadius};

  background-color: ${props => props.theme.color.primary};
  color: #fff;
`;

const FilterContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  white-space: nowrap;
`;

const Filters = () => {
  const { filters, setFilters } = useSpaceControls();

  const deleteFilter = useCallback(
    key => setFilters(filters => filters.filter(filter => filter.key !== key)),
    []
  );

  return filters.length > 0 ? (
    <FilterContainer>
      {filters.map(filter => (
        <Filter key={filter.key} onClick={() => deleteFilter(filter.key)}>
          {filter.value} &times;
        </Filter>
      ))}
    </FilterContainer>
  ) : null;
};

export default Filters;
