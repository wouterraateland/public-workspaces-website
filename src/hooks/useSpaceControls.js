import { useContext, useCallback, useMemo, useState } from "react";
import firstBy from "thenby";
import SpaceControlsContext from "contexts/SpaceControls";

const ORDER = {
  ASCENDING: 1,
  DESCENDING: -1
};

export const useSpaceControlsProvider = ({ allSpaces }) => {
  const [state, setState] = useState({
    city: "Delft",
    order: {
      key: "popularity",
      order: ORDER.ASCENDING
    },
    filters: [],
    filtersVisible: false
  });
  const { city, order, filters } = state;

  const setCity = useCallback(
    f =>
      setState(state => ({
        ...state,
        city: typeof f === "function" ? f(state.city) : f
      })),
    []
  );
  const setOrder = useCallback(
    f =>
      setState(state => ({
        ...state,
        order: typeof f === "function" ? f(state.order) : f
      })),
    []
  );
  const setFilters = useCallback(
    f =>
      setState(state => ({
        ...state,
        filters: typeof f === "function" ? f(state.filters) : f
      })),
    []
  );

  const showFilters = useCallback(
    () =>
      setState(state => ({
        ...state,
        filtersVisible: true
      })),
    []
  );

  const hideFilters = useCallback(
    () =>
      setState(state => ({
        ...state,
        filtersVisible: false
      })),
    []
  );

  const comparator = useMemo(() => firstBy(order.key, order.order), [order]);

  const targetedSpaces = allSpaces
    .filter(space => space.city === city)
    .sort(comparator);

  const maybeTargetedSpaces = allSpaces
    .filter(
      space =>
        space.city === city &&
        targetedSpaces.every(targetedSpace => targetedSpace.id !== space.id)
    )
    .sort(comparator);

  return {
    city,
    setCity,
    order,
    setOrder,
    filters,
    setFilters,
    showFilters,
    hideFilters,
    allSpaces,
    targetedSpaces,
    maybeTargetedSpaces
  };
};

const useSpaceControls = () => useContext(SpaceControlsContext);

export default useSpaceControls;
