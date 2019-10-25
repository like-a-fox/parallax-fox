const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  theme: tailwind,
  siteTitle: 'Like A Fox - Parallax effect', // Navigation and Site Title
  siteTitleAlt: 'parallax-fox', // Alternative Site title for SEO
  siteTitleShort: 'parallax-fox', // short_name for manifest
  siteHeadline: 'DESIGN-AGA!N', // Headline for schema.org JSONLD
  siteUrl: 'https://parallax-fox.now.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Like A Fox - Parallax effect',
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

  // Manifest and Progress color
  themeColor: tailwind.colors.greyDigo,
  backgroundColor: tailwind.colors.blue,
};
