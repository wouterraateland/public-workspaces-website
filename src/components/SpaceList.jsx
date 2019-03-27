import React from "react";
import styled from "styled-components";

import Space from "./Space";

const SpaceListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5em;
`;

const SpaceList = ({ spaces }) => (
  <SpaceListContainer>
    {spaces.map(space => (
      <Space key={space.id} space={space} />
    ))}
  </SpaceListContainer>
);

export default SpaceList;
