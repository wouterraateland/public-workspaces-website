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
  padding: 1.5em;

  line-height: 1;

  background-color: #0004;
  color: #fff;
`;

const TopLeft = styled(Corner)`
  top: -1em;
  left: -1em;

  border-bottom-right-radius: 100%;
`;

const TopRight = styled(Corner)`
  top: -1em;
  right: -1em;

  border-bottom-left-radius: 100%;
`;

const BottomRight = styled(Corner)`
  bottom: -1em;
  right: -1em;

  border-top-left-radius: 100%;
`;

const BottomLeft = styled(Corner)`
  bottom: -1em;
  left: -1em;

  border-top-right-radius: 100%;
`;

const Space = ({ space }) => (
  <Container>
    <StyledLink to={`/${space.slug}`}>
      <Header backgroundImage={space.images[0]}>
        <TopLeft>
          <span role="img" aria-labelledby="Coffee Price">
            ☕️
          </span>{" "}
          €{space.coffeePrice}
        </TopLeft>
        <TopRight>
          <span role="img" aria-labelledby="WiFi Speed">
            📶
          </span>{" "}
          {space.wifiSpeed}Mbps
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
