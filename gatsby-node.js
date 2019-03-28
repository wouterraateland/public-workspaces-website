const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allCompaniesJson {
        edges {
          node {
            id
            name
            slug
            city
            isOpen
            wifiSpeed
            images
          }
        }
      }
    }
  `).then(result => {
    result.data.allCompaniesJson.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/space-details.jsx`),
        context: {
          slug: node.slug
        }
      });
    });
  });
};
