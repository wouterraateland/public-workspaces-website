import React, { Fragment, useRef } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";

import useClickOutside from "hooks/useClickOutside";

import SEO from "components/SEO";
import Slider from "components/Slider";
import CustomerPreference from "components/CustomerPreference";
import OpeningHours from "components/OpeningHours";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #0009;
`;

const Container = styled.div`
  overflow-y: auto;

  width: calc(100vw - 2em);
  max-width: 35em;
  max-height: calc(100vh - 5em);

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.large};

  background-color: #fff;
`;

const Body = styled.div`
  padding: 1em;
`;

const CloseButton = styled.button`
  padding: 0.5em;
  margin-top: 1em;

  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow.medium};

  background-color: #fff;
`;

const Title = styled.h2`
  margin: 0;
`;

const Tagline = styled.div`
  margin: 0.5em 0 1em -0.25em;
`;

const StyledCustomerPreference = styled(CustomerPreference)`
  position: static;
  display: inline-block;
  vertical-align: middle;
`;

const getPreferenceMessage = workerAppreciation => {
  switch (workerAppreciation) {
    case 0:
      return "Does not allow guests to work there";
    case 2:
      return "Does not prefer guests to work there";
    case 3:
      return "Is okay with guests working there";
    case 4:
      return "Appreciates guests working there";
    default:
      return "Unknown";
  }
};

const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  & td {
    padding: 0.5em;
    border: 2px solid #ddd;
  }
`;

const Emoji = styled.span.attrs(() => ({
  role: "img",
  "aria-labelledby": "jsx-a11y/accessible-emoji"
}))`
  color: #000;
`;

const t = msg => {
  switch (msg) {
    case "Ja":
      return "Yes";
    case "Ja, gratis aan de bar":
      return "Yes (at the bar)";
    case "Ja, gratis bij de wc":
      return "Yes (at the toilets)";
    case "Ja, gratis als gasten ook wat anders bestellen":
      return "With consumption";
    default:
      return msg;
  }
};

const DetailModal = ({ space }) => {
  const ref = useRef(null);
  useClickOutside({ ref, onClickOutside: () => navigate("/") });

  const preferenceMessage = getPreferenceMessage(space.workerAppreciation);

  return (
    <Background>
      <SEO title={`${space.name}, ${space.city} | Public Workspaces`} />
      <Container ref={ref}>
        <Slider images={space.images} />
        <Body>
          <Title>
            {space.name} - {space.city}
          </Title>
          <Tagline>
            <StyledCustomerPreference {...space} /> {preferenceMessage}
          </Tagline>
          <Table>
            <tbody>
              <tr>
                <td>
                  {/*eslint-disable-next-line*/}
                  <Emoji>📶</Emoji> WiFi Speed
                </td>
                <td>{space.wifiSpeed}Mbps</td>
              </tr>
              <tr>
                <td>
                  {/*eslint-disable-next-line*/}
                  <Emoji>🚰</Emoji> Free Water
                </td>
                <td>
                  {space.freeWaterAvailability !== null
                    ? space.freeWaterAvailability.map((msg, i) => (
                        <Fragment key={i}>
                          {i !== 0 && <br />}
                          <span>{t(msg)}</span>
                        </Fragment>
                      ))
                    : "No"}
                </td>
              </tr>
              <tr>
                <td>
                  {/*eslint-disable-next-line*/}
                  <Emoji>🚽</Emoji> Free Toilet
                </td>
                <td>
                  {space.freeToiletAvailability === "Ja"
                    ? "Yes"
                    : space.freeToiletAvailability ===
                      "Ja, als ze een consumptie bestellen"
                    ? "With consumption"
                    : "No"}
                </td>
              </tr>
              <tr>
                <td>
                  {/*eslint-disable-next-line*/}
                  <Emoji>🥪</Emoji> Bring your own Food
                </td>
                <td>
                  {space.bringYourOwnFood === "Ja"
                    ? "Yes"
                    : space.bringYourOwnFood ===
                      "Ja, als ze wat te drinken bestellen"
                    ? "With consumption"
                    : "No"}
                </td>
              </tr>
              <tr>
                <td>
                  {/*eslint-disable-next-line*/}
                  <Emoji>🤫</Emoji> Private Spaces
                </td>
                <td>
                  {space.privateSpaces ? space.privateSpaces.length : "None"}
                </td>
              </tr>
            </tbody>
          </Table>
          <OpeningHours openingHours={space.openingHours} />
        </Body>
      </Container>
      <CloseButton>&times; Close</CloseButton>
    </Background>
  );
};

export default DetailModal;
