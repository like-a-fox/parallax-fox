import {graphql,useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React,{memo} from 'react';
import Helmet from 'react-helmet';
import {colors} from '../../tailwind';

function HeadBase({ schemaOrgWebPage, breadcrumb }) {
	const { inLanguage, title, description, image, url, ogs } = schemaOrgWebPage;
	return (
		<Helmet>
			<html lang={inLanguage} />
			<link rel='dns-prefetch' href={url} />
			<title>{title}</title>
			<link rel='apple-touch-icon' href='/favicons/apple-touch-icon.png' />
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicons/favicon-16x16.png'
			/>
			<meta name='parallax-fox' content={description} />
			<link rel='shortcut icon' href='/favicon.ico' />
			<meta name='msapplication-TileColor' content={colors.burgDee} />
			<meta name='msapplication-config' content='/browserconfig.xml' />
			<meta name='description' content={description} />
			<meta name='image' content={image} />
			<meta property='og:locale' content={ogs.language} />
			<meta property='og:site_name' content={ogs.siteName} />
			<meta property='og:title' content={title} />
			<meta property='og:type' content='website' />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image.url} />
			<meta property='og:image:alt' content={description} />
			<script type='application/ld+json'>
				{JSON.stringify(schemaOrgWebPage)}
			</script>
			<script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
		</Helmet>
	);
}

HeadBase.propTypes = {
	breadcrumb: PropTypes.object,
	schemaOrgWebPage: PropTypes.object,
	themeMeta: PropTypes.object,
};
const Head = memo(HeadBase);

export default function SEO() {
	const data = useStaticQuery(
		graphql`
			query MetaDataQuery {
				__typename
				site {
					siteMetadata {
						breadcrumb {
							description
							name
							_context
							_type
						}
						schemaOrgWebPage {
							author {
								name
								_type
							}
							copyrightHolder {
								name
								_type
							}
							copyrightYear(fromNow: true)
							creator {
								name
								_type
							}
							description
							headline
							image {
								url
								_type
							}
							inLanguage
							mainEntityOfPage
							name
							title
							url
							publisher {
								name
								_type
							}
							_context
							_type
							ogs {
								language
								siteName
							}
						}
					}
				}
			}
		`
	);
	return <Head {...data.site.siteMetadata} />;
}
