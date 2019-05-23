import styled from "styled-components";

const Message = styled.div`
  display: inline-block;
  padding: 1em;
  border-radius: ${props => props.theme.borderRadius};

  background-color: #0001;
`;

export default Message;
