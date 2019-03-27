import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  width: 13em;
  padding: 0.5em;
`;

const Header = styled.div`
  width: 12em;
  height: 8em;
  border-radius: ${props => props.theme.borderRadius};

  background: #0004 url(${props => props.backgroundImage}) no-repeat center /
    cover;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 0.5em;
`;

const Name = styled.h3`
  max-width: calc(100% - 1em);
  margin: 0 0.5em 0 0;
`;

const OpenStatus = styled.div`
  width: 0.5em;
  height: 0.5em;

  border-radius: 100%;

  background: ${props =>
    props.isOpen ? props.theme.color.success : props.theme.color.error};
`;

const Space = ({ space }) => (
  <Container>
    <Link to={`${space.city}/${space.slug}`}>
      <Header backgroundImage={space.images[0]} />
    </Link>
    <Meta>
      <Name>{space.name}</Name>
      <OpenStatus isOpen={space.isOpen} />
    </Meta>
  </Container>
);

export default Space;
