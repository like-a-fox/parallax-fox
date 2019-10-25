const {
  manifest,
  googleAnalyticsId,
  firebase,
  ...metaData
} = require('./config');
require('dotenv').config();
firebase();
// eslint-disable-next-line no-console
module.exports = {
  /* General Information */
  siteMetadata: {
    ...metaData,
  },
  /* Plugins */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/backgrounds/`,
        name: `tile_backgrounds`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsId,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...manifest,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
  ],
};
