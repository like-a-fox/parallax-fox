import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '../../styles';

const HeroDivider = ({ offset, ...parallaxProps }) => (
	<Divider
		bg='linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)'
		clipPath='polygon(0 0%,100% 0%,100% 100%,0 15%)'
		speed={0.5}
		offset={offset}
		{...parallaxProps}
	/>
);

HeroDivider.propTypes = {
	offset: PropTypes.any,
};

export default memo(HeroDivider);
