/* eslint-disable filenames/match-regex */

const { manifest, googleAnalyticsId, ...metaData } = require('./config');
require('dotenv').config();

module.exports = {
	/* General Information */
	siteMetadata: {
		...metaData,
	},
	/* Plugins */
	plugins: [
		`gatsby-plugin-tailwindcss`,
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
				credentials: require('./config/env').FIREBASE_CONFIG,
			},
		},
		/* Must be placed at the end */
		// `gatsby-plugin-offline`,
	],
};
