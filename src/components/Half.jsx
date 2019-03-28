import styled from "styled-components";

const Half = styled.div`
  display: inline-block;
  width: 50%;

  padding-right: 0.5em;

  & + & {
    padding-right: 0;
    padding-left: 0.5em;
  }
`;

export default Half;
