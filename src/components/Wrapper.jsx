import styled from "styled-components";

const Wrapper = styled.div`
  max-width: ${props => {
    switch (props.size) {
      case "large":
        return 65;
      case "medium":
        return 45;
      case "small":
        return 25;
      default:
        return 35;
    }
  }}em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin: auto;
`;
Wrapper.displayName = "Wrapper";

export default Wrapper;
