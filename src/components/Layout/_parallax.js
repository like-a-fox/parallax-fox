import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { default as Layout } from './_layout';

const ParallaxPage = ({ children, pages = 6, ...extraProps }) => (
	<Layout>
		<Parallax {...extraProps} pages={pages}>
			{children}
		</Parallax>
	</Layout>
);

ParallaxPage.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	pages: PropTypes.number.isRequired,
};

export default memo(ParallaxPage);
