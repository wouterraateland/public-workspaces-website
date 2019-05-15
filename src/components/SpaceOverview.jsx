import React from "react";

import useSpaceControls from "hooks/useSpaceControls";

import SpaceList from "components/SpaceList";
import ResultsTitle from "components/ResultsTitle";

const SpaceOverview = () => {
  const { targetedSpaces, maybeTargetedSpaces } = useSpaceControls();

  return (
    <>
      {targetedSpaces.length > 0 ? (
        <>
          <ResultsTitle>Found {targetedSpaces.length} workspaces</ResultsTitle>
          <SpaceList spaces={targetedSpaces} />
        </>
      ) : (
        <h2>No workspaces found</h2>
      )}
      {maybeTargetedSpaces.length > 0 ? (
        <>
          <ResultsTitle>
            Found {targetedSpaces.length} alternative workspaces
          </ResultsTitle>
          <SpaceList spaces={maybeTargetedSpaces} />
        </>
      ) : null}
    </>
  );
};

export default SpaceOverview;
