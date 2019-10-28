import React, { memo } from 'react';
// import { SVG } from '../';
import { Divider, DividerMiddle } from '../../styles';
// import { colors } from '../../../tailwind.config.js';
export const HeroHeaderBg = () => (
	<Divider
		bg="#23262b"
		clipPath="polygon(0 0%,100% 0%,100% 100%,0 15%)"
		speed={0.5}
		offset={0}
	/>
);
export const TopAboutDivider = () => (
	<Divider
		bg="#23262b"
		clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
		speed={0.2}
		offset={3}
	/>
);
export const MiddleProjectsDivider = memo(
	() => (
		<DividerMiddle
			bg="linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)"
			speed={-0.2}
			offset={`${1}.1`}
			factor={2}
		/>
	),
	{ displayName: 'MiddleProjectsDivider' }
);
