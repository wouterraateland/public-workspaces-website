import React from "react";
import styled from "styled-components";
import { mix } from "polished";

import Icons from "components/Icons";

const Container = styled.div`
  position: absolute;
  bottom: -0.5em;
  right: -0.5em;

  width: 2.5em;
  height: 2.5em;
  padding: 0.25em;
  border: 0.25em solid #fff;

  border-radius: 100%;
  box-shadow: ${props => props.theme.boxShadow.small};

  text-align: center;
  color: #fff;
  line-height: 1.5em;

  background: ${props => {
    switch (props.customerPreference) {
      case "Working preferred":
        return props.theme.color.success;
      case "Equal for working and consuming":
        return mix(0.5)(props.theme.color.warning, props.theme.color.success);
      case "Consuming preferred":
        return props.theme.color.warning;
      case "Working disallowed":
        return props.theme.color.error;
      default:
        return "#bbb";
    }
  }};
`;

const getEmoteComponent = customerPreference => {
  switch (customerPreference) {
    case "Working preferred":
      return Icons.Happy;
    case "Equal for working and consuming":
      return Icons.Smiling;
    case "Consuming preferred":
      return Icons.Neutral;
    case "Working disallowed":
      return Icons.Sad;
    default:
      return () => "?";
  }
};

const Emote = ({ customerPreference }) => {
  const Component = getEmoteComponent(customerPreference);
  return <Component size={1.5} />;
};

const CustomerPreference = ({ customerPreference }) => (
  <Container customerPreference={customerPreference}>
    <Emote customerPreference={customerPreference} />
  </Container>
);

export default CustomerPreference;
