import React from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const Input = styled.input`
  padding: 0.5em;
  border: none;

  line-height: 1;

  &:focus {
    outline: none;
  }

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default props => (
  <Label>
    <Input {...props} />
  </Label>
);

//
// const Select = styled.select`
//   cursor: pointer;
//   -webkit-appearance: none;
//
//   width: calc(100% - 2em);
//   padding: 0.5em;
//   border: none;
//
//   line-height: 1;
//
//   &:focus {
//     outline: none;
//   }
// `;
