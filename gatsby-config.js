const { manifest, googleAnalyticsId, ...metaData } = require('./config');
require('dotenv').config();
const firebase = require('firebase/app');
firebase.initializeApp({
	apiKey: process.env.GATSBY_FIREBASE_API_KEY,
	authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
	projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
	storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.GATSBY_FIREBASE_APP_ID,
	measurementID: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
});
module.exports = {
	/* General Information */
	siteMetadata: {
		...metaData,
		firebase
	},
	/* Plugins */
	plugins: [
		`gatsby-plugin-tailwindcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-firebase`,
			options: {
				features: {
					auth: false,
					database: true,
					firestore: false,
					storage: false,
					messaging: false,
					functions: true,
				},
			}
		},
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
			}
		},
		/* Must be placed at the end */
		// `gatsby-plugin-offline`,
	],
};
