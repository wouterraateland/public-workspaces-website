import styled from "styled-components";

const Icon = styled.svg.attrs(({ size }) => ({
  style: {
    height: `${size}em`
  }
}))`
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

Icon.defaultProps = {
  size: 1
};

export default Icon;
