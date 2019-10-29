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
		<Projects offset={1} />
		<MiddleProjectsDivider offset={1.1} />
		<TopAboutDivider offset={2.9} />
		<About offset={2.9} />
		<Contact offset={3.9} />
		<FooterSection offset={4} />
		<WaveLayerDivider offset={4} />
	</ParallaxWrapper>
);
export default memo(ParallaxPage);
