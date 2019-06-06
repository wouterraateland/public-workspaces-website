import { useContext, useMemo, useState } from "react";
import firstBy from "thenby";
import SpaceControlsContext from "contexts/SpaceControls";

import useSearchQuery from "hooks/useSearchQuery";

export const useSpaceControlsProvider = ({ allSpaces }) => {
  const [order, setOrder] = useState({ key: null, order: 1 });
  const [filters, setFilters] = useState([]);

  const { query, setQuery, filteredData: resultingSpaces } = useSearchQuery(
    allSpaces.filter(space => space.name && space.city),
    ["name", "city"]
  );

  const comparator = useMemo(() => firstBy(order.key, order.order), [
    order.key,
    order.order
  ]);

  const sortedSpaces = order.key
    ? [
        ...resultingSpaces
          .filter(
            space =>
              !(space[order.key] === undefined || space[order.key] === null)
          )
          .sort(comparator),
        ...resultingSpaces.filter(
          space => space[order.key] === undefined || space[order.key] === null
        )
      ]
    : [];

  const targetedSpaces = filters.reduce(
    (acc, filter) => acc.filter(filter.predicate),
    sortedSpaces
  );

  const maybeTargetedSpaces = filters.reduce(
    (acc, filter) =>
      acc.filter(
        space =>
          space[filter.name] === undefined ||
          space[filter.name] === null ||
          (filter.name === "workerAppreciation" && space[filter.name] === 1)
      ),
    sortedSpaces.filter(space =>
      targetedSpaces.every(targetedSpace => targetedSpace.id !== space.id)
    )
  );

  return {
    query,
    setQuery,
    order,
    setOrder,
    filters,
    setFilters,
    allSpaces,
    targetedSpaces,
    maybeTargetedSpaces
  };
};

const useSpaceControls = () => useContext(SpaceControlsContext);

export default useSpaceControls;
