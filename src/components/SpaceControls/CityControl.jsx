import React from "react";

const CityControl = ({ allCities, city, onChange }) => (
  <select value={city} onChange={event => onChange(event.target.value)}>
    {allCities.map(city => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
);

export default CityControl;
