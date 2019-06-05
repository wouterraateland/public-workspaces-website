import styled from "styled-components";

const Pill = styled.div`
  padding: 0.5em;
  border-radius: 1em;
  box-shadow: ${props => props.theme.boxShadow.small};

  line-height: 1;

  background-color: #fff;
`;

export default Pill;
