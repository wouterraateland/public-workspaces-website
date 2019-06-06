import React, { useEffect } from "react";
import styled from "styled-components";
import { darken } from "polished";

import useSpaceControls from "hooks/useSpaceControls";

const orderKeys = [
  { label: "Work Appreciation", value: "workerAppreciation" },
  { label: "Alphabetical", value: "name" },
  { label: "WiFi Speed", value: "wifiSpeed" },
  { label: "Coffee Price", value: "coffeePrice" }
];

const SelectContainer = styled.label`
  cursor: pointer;

  display: inline-block;

  border: 0.1em solid #0002;
  border-radius: ${props => props.theme.borderRadius} 0 0
    ${props => props.theme.borderRadius};

  &:hover {
    border-color: #0004;
  }

  &:focus-within {
    border-color: ${props => props.theme.color.primary};
  }
`;

const Select = styled.select`
  cursor: pointer;
  -webkit-appearance: none;

  padding: 0.5em;
  border: none;

  line-height: 1;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;

  width: 2.2em;
  padding: 0.6em;
  border: none;
  border-radius: 0 0.25em 0.25em 0;

  line-height: 1;

  background-color: ${props => props.theme.color.primary};
  color: #fff;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.color.primary)};
  }

  &:focus {
    outline: none;
  }
`;

const OrderIcon = styled.div`
  position: relative;

  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 0.5em;

  background: linear-gradient(currentColor, currentColor) no-repeat left 0 top 0 /
      1em 0.2em,
    linear-gradient(currentColor, currentColor) no-repeat left 0 top 0.4em /
      0.7em 0.2em,
    linear-gradient(currentColor, currentColor) no-repeat left 0 top 0.8em /
      0.4em 0.2em;
`;

const OrderControl = () => {
  const { order, setOrder } = useSpaceControls();

  useEffect(() => {
    setOrder({ key: "workerAppreciation", order: -1 });
  }, []);

  return (
    <div>
      <SelectContainer>
        <OrderIcon />
        <Select
          value={order.key}
          onChange={({ target }) =>
            setOrder(order => ({ ...order, key: target.value }))
          }
        >
          {orderKeys.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <Button
        onClick={() => setOrder(order => ({ ...order, order: -order.order }))}
      >
        {order.order === 1 ? "↑" : "↓"}
      </Button>
    </div>
  );
};

export default OrderControl;
