/* eslint-disable filenames/match-regex */

const {
	manifest,
	credentials,
	googleAnalyticsId,
	...siteMetadata
} = require('./config');

require('dotenv').config();

module.exports = {
	/* General Information */
	siteMetadata,
	/* Plugins */
	plugins: [
		`gatsby-plugin-tailwindcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-preact`,
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
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true,
				develop: true,
				tailwind: true,
			},
		},
		{
			resolve: 'gatsby-plugin-firebase',
			options: {
				credentials,
			},
		},
		/* Must be placed at the end */
		// `gatsby-plugin-offline`,
		`gatsby-plugin-loadable-components-ssr`,
	],
};
