import React from "react";
import styled from "styled-components";

import useSpaceControls from "hooks/useSpaceControls";
import useFilterVisibility from "hooks/useFilterVisibility";

import Icons from "components/Icons";
import { Button, HorizontalSelect, Wrapper } from "components/UI";

const Container = styled.div`
  background: #fff;
  color: ${props => props.theme.color.text};

  @media (max-width: 30em) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const StyledWrapper = styled(Wrapper)`
  padding: 2em 0.5em;
`;

const CloseButton = styled(Button)`
  display: none;

  @media (max-width: 30em) {
    display: block;
  }
`;

const Field = styled.div`
  display: inline-block;
  margin: 0.5em;
`;

const Emoji = styled.span`
  color: #000;
`;

const allFilters = [
  {
    name: "appreciation",
    emoji: "👨‍💻",
    label: "Worker Appreciation",
    options: [
      {
        value: "no",
        label: (
          <>
            Not allowed (<Icons.Sad />)
          </>
        ),
        predicate: ({ workerAppreciation }) => workerAppreciation === 0
      },
      {
        value: "neutral",
        label: (
          <>
            Not prefered (<Icons.Neutral />)
          </>
        ),
        predicate: ({ workerAppreciation }) => workerAppreciation === 2
      },
      {
        value: "okay",
        label: (
          <>
            Okay (<Icons.Smiling />)
          </>
        ),
        predicate: ({ workerAppreciation }) => workerAppreciation === 3
      },
      {
        value: "super",
        label: (
          <>
            Appreciated (<Icons.Happy />)
          </>
        ),
        predicate: ({ workerAppreciation }) => workerAppreciation === 4
      }
    ]
  },
  {
    name: "wifi",
    emoji: "📶",
    label: "WiFi Speed",
    options: [
      {
        value: "okay",
        label: "> 5Mbps",
        predicate: ({ wifiSpeed }) => wifiSpeed > 5
      },
      {
        value: "fast",
        label: "> 10Mbps",
        predicate: ({ wifiSpeed }) => wifiSpeed > 10
      },
      {
        value: "blazing",
        label: "> 20Mbps",
        predicate: ({ wifiSpeed }) => wifiSpeed > 20
      }
    ]
  },
  {
    name: "freeWaterAvailability",
    emoji: "🚰",
    label: "Free Water",
    options: [
      {
        value: "withConsumption",
        label: "With consumption",
        predicate: ({ freeWaterAvailability }) =>
          freeWaterAvailability !== null &&
          freeWaterAvailability.includes(
            "Ja, gratis als gasten ook wat anders bestellen"
          )
      },
      {
        value: "always",
        label: "Always",
        predicate: ({ freeWaterAvailability }) =>
          freeWaterAvailability !== null &&
          (freeWaterAvailability.includes("Ja, gratis aan de bar") ||
            freeWaterAvailability.includes("Ja, gratis bij de wc"))
      }
    ]
  },
  {
    name: "freeToiletAvailability",
    emoji: "🚽",
    label: "Free Toilet",
    options: [
      {
        value: "withConsumption",
        label: "With consumption",
        predicate: ({ freeToiletAvailability }) =>
          freeToiletAvailability === "Ja, als ze een consumptie bestellen"
      },
      {
        value: "always",
        label: "Always",
        predicate: ({ freeToiletAvailability }) =>
          freeToiletAvailability === "Ja"
      }
    ]
  },
  {
    name: "bringYourOwnFood",
    emoji: "🥪",
    label: "Bring your own Food",
    options: [
      {
        value: "withConsumption",
        label: "With consumption",
        predicate: ({ bringYourOwnFood }) =>
          bringYourOwnFood === "Ja, als ze wat te drinken bestellen"
      },
      {
        value: "always",
        label: "Always",
        predicate: ({ bringYourOwnFood }) => bringYourOwnFood === "Ja"
      }
    ]
  }
];

const FilterOptions = () => {
  const { filters, setFilters } = useSpaceControls();
  const { isVisible, hide } = useFilterVisibility();

  const toggleFilter = (name, value) => {
    const filterIndex = filters.findIndex(filter => filter.name === name);
    const f = allFilters.find(filter => filter.name === name);
    const o = f.options.find(option => option.value === value);

    const newFilter = {
      name,
      value,
      predicate: o.predicate,
      label: f.emoji,
      valueLabel: o.label
    };

    if (filterIndex === -1) {
      setFilters([...filters, newFilter]);
    } else {
      const filter = filters[filterIndex];
      if (filter.value === value) {
        setFilters(filters.filter((_, i) => i !== filterIndex));
      } else {
        setFilters([...filters.filter((_, i) => i !== filterIndex), newFilter]);
      }
    }
  };

  return isVisible ? (
    <Container>
      <StyledWrapper size="large">
        {allFilters.map(filter => (
          <Field key={filter.name}>
            <HorizontalSelect
              {...filter}
              label={
                <>
                  <Emoji>{filter.emoji}</Emoji> {filter.label}
                </>
              }
              value={
                (
                  filters.find(({ name }) => name === filter.name) || {
                    value: null
                  }
                ).value
              }
              onChange={event => toggleFilter(filter.name, event.target.value)}
            />
          </Field>
        ))}
        <CloseButton
          color="primary"
          importance="primary"
          size="large"
          onClick={hide}
        >
          Apply Filters
        </CloseButton>
      </StyledWrapper>
    </Container>
  ) : null;
};

export default FilterOptions;
