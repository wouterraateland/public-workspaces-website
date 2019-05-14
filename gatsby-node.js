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
