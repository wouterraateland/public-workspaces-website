import React, { createContext } from "react";
import { useFilterVisibilityProvider } from "hooks/useFilterVisibility";

const FilterVisibilityContext = createContext(null);

export const FilterVisibilityProvider = ({ children, ...otherProps }) => {
  const value = useFilterVisibilityProvider(otherProps);
  return (
    <FilterVisibilityContext.Provider value={value}>
      {children}
    </FilterVisibilityContext.Provider>
  );
};

export default FilterVisibilityContext;
