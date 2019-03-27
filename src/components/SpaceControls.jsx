import React from "react";

const LocationControl = () => <div>LocationControl</div>;
const OrderControl = () => <div>OrderControl</div>;
const FilterControl = () => <div>FilterControl</div>;
const Filters = () => <div>Filters</div>;
const ResultCounter = () => <div>ResultCounter</div>;

const SpaceControls = ({ spaceState, setSpaceState }) => (
  <nav>
    <LocationControl />
    <OrderControl />
    <FilterControl />
    <Filters />
    <ResultCounter />
  </nav>
);

export default SpaceControls;
