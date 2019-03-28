require("dotenv").config();

const googleSpreadsheetCredentials = {
  type: "service_account",
  project_id: "reference-hold-235811",
  client_email: "google-sheets@reference-hold-235811.iam.gserviceaccount.com",
  client_id: "117739090738885782487",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/google-sheets%40reference-hold-235811.iam.gserviceaccount.com",
  private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY
};

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
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
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        worksheetTitle: process.env.GOOGLE_SHEETS_WORKSHEET_TITLE,
        credentials: googleSpreadsheetCredentials
      }
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
};
