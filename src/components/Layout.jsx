import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SpaceControlsProvider } from "contexts/SpaceControls";

import Theme from "containers/Theme";

import { Wrapper } from "components/UI";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

const isNothing = v => v === undefined || v === null;
const maybe = (ifNothing, ifJust) => v =>
  isNothing(v) ? ifNothing(v) : ifJust(v);

const Layout = ({ size, children, navChildren }) => {
  const data = useStaticQuery(graphql`
    query AllSpacesQuery {
      allFile(filter: { fields: { placeId: { ne: null } } }) {
        edges {
          node {
            publicURL
            fields {
              placeId
            }
          }
        }
      }
      allOpeningHours {
        edges {
          node {
            id
            placeId
            periods {
              open {
                day
                time
              }
              close {
                day
                time
              }
            }
          }
        }
      }
      allAirtable(filter: { table: { eq: "Workspaces" } }) {
        edges {
          node {
            id
            data {
              name: Name
              city: City
              slug: Slug
              placeId: Google_ID
              categories: Categories
              comments: Public_Comments
              images: Images {
                raw {
                  thumbnails {
                    large {
                      url
                      width
                      height
                    }
                  }
                }
              }

              customerPreference: Customer_Preference
              coffeePrice: Coffee_Price

              wifiAvailability: WiFi_Availability
              wifiSpeed: WiFi_Speed

              electricityAvailability: Electricity_Availability
              freeWaterAvailability: Free_Water_Availability
              freeToiletAvailability: Free_Toilet_Availability
              bringYourOwnFood: Bring_Your_Own_Food

              privateSpaces: Private_Spaces {
                data {
                  name: Name
                  comments: Comments

                  facilities: Facilities
                  suitableWorkTypes: Suitable_Work_Types
                  price: Price
                  period: Period
                  persons: Persons
                }
              }
            }
          }
        }
      }
    }
  `);
  const allSpaces = data.allAirtable.edges.map(({ node: spaceNode }) => ({
    id: spaceNode.id,
    ...spaceNode.data,
    openingHours: maybe(() => null, edge => edge.node.periods)(
      data.allOpeningHours.edges.find(
        ({ node: openingHoursNode }) =>
          openingHoursNode.placeId === spaceNode.data.placeId
      )
    ),
    images: (spaceNode.data.images
      ? spaceNode.data.images.raw.map(raw => raw.thumbnails.large.url)
      : []
    ).concat(
      data.allFile.edges
        .filter(
          ({ node: fileNode }) =>
            fileNode.fields.placeId === spaceNode.data.placeId
        )
        .map(({ node: fileNode }) => fileNode.publicURL)
    )
  }));

  return (
    <SpaceControlsProvider allSpaces={allSpaces}>
      <Theme>
        <Page>
          <Nav siteTitle="Public Workspaces">{navChildren}</Nav>
          <Main>
            <Wrapper size={size}>{children}</Wrapper>
          </Main>
          <Footer />
        </Page>
      </Theme>
    </SpaceControlsProvider>
  );
};
export default Layout;
