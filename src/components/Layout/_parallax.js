import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ParallaxPage } from '../../styles';
import { Layout, Loading } from './';

const ParallaxLayout = ({
	loading = false,
	children,
	pages = 6,
	...extraProps
}) => (
	<Layout>
		{loading ? <Loading /> : null}
		<ParallaxPage
			{...extraProps}
			loading={loading ? 'blur(20px)' : ''}
			pages={pages}>
			{children}
		</ParallaxPage>
	</Layout>
);

ParallaxLayout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	loading: PropTypes.bool,
	pages: PropTypes.number.isRequired,
};

export default memo(ParallaxLayout);
