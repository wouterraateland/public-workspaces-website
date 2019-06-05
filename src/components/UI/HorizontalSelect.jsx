import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const Label = styled.label`
  position: relative;

  display: block;
  max-width: 100%;
`;

const HorizontalSelect = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  white-space: nowrap;

  display: inline-block;
  max-width: 100%;
  border: 0.1em solid #0002;
  border-radius: ${props => props.theme.borderRadius};
`;

const HorizontalOption = styled.label`
  cursor: pointer;

  display: inline-block;
  padding: 0.5em;

  line-height: 1;

  &:not(:first-child) {
    border-left: 0.1em solid #0002;
  }

  & input {
    position: absolute;
    opacity: 0;
  }

  & * {
    vertical-align: bottom;
  }

  background-clip: padding-box;

  ${props =>
    props.disabled
      ? css`
          pointer-events: none;
          background-color: #0002;
          ${props.isChecked &&
            css`
              background-color: #0004;
            `}
        `
      : props.isChecked
      ? css`
          background-color: ${props => props.theme.color.primary};
          color: #fff;

          &:hover {
            background-color: ${props =>
              darken(0.05)(props.theme.color.primary)};
          }
        `
      : css`
          &:hover {
            background-color: #0001;
          }
        `}
`;

const SelectWithLabel = ({
  label,
  isMulti,
  onChange = () => {},
  value,
  options,
  ...otherProps
}) => (
  <>
    <Label block={otherProps.block}>{label}</Label>
    <HorizontalSelect {...otherProps}>
      {options.map(({ label, ...rest }) => (
        <HorizontalOption
          key={rest.value}
          disabled={rest.disabled || otherProps.disabled}
          isChecked={
            isMulti ? value.includes(rest.value) : value === rest.value
          }
        >
          <input
            type="checkbox"
            disabled={otherProps.disabled}
            checked={
              isMulti ? value.includes(rest.value) : value === rest.value
            }
            onChange={event => {
              if (isMulti) {
                onChange({
                  target: {
                    options: options.map(option => ({
                      value: option.value,
                      selected:
                        option.value === event.target.value
                          ? event.target.checked
                          : value.includes(option.value)
                    })),
                    validity: {
                      valid: true
                    },
                    validationMessage: ""
                  }
                });
              } else {
                onChange({
                  target: {
                    value: rest.value,
                    validity: {
                      valid: true
                    },
                    validationMessage: ""
                  }
                });
              }
            }}
          />
          {label}
        </HorizontalOption>
      ))}
    </HorizontalSelect>
  </>
);

export default SelectWithLabel;
