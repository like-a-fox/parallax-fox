import React, { memo } from 'react';
import { Divider } from '../../styles';

const AboutDivider = ({ ...parallaxProps }) => (
	<Divider
		bg='linear-gradient(to right, rgba(30,40,50,.9) 0%, rgba(80, 100, 120, .7) 100%)'
		clipPath='polygon(-40% 27% ,-18% 100%,131% 85%,73% 0%)'
		speed={0.2}
		offset={3}
		{...parallaxProps}
	/>
);

export default memo(AboutDivider);
