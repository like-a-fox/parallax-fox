import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { Hero, Projects, Contact, About } from './';

const ParallaxWrapperBase = ({ children, pages }) => (
	<Parallax pages={pages}>{children}</Parallax>
);

ParallaxWrapperBase.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	pages: PropTypes.number.isRequired,
};

const ParallaxWrapper = memo(ParallaxWrapperBase);

const ParallaxPage = () => (
	<ParallaxWrapper pages={5}>
		<Hero offset={0} />
		<Projects />
		<About />
		<Contact offset={4} />
	</ParallaxWrapper>
);
export default memo(ParallaxPage);
