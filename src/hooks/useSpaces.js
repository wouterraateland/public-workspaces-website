import { useStaticQuery, graphql } from "gatsby";

const isNothing = v => v === undefined || v === null;
const maybe = (ifNothing, ifJust) => v =>
  isNothing(v) ? ifNothing(v) : ifJust(v);

const toWorkerAppreciation = preference => {
  switch (preference) {
    case "Working preferred":
      return 4;
    case "Equal for working and consuming":
      return 3;
    case "Consuming preferred":
      return 2;
    case "Working disallowed":
      return 0;
    default:
      return 1;
  }
};

const useSpaces = () => {
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
      allPlaceDetails {
        edges {
          node {
            id
            placeId
            address
            url
            website
            openingHours {
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
    ...maybe(() => ({}), edge => edge.node)(
      data.allPlaceDetails.edges.find(
        ({ node: placeDetailsNode }) =>
          placeDetailsNode.placeId === spaceNode.data.placeId
      )
    ),
    ...spaceNode.data,
    id: spaceNode.id,
    workerAppreciation: toWorkerAppreciation(spaceNode.data.customerPreference),
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

  return {
    allSpaces
  };
};

export default useSpaces;
