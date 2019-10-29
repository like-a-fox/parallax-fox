import React from 'react';
import PropTypes from 'prop-types';
import { Divider, DividerMiddle, WaveWrapper, InnerWave } from '../../styles';
export const HeroHeaderBg = ({ offset }) => (
	<Divider
		bg="#23262b"
		clipPath="polygon(0 0%,100% 0%,100% 100%,0 15%)"
		speed={0.5}
		offset={offset}
	/>
);

HeroHeaderBg.propTypes = {
	offset: PropTypes.number,
};
export const TopAboutDivider = ({ offset }) => (
	<Divider
		bg="#23262b"
		clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
		speed={0.2}
		offset={offset}
	/>
);

TopAboutDivider.propTypes = {
	offset: PropTypes.number,
};
export const MiddleProjectsDivider = ({ offset }) => (
	<DividerMiddle
		bg="linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)"
		speed={-0.2}
		offset={offset}
		factor={2}
	/>
);

MiddleProjectsDivider.propTypes = {
	offset: PropTypes.number,
};

export const WaveLayerDivider = ({ offset }) => (
	<Divider fill="#23262b" speed={0.2} offset={offset}>
		<WaveWrapper>
			<InnerWave>
				<svg
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
WaveLayerDivider.propTypes = {
	offset: PropTypes.number,
};
WaveLayerDivider.defaultProps = {
	offset: 5,
};
