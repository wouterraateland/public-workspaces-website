import { useContext, useCallback, useState } from "react";
import FilterVisibilityContext from "contexts/FilterVisibility";

export const useFilterVisibilityProvider = () => {
  const [isVisible, setVisibility] = useState(false);

  const show = useCallback(() => setVisibility(true), []);
  const hide = useCallback(() => setVisibility(false), []);
  const toggle = useCallback(() => setVisibility(isVisible => !isVisible), []);

  return {
    isVisible,
    show,
    hide,
    toggle
  };
};

const useFilterVisibility = () => useContext(FilterVisibilityContext);

export default useFilterVisibility;
