const path = require("path");
const fetch = require("node-fetch");
const queryString = require("query-string");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

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
  createContentDigest,
  store,
  cache
}) => {
  const airtableNodes = getNodesByType("Airtable");
  const workspaces = airtableNodes.filter(
    ({ table }) => table === "Workspaces"
  );

  const { createNode, createNodeField } = actions;

  const processPlaceDetails = (placeId, result) => {
    const data = {
      placeId,
      address: result.formatted_address,
      url: result.url,
      website: result.website,
      openingHours:
        result.opening_hours && result.opening_hours.periods
          ? result.opening_hours.periods
          : null
    };
    const nodeId = createNodeId(`place-details-${placeId}`);
    const nodeContent = JSON.stringify(data);
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `PlaceDetails`,
        content: nodeContent,
        contentDigest: createContentDigest(data)
      }
    });
    return nodeData;
  };

  const createPlaceDetailNodesForPlace = (placeid, result) => {
    if (result) {
      const nodeData = processPlaceDetails(placeid, result);
      createNode(nodeData);
    } else {
      console.warn(`No place details for ${placeid}`);
    }
  };

  const createPhotoNodeForPlace = async (placeId, photo) => {
    const apiOptions = queryString.stringify({
      key: process.env.GOOGLE_API_KEY,
      maxwidth: 640,
      photoreference: photo.photo_reference
    });

    const url = `https://maps.googleapis.com/maps/api/place/photo?${apiOptions}`;

    try {
      const fileNode = await createRemoteFileNode({
        url,
        cache,
        store,
        createNode,
        createNodeId
      });

      await createNodeField({
        node: fileNode,
        name: "placeId",
        value: placeId
      });

      return fileNode;
    } catch (error) {
      console.warn("error creating node", error);
    }
  };

  const createPhotoNodesForPlace = (placeid, photos = []) =>
    Promise.all(photos.map(photo => createPhotoNodeForPlace(placeid, photo)));

  const createNodesForPlace = placeid => {
    const apiOptions = queryString.stringify({
      key: process.env.GOOGLE_API_KEY,
      fields: "opening_hours,photos,formatted_address,url,website",
      placeid
    });

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?${apiOptions}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(async data => {
        if (data && data.result) {
          createPlaceDetailNodesForPlace(placeid, data.result);
          await createPhotoNodesForPlace(placeid, data.result.photos);
        } else {
          console.warn(`No data for ${placeid}`);
        }
      });
  };

  return Promise.all(
    workspaces
      .filter(({ data }) => data["Google_ID"])
      .map(({ data }) => createNodesForPlace(data["Google_ID"]))
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
