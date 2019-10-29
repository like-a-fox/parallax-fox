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
	<ParallaxWrapper pages={4.5}>
		<Hero offset={0} />
		<HeroHeaderBg offset={0} />
		<Projects offset={1} />
		<MiddleProjectsDivider offset={1.3} />
		<TopAboutDivider offset={2.4} />
		<About offset={2.5} />
		<Contact offset={3.5} />
		<FooterSection offset={3.5} />
		<WaveLayerDivider offset={3.7} />
	</ParallaxWrapper>
);
export default memo(ParallaxPage);
