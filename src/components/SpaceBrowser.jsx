import React, { useMemo, useState } from "react";
import { useStaticQuery, grapqhl } from "gatsby";
import firstBy from "thenby";

import Wrapper from "./Wrapper";
import SpaceControls from "./SpaceControls";
import SpaceOverview from "./SpaceOverview";

const ORDER = {
  ASCENDING: 1,
  DESCENDING: -1
};

const SpaceBrowser = ({ initialCity, initialOrder, initialFilters }) => {
  const data = useStaticQuery(graphql`
    query AllSpacesQuery {
      allCompaniesJson {
        edges {
          node {
            id
            name
            slug
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

  const [state, setState] = useState({
    city: initialCity,
    order: initialOrder,
    filters: initialFilters
  });
  const { city, order, filters } = state;

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

  return (
    <Wrapper size="large">
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
    </Wrapper>
  );
};

SpaceBrowser.defaultProps = {
  initialCity: "Delft",
  initialOrder: {
    key: "popularity",
    order: ORDER.ASCENDING
  },
  initialFilters: []
};

export default SpaceBrowser;
