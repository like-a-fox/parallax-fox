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

const ParallaxWrapperBase = ({ children, pages, ...extraProps }) => (
	<Parallax {...extraProps} pages={pages}>
		{children}
	</Parallax>
);

ParallaxWrapperBase.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	pages: PropTypes.number.isRequired,
};

const ParallaxWrapper = memo(ParallaxWrapperBase);

const ParallaxPage = ({ mixBlend, dividerFilter, ...extraProps }) => (
	<ParallaxWrapper pages={6}>
		<Hero offset={0} mixBlend={mixBlend} {...extraProps} />
		<HeroHeaderBg offset={0} {...extraProps} />
		<Projects factor={2} offset={1} {...extraProps} />
		<MiddleProjectsDivider factor={1.7} speed={0.3} offset={1} {...extraProps} />
		<MiddleProjectsDivider
			factor={1.5}
			speed={-0.1}
			flipped="true"
			offset={4.2}
			{...extraProps}
		/>
		<TopAboutDivider speed={0.2} offset={3} {...extraProps} />
		<About speed={-0.1} factor={1.5} offset={3} {...extraProps} />
		<Contact factor={1.5} offset={4.7} {...extraProps} />
		<FooterSection offset={5} {...extraProps} />
		<WaveLayerDivider factor={1.5} offset={4.5} {...extraProps} />
	</ParallaxWrapper>
);

ParallaxPage.propTypes = {
	dividerFilter: PropTypes.any,
	mixBlend: PropTypes.any,
};

export default memo(ParallaxPage);
