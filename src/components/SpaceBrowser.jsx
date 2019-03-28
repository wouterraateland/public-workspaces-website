import React from "react";
import styled from "styled-components";

import SpaceOverview from "components/SpaceOverview";
import Filters from "components/Filters";

const Container = styled.div`
  margin: 0;
`;

export default () => (
  <Container>
    <Filters />
    <SpaceOverview />
  </Container>
);
