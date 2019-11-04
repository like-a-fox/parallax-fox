import React from 'react';
import PropTypes from 'prop-types';
import { Divider, DividerMiddle, WaveWrapper, InnerWave } from '../../styles';
export const HeroHeaderBg = ({ offset }) => (
	<Divider
		bg="linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)"
		clipPath="polygon(0 0%,100% 0%,100% 100%,0 15%)"
		speed={0.5}
		offset={offset}
	/>
);

HeroHeaderBg.propTypes = {
	offset: PropTypes.number,
};
export const TopAboutDivider = ({ ...parallaxProps }) => (
	<Divider
		bg="linear-gradient(to right, rgba(30,40,50,.9) 0%, rgba(80, 100, 120, .7) 100%)"
		clipPath="polygon(-40% 27% ,-18% 100%,131% 85%,73% 0%)"
		{...parallaxProps}
	/>
);

export const MiddleProjectsDivider = ({ ...parallaxProps }) => (
	<DividerMiddle
		bg="linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)"
		{...parallaxProps}
	/>
);

export const WaveLayerDivider = ({ ...parallaxProps }) => (
	<Divider className="wave" fill="rgba(50, 50, 65, .9)" {...parallaxProps}>
		<WaveWrapper>
			<InnerWave>
				<svg
					id="wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 800 338.05"
					preserveAspectRatio="none">
					<path>
						<animate
							attributeName="d"
							values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
							repeatCount="indefinite"
							dur="30s"
						/>
					</path>
				</svg>
			</InnerWave>
		</WaveWrapper>
	</Divider>
);
