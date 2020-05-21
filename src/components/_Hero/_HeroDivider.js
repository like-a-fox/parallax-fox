import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from '../../styles';

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.bg
 * @param {string} props.clipPath
 * @param {number} props.offset
 * @param {number} props.speed
 */
const HeroDivider = (props) => {
	return <Divider {...props} />;
};

HeroDivider.propTypes = {
	bg: PropTypes.string,
	clipPath: PropTypes.string,
	offset: PropTypes.number,
	speed: PropTypes.number,
};

HeroDivider.defaultProps = {
	bg:
		'linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)',
	clipPath: 'polygon(0 0%,100% 0%,100% 100%,0 15%)',
	speed: 0.5,
	offset: 0,
};

export default HeroDivider;
