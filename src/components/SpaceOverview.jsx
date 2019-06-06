import React from "react";

import useSpaceControls from "hooks/useSpaceControls";

import SpaceList from "components/SpaceList";
import ResultsTitle from "components/ResultsTitle";

const SpaceOverview = () => {
  const { targetedSpaces, maybeTargetedSpaces } = useSpaceControls();

  return (
    <>
      <ResultsTitle>
        {targetedSpaces.length > 0
          ? `Found ${targetedSpaces.length} workspaces`
          : "No workspaces found"}
      </ResultsTitle>
      <SpaceList spaces={targetedSpaces} />
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
