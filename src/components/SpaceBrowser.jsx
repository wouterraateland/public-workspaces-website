import React, { useState } from "react";
import { useStaticQuery, grapqhl } from "gatsby";

import SpaceControls from "./SpaceControls";
import SpaceOverview from "./SpaceOverview";

const ORDER = {
  ASCENDING: 1,
  DESCENDING: -1
};

const SpaceBrowser = ({ initialLocation, initialOrder, initialFilters }) => {
  const [state, setState] = useState({
    location: initialLocation,
    order: initialOrder,
    filters: initialFilters
  });

  const data = useStaticQuery(graphql`
    query AllSpacesQuery {
      allCompaniesJson {
        edges {
          node {
            name
            city
            isOpen
            wifiSpeed
            images
          }
        }
      }
    }
  `);

  const allSpaces = data.allCompaniesJson.edges.map(edge => edge.node);

  const targetedSpaces = allSpaces
    .filter(() => true)
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  const maybeTargetedSpaces = allSpaces
    .filter(space =>
      targetedSpaces.every(targetedSpace => targetedSpace.id !== space.id)
    )
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  return (
    <>
      <SpaceControls
        spaceState={state}
        setSpaceState={setState}
        allSpaces={allSpaces}
        targetedSpaces={targetedSpaces}
        maybeTargetedSpaces={maybeTargetedSpaces}
      />
      <SpaceOverview
        targetedSpaces={targetedSpaces}
        maybeTargetedSpaces={maybeTargetedSpaces}
      />
    </>
  );
};

SpaceBrowser.defaultProps = {
  initialLocation: "Delft",
  initialOrder: {
    key: "Popularity",
    order: ORDER.ASCENDING
  },
  initialFilters: []
};

export default SpaceBrowser;
