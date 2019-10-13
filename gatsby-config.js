const config = require('./config/website');
const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const homeURL = `${config.siteUrl}${realPrefix}`;
const image = `${homeURL}${config.siteLogo}`;

// schema.org in JSONLD format
// https://developers.google.com/search/docs/guides/intro-structured-data
// You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

const schemaOrgWebPage = {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  url: homeURL,
  title: config.siteTitle,
  headline: config.siteHeadline,
  inLanguage: 'en',
  mainEntityOfPage: homeURL,
  description: config.siteDescription,
  name: config.siteTitle,
  ogs: {
    siteName: config.ogSiteName,
    language: config.ogLanguage,
  },
  favIcons: config.favIcons,
  author: {
    '@type': 'Person',
    name: config.author,
  },
  copyrightHolder: {
    '@type': 'Person',
    name: config.author,
  },
  copyrightYear: '2019',
  creator: {
    '@type': 'Person',
    name: config.author,
  },
  publisher: {
    '@type': 'Person',
    name: config.author,
  },
  image: {
    '@type': 'ImageObject',
    url: image,
  },
};

const themeMeta = {
  ...config.theme,
  primaryColor: config.themeColor,
  backgroundColor: config.backgroundColor,
};

// Initial breadcrumb list

const itemListElement = [
  {
    '@type': 'ListItem',
    item: {
      '@id': homeURL,
      name: 'Homepage',
    },
    position: 1,
  },
];

const breadcrumb = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  description: 'Breadcrumbs list',
  name: 'Breadcrumbs',
  itemListElement,
};

module.exports = {
  /* General Information */
  siteMetadata: {
    schemaOrgWebPage,
    breadcrumb,
    themeMeta,
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
        trackingId: config.googleAnalyticsID,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-smoothscroll`,
    /* Must be placed at the end */
    `gatsby-plugin-offline`,
  ],
};
