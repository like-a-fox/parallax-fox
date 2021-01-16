import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { useSEO } from '../graphql';
import { GlobalStyle } from '../styles';
import 'typeface-cantata-one';
import 'typeface-open-sans';

const Layout = (props) => {
	const { children } = props;
	const {
		webPageSchema,
		breadcrumbString,
		imageUrl,
		tileColor,
		inLanguage,
		url,
		title,
		description,
		language,
		siteName,
	} = useSEO();
	return (
		<>
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
				<meta name='msapplication-TileColor' content={tileColor} />
				<meta name='msapplication-config' content='/browserconfig.xml' />
				<meta name='description' content={description} />
				<meta name='image' content={imageUrl} />
				<meta property='og:locale' content={language} />
				<meta property='og:site_name' content={siteName} />
				<meta property='og:title' content={title} />
				<meta property='og:type' content='website' />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={imageUrl} />
				<meta property='og:image:alt' content={description} />
				<script type='application/ld+json'>{webPageSchema}</script>
				<script type='application/ld+json'>{breadcrumbString}</script>
			</Helmet>
			<GlobalStyle />
			{children}
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default Layout;
