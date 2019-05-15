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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #0004;
  }
`;

const Name = styled.h3`
  position: absolute;
  left: 0;
  bottom: 50%;
  right: 0;

  margin: 0;
  text-shadow: 0 0.25 0.5em #0006;

  text-align: center;
  color: #fff;
`;

const City = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;

  margin: 0;
  text-shadow: 0 0.25 0.5em #0006;

  text-align: center;
  color: #fff;
`;

const StyledLink = styled(Link)`
  display: block;
  position: relative;
`;

const OpenStatus = styled.div`
  position: absolute;
  bottom: -0.25em;
  right: -0.25em;

  width: 1em;
  height: 1em;

  border-radius: 100%;
  box-shadow: 0 0 0 0.25em #fff;

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

const Space = ({ space }) => (
  <Container>
    <StyledLink to={`/${space.slug}`}>
      <Header backgroundImage={space.images[0]}>
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
        <Name>{space.name}</Name>
        <City>{space.city}</City>
      </Header>
      <OpenStatus isOpen={space.isOpen} />
    </StyledLink>
  </Container>
);

export default Space;
