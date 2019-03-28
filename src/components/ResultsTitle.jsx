import React from "react";
import styled from "styled-components";

import OrderControls from "components/SpaceControls/OrderControl";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.1em solid #0001;
  margin: 0.5em 0;
`;

const Title = styled.h2`
  margin: 0.25em 0;
`;

const ResultsTitle = ({ children }) => (
  <Container>
    <Title>{children}</Title>
    <OrderControls />
  </Container>
);

export default ResultsTitle;
