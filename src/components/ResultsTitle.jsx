import React from "react";
import styled from "styled-components";

import OrderControls from "components/SpaceControls/OrderControl";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5em;
`;

const Title = styled.strong``;

const ResultsTitle = ({ children }) => (
  <Container>
    <Title>{children}</Title>
    <OrderControls />
  </Container>
);

export default ResultsTitle;
