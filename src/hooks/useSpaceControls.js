import { useContext, useMemo, useState } from "react";
import firstBy from "thenby";
import SpaceControlsContext from "contexts/SpaceControls";

import useSearchQuery from "hooks/useSearchQuery";

const ORDER = {
  ASCENDING: 1,
  DESCENDING: -1
};

export const useSpaceControlsProvider = ({ allSpaces }) => {
  const [order, setOrder] = useState({
    key: "workerAppreciation",
    order: ORDER.DESCENDING
  });
  const [filters, setFilters] = useState([]);

  const { query, setQuery, filteredData: resultingSpaces } = useSearchQuery(
    allSpaces.filter(space => space.name && space.city),
    ["name", "city"]
  );

  const comparator = useMemo(() => firstBy(order.key, order.order), [
    order.key,
    order.order
  ]);

  const sortedSpaces = [
    ...resultingSpaces
      .filter(
        space => !(space[order.key] === undefined || space[order.key] === null)
      )
      .sort(comparator),
    ...resultingSpaces.filter(
      space => space[order.key] === undefined || space[order.key] === null
    )
  ];

  const filterPredicates = filters.map(({ predicate }) => predicate);
  const targetedSpaces = filterPredicates.reduce(
    (acc, p) => acc.filter(p),
    sortedSpaces
  );

  // const maybeTargetedSpaces = sortedSpaces
  //   .filter(() => true)
  //   .filter(space =>
  //     targetedSpaces.every(targetedSpace => targetedSpace.id !== space.id)
  //   );
  const maybeTargetedSpaces = [];

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
