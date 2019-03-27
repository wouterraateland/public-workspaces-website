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
    city => setSpaceState(state => ({ ...state, city })),
    []
  );
  const changeOrder = useCallback(
    order => setSpaceState(state => ({ ...state, order })),
    []
  );
  const changeFilters = useCallback(
    filters => setSpaceState(state => ({ ...state, filters })),
    []
  );

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
