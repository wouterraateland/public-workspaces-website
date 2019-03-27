import React from "react";

import SpaceList from "./SpaceList";

const SpaceOverview = ({ targetedSpaces, maybeTargetedSpaces }) => (
  <>
    {targetedSpaces.length > 0 ? (
      <>
        <h2>Found {targetedSpaces.length} workspaces matching your query</h2>
        <SpaceList spaces={targetedSpaces} />
      </>
    ) : (
      <h2>No workspaces found</h2>
    )}
    {maybeTargetedSpaces.length > 0 ? (
      <>
        <h2>Found {targetedSpaces.length} alternative workspaces</h2>
        <SpaceList spaces={maybeTargetedSpaces} />
      </>
    ) : null}
  </>
);

export default SpaceOverview;
