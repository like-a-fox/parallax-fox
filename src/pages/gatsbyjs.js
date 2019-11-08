import React, { memo } from 'react';
import { Layout, SEO, ParallaxPage } from '../components';

const GatsbyPage = () => (
	<Layout invert={1}>
		<SEO title="Gatsby Projects" />
		<ParallaxPage
			mixBlend={'contrast'}
			filter={'invert(1) hue-rotate(200deg) brightness(2.5)'}
		/>
	</Layout>
);

export default memo(GatsbyPage);
