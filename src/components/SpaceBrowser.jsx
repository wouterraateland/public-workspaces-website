import React from "react";
import styled from "styled-components";

import SpaceOverview from "./SpaceOverview";

const Container = styled.div`
  margin: 2em 0;
`;

export default () => (
  <Container>
    <SpaceOverview />
  </Container>
);
