import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  width: 25%;
  padding: 0.5em;

  @media (max-width: 60em) {
    width: 33.333%;
  }

  @media (max-width: 40em) {
    width: 50%;
  }
`;

const Header = styled.div`
  position: relative;

  overflow: hidden;

  padding-top: 67%;
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

const StyledLink = styled(Link)`
  display: block;
`;

const OpenStatus = styled.div`
  width: 0.5em;
  height: 0.5em;

  border-radius: 100%;

  background: ${props =>
    props.isOpen ? props.theme.color.success : props.theme.color.error};
`;

const Corner = styled.small`
  position: absolute;
  padding: 0.5em;
  margin: 1em;
  border-radius: 1em;
  box-shadow: 0 0.25em 0.75em -0.25em #0006;

  line-height: 1;

  background-color: #fff;
`;

const TopLeft = styled(Corner)`
  top: 0;
  left: 0;
`;

const TopRight = styled(Corner)`
  top: 0;
  right: 0;
`;

const BottomRight = styled(Corner)`
  bottom: 0;
  right: 0;
`;

const BottomLeft = styled(Corner)`
  bottom: 0;
  left: 0;
`;

const Space = ({ space }) => (
  <Container>
    <StyledLink to={`/${space.slug}`}>
      <Header backgroundImage={space.images}>
        <TopLeft>
          <span role="img" aria-labelledby="Coffee Price">
            ☕️
          </span>{" "}
          {space.coffeePrice ? `€${space.coffeePrice}` : "?"}
        </TopLeft>
        <TopRight>
          <span role="img" aria-labelledby="WiFi Speed">
            📶
          </span>{" "}
          {space.wifiSpeed ? space.wifiSpeed : "?"}Mbps
        </TopRight>
        <BottomRight />
        <BottomLeft />
      </Header>
    </StyledLink>
    <Meta>
      <Name>{space.name}</Name>
      <OpenStatus isOpen={space.isOpen} />
    </Meta>
  </Container>
);

export default Space;
