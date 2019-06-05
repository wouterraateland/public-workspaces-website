import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useFilterVisibility from "hooks/useFilterVisibility";
import useSpaceControls from "hooks/useSpaceControls";

const Container = styled.div`
  max-width: 35em;
  margin: 2em auto 3em;

  text-align: center;
`;

const Introduction = () => {
  const [updates, setUpdates] = useState(0);

  const { isVisible } = useFilterVisibility();
  const { allSpaces, order, filters, query } = useSpaceControls();

  useEffect(() => {
    setUpdates(updates => updates + 1);
  }, [isVisible, order, filters, query]);

  const countingSpaces = allSpaces.filter(({ name, city }) => name && city);
  const spaceCount = countingSpaces.length;
  const cityCount = new Set(countingSpaces.map(({ city }) => city)).size;

  return updates < 2 ? (
    <Container>
      <h1>
        <span role="img" aria-label="workers">
          👨‍💻👩‍💻
        </span>{" "}
        Discover your workspace
      </h1>
      <p>
        Public Workspaces is a database of {spaceCount} workspaces in{" "}
        {cityCount === 1 ? "" : cityCount}{" "}
        {cityCount === 1 ? countingSpaces[0].city : "cities"}. Discover your
        favourite space to study & work in the city.
      </p>
    </Container>
  ) : null;
};

export default Introduction;
