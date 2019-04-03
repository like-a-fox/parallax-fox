const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Like A Fox Portfolio - Parallax effect', // Navigation and Site Title
  siteTitleAlt: 'ParallaxFox', // Alternative Site title for SEO
  siteTitleShort: 'ParallaxFox', // short_name for manifest
  siteHeadline: 'A Possible Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://parallax-fox.now.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Like A Fox Portfolio - Parallax effect',
  author: 'LikeAFox', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@likeafox', // Twitter Username
  ogSiteName: 'likeafox', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.greyDigo,
  backgroundColor: tailwind.colors.blue,
}
