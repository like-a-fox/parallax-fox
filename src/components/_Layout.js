import PropTypes from 'prop-types';
import React, { memo } from 'react';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { default as SEO } from './_SEO';

/**
 * @component Layout
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {oneOfType} props.children
 */
const Layout = (props) => {
	const { children } = props;
	return (
		<>
			<SEO />
			{children}
		</>
	);
};
Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
};

export default memo(Layout);
