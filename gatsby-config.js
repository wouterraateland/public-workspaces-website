require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Public Workspaces`,
    description: `Find public workspaces near to you in a breeze.`,
    author: `@wouterraateland, @DSwaab`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Public Workspaces",
        short_name: "Public Workspaces",
        icon: "src/images/android-chrome-512x512.png",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "https://publicworkspaces.com",
        display: "standalone",
        include_favicon: true
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: `${__dirname}/src`,
        components: `${__dirname}/src/components`,
        containers: `${__dirname}/src/containers`,
        contexts: `${__dirname}/src/contexts`,
        data: `${__dirname}/src/data`,
        hooks: `${__dirname}/src/hooks`,
        images: `${__dirname}/src/images`,
        pages: `${__dirname}/src/pages`,
        utils: `${__dirname}/src/utils`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appc4kmOlCItPKkiU`,
            tableName: `Workspaces`,
            mapping: {
              Images: "[fileNode]"
            },
            tableLinks: ["Private_Spaces", "Contacts"]
          },
          {
            baseId: `appc4kmOlCItPKkiU`,
            tableName: `Private Spaces`,
            tableLinks: ["Workspace"]
          },
          {
            baseId: `appc4kmOlCItPKkiU`,
            tableName: `Contacts`,
            tableLinks: ["Workspaces"]
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
};
