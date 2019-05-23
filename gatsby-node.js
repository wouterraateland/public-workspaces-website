const path = require("path");
const fetch = require("node-fetch");
const queryString = require("query-string");

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }
};

exports.sourceNodes = ({
  getNodesByType,
  actions,
  createNodeId,
  createContentDigest
}) => {
  const airtableNodes = getNodesByType("Airtable");
  const workspaces = airtableNodes.filter(
    ({ table }) => table === "Workspaces"
  );

  const { createNode } = actions;

  const processOpeningHours = (placeId, periods) => {
    const data = { placeId, periods };
    const nodeId = createNodeId(`opening-hours-${placeId}`);
    const nodeContent = JSON.stringify(data);
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `OpeningHours`,
        content: nodeContent,
        contentDigest: createContentDigest(data)
      }
    });
    return nodeData;
  };

  const createOpeningHoursNode = placeid => {
    const apiOptions = queryString.stringify({
      key: process.env.GOOGLE_API_KEY,
      fields: "opening_hours",
      placeid
    });

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?${apiOptions}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (
          data &&
          data.result &&
          data.result.opening_hours &&
          data.result.opening_hours.periods
        ) {
          const nodeData = processOpeningHours(
            placeid,
            data.result.opening_hours.periods
          );
          createNode(nodeData);
        } else {
          console.warn(`No opening times for ${placeid}`);
        }
      });
  };

  return Promise.all(
    workspaces
      .filter(({ data }) => data["Google_ID"])
      .map(({ data }) => createOpeningHoursNode(data["Google_ID"]))
  );
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allAirtable(filter: { table: { eq: "Workspaces" } }) {
        edges {
          node {
            data {
              slug: Slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allAirtable.edges.forEach(({ node: { data } }) => {
      createPage({
        path: data.slug,
        component: path.resolve(`./src/templates/space-details.jsx`),
        context: {
          slug: data.slug
        }
      });
    });
  });
};
