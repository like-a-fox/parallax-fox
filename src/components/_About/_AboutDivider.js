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
const AboutDivider = (props) => {
	return <Divider {...props} />;
};

AboutDivider.propTypes = {
	bg: PropTypes.string,
	clipPath: PropTypes.string,
	offset: PropTypes.number,
	speed: PropTypes.number,
};

AboutDivider.defaultProps = {
	bg:
		'linear-gradient(to right, rgba(30,40,50,.9) 0%, rgba(80, 100, 120, .7) 100%)',
	clipPath: 'polygon(-40% 27% ,-18% 100%,131% 85%,73% 0%)',
	speed: 0.2,
	offset: 3,
};

export default AboutDivider;
