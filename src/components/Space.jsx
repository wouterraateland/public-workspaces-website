import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Pill } from "components/UI";
import OpenStatus from "./OpenStatus";
import CustomerPreference from "./CustomerPreference";

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
  box-shadow: ${props => props.theme.boxShadow.small};

  background: url(${props => props.backgroundImage}) no-repeat center / cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: #0006;
  }
`;

const Name = styled.h3`
  position: absolute;
  left: 0.5em;
  bottom: 50%;
  right: 0.5em;

  margin: 0;
  text-shadow: 0 0.25 0.5em #0006;

  text-align: center;
  color: #fff;

  @media (max-width: 30em) {
    transform: translate(0, 50%);
  }
`;

const City = styled.p`
  position: absolute;
  top: 50%;
  left: 0.5em;
  right: 0.5em;

  margin: 0;
  text-shadow: 0 0.25 0.5em #0006;

  text-align: center;
  color: #fff;

  @media (max-width: 30em) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  position: relative;
`;

const Label = styled.span`
  font-size: 1.5em;
  line-height: 1.5em;
`;

const TopLeft = styled.small`
  position: absolute;
  top: 0.5em;
  left: 0.5em;

  & * {
    color: #fff;
  }

  strong {
    line-height: 2.25em;
  }
`;

const TopRight = styled.small`
  position: absolute;
  top: 0.5em;
  right: 0.5em;

  & * {
    color: #fff;
  }
`;

const WiFiValue = styled.span`
  display: inline-block;
  margin-left: 0.25em;

  text-align: center;
`;

const BottomLeft = styled(Pill)`
  position: absolute;
  left: 0;
  bottom: 0;

  margin: 0.5em;

  font-size: smaller;
`;

const Space = ({ space }) => (
  <Container>
    <StyledLink to={`/${space.slug}`}>
      <Header backgroundImage={space.images[0]}>
        <TopLeft>
          <Label role="img" aria-labelledby="Coffee Price">
            {/* eslint-disable-next-line */}
            ☕️
          </Label>{" "}
          <strong>
            {space.coffeePrice
              ? `€${space.coffeePrice.toFixed(2).replace(".", ",")}`
              : "?"}
          </strong>
        </TopLeft>
        <TopRight>
          <Label role="img" aria-labelledby="WiFi Speed">
            {/* eslint-disable-next-line */}
            📶
          </Label>
          <WiFiValue>
            <strong>{space.wifiSpeed ? space.wifiSpeed : "?"}</strong>
            <br />
            <small>Mbps</small>
          </WiFiValue>
        </TopRight>
        <Name>{space.name}</Name>
        <City>{space.city}</City>
        {space.openingHours && (
          <BottomLeft>
            <OpenStatus openingHours={space.openingHours} />
          </BottomLeft>
        )}
      </Header>
      <CustomerPreference customerPreference={space.customerPreference} />
    </StyledLink>
  </Container>
);

export default Space;
