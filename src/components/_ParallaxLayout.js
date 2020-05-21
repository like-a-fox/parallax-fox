import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { ParallaxPage } from '../styles';
import { default as Layout } from './_Layout';
import { default as LoadingBubbles } from './_LoadingBubbles';

/**
 * @component ParallaxLayout
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {[element]} props.children
 * @param {boolean} props.loading
 * @param {number} props.pages
 */
const ParallaxLayout = (props) => {
	const { loading, children, pages, ...extraProps } = props;
	if (loading) {
		return <LoadingBubbles />;
	}
	return (
		<Layout>
			<ParallaxPage
				{...extraProps}
				loading={loading ? 'blur(20px)' : ''}
				pages={pages}>
				{children}
			</ParallaxPage>
		</Layout>
	);
};

ParallaxLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	loading: PropTypes.bool,
	pages: PropTypes.number.isRequired,
};

ParallaxLayout.defaultProps = {
	loading: false,
	pages: 6,
};

export default memo(ParallaxLayout);
