const config = {
	pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio
	siteTitle: 'Like A Fox - Portfolio', // Navigation and Site Title
	siteTitleAlt: 'parallax-fox', // Alternative Site title for SEO
	siteTitleShort: 'parallax-fox', // short_name for manifest
	siteHeadline: 'DESIGN-AGA!N', // Headline for schema.org JSONLD
	siteUrl: 'https://likeafox.dev', // Domain of your site. No trailing slash!
	siteLanguage: 'en', // Language Tag on <html> element
	siteLogo: '/logo.png', // Used for SEO and manifest
	siteDescription: 'Like A Fox - Portfolio',
	author: '@like-a-fox<likeafox.dev@gmail.com>', // Author for schema.org JSONLD
	browserConfig: '/browserconfig.xml',
	favIcons: {
		ico: '/favicon.ico',
		micro: '/favicons/favicon-16x16.png',
		mini: '/favicons/favicon-32x32.png',
		apple: '/favicons/apple-touch-icon.png',
	},
	// siteFBAppID: '123456789', // Facebook App ID - Optional
	userTwitter: '@likeafox', // Twitter Username
	ogSiteName: 'likeafox', // Facebook Site Name
	ogLanguage: 'en_US', // Facebook Language
};
const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const homeURL = `${config.siteUrl}${realPrefix}`;
const image = `${homeURL}${config.siteLogo}`;

module.exports = {
	...config,
	googleAnalyticsId: config.googleAnalyticsId,
	manifest: {
		name: config.siteTitle,
		short_name: config.siteTitleShort,
		description: config.siteDescription,
		start_url: config.pathPrefix,
		background_color: `#161719`,
		theme_color: `#bc8999`,
		display: `minimal-ui`,
		icon: `src/images/icon.png`,
	},
	schemaOrgWebPage: {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: homeURL,
		title: config.siteTitle,
		headline: config.siteHeadline,
		inLanguage: 'en',
		mainEntityOfPage: homeURL,
		description: config.siteDescription,
		name: config.siteTitle,
		tileColor: '#bc8999',
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
		copyrightYear: '2021',
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
	},
	themeMeta: {
		...config.theme,
		primaryColor: config.themeColor,
		backgroundColor: config.backgroundColor,
	},
	breadcrumb: {
		'@context': 'http://schema.org',
		'@type': 'BreadcrumbList',
		description: 'Breadcrumbs list',
		name: 'Breadcrumbs',
		itemListElement: [
			{
				'@type': 'ListItem',
				item: {
					'@id': homeURL,
					name: 'Homepage',
				},
				position: 1,
			},
		],
	},
	tiles: [
		{
			title: 'Angular',
			subtitle: '2+ None of that AngularJS Shit',
			pathname: 'angular',
		},
		{
			title: 'Firebase',
			subtitle: `For when you're smart enough to see backends are arcaine`,
			pathname: 'firebase',
		},
		{
			title: 'GraphQL',
			subtitle: `Teaching the world to heal from Redux`,
			pathname: 'graphql',
		},
		{
			title: 'Gatsby',
			subtitle: `React meets GraphQL - What could be better?`,
			pathname: 'gatsbyjs',
		},
		{
			title: 'React',
			subtitle: `A better library that jQuery`,
			pathname: 'react',
		},
		{
			title: 'RxJS',
			subtitle: `Observe it alllllll`,
			pathname: 'rxjs',
		},
	],
	credentials: {
		apiKey: process.env.GATSBY_FIREBASE_API_KEY,
		authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
		projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
		storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.GATSBY_FIREBASE_APP_ID,
		measurementID: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
	},
};
