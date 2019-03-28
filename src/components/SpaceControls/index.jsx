import React, { useCallback } from "react";
import _ from "../../utils";

import CityControl from "./CityControl";
import OrderControl from "./OrderControl";
import FiltersControl from "./FiltersControl";
import Filters from "./Filters";
import ResultCounter from "./ResultCounter";

const SpaceControls = ({
  spaceState,
  setSpaceState,
  allSpaces,
  targetedSpaces
}) => {
  const changeCity = useCallback(
    f =>
      setSpaceState(state => ({
        ...state,
        city: typeof f === "function" ? f(state.city) : f
      })),
    []
  );
  const changeOrder = useCallback(
    f =>
      setSpaceState(state => ({
        ...state,
        order: typeof f === "function" ? f(state.order) : f
      })),
    []
  );
  const changeFilters = useCallback(
    f =>
      setSpaceState(state => ({
        ...state,
        filters: typeof f === "function" ? f(state.filters) : f
      })),
    []
  );
  console.log(spaceState);

  const allCities = _.unique(_.mapKey("city")(allSpaces));

  return (
    <nav>
      <CityControl
        allCities={allCities}
        city={spaceState.city}
        onChange={changeCity}
      />
      <OrderControl order={spaceState.order} onChange={changeOrder} />
      <FiltersControl filters={spaceState.filters} onChange={changeFilters} />
      <Filters filters={spaceState.filters} />
      <ResultCounter amount={targetedSpaces.length} />
    </nav>
  );
};

export default SpaceControls;
