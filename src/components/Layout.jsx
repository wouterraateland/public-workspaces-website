import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SpaceControlsProvider } from "contexts/SpaceControls";

import Theme from "containers/Theme";

import Wrapper from "components/Wrapper";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

const Layout = ({ size, children, navChildren }) => {
  const data = useStaticQuery(graphql`
    query AllSpacesQuery {
      allAirtable(filter: { table: { eq: "Workspaces" } }) {
        edges {
          node {
            id
            data {
              name: Name
              city: City
              slug: Slug
              categories: Categories
              comments: Comments
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
  const allSpaces = data.allAirtable.edges.map(edge => ({
    id: edge.node.id,
    ...edge.node.data,
    images: edge.node.data.images
      ? edge.node.data.images.raw.map(raw => raw.thumbnails.large.url)
      : []
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
