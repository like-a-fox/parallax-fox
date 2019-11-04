import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import {
	Hero,
	Projects,
	Contact,
	About,
	WaveLayerDivider,
	HeroHeaderBg,
	TopAboutDivider,
	MiddleProjectsDivider,
	FooterSection,
} from '.';

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
		<HeroHeaderBg offset={0} />
		<Projects factor={2} offset={1.3} />
		<MiddleProjectsDivider factor={1.7} speed={0.3} offset={1} />
		<MiddleProjectsDivider speed={-0.1} flipped offset={3.7} />
		<TopAboutDivider speed={0.2} offset={3} />
		<About speed={-0.1} offset={3} />
		<Contact offset={4} />
		<FooterSection offset={4} />
		<WaveLayerDivider factor={1.5} offset={3.5} />
	</ParallaxWrapper>
);
export default memo(ParallaxPage);
