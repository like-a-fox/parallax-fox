import React, { memo } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import config from '../../config/website'

function HeadBase({ schemaOrgWebPage, breadcrumb }) {
  const { inLanguage, title, description, image, url } = schemaOrgWebPage
  return (
    <Helmet>
      <html lang={inLanguage} />
      <link rel="dns-prefetch" href={url} />
      <title>{title}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <meta name="parallax-fox" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:alt" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

HeadBase.propTypes = {
  breadcrumb: PropTypes.object,
  schemaOrgWebPage: PropTypes.object,
}
const Head = memo(HeadBase)

export default () => {
  const data = useStaticQuery(
    graphql`
      query MetaDataQuery {
        __typename
        site {
          siteMetadata {
            breadcrumb {
              description
              name
              itemListElement {
                position
                item {
                  _id
                  name
                }
              }
            }
            itemListElement {
              position
              item {
                name
                _id
              }
            }
            schemaOrgWebPage {
              author {
                name
              }
              copyrightHolder {
                name
              }
              copyrightYear(fromNow: true)
              creator {
                name
              }
              description
              headline
              image {
                url
              }
              inLanguage
              mainEntityOfPage
              name
              title
              url
              publisher {
                name
              }
            }
          }
        }
      }
    `
  )
  return <Head {...data.site.siteMetadata} />
}
