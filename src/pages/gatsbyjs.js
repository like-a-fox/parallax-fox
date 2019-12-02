import React, { memo } from 'react';
import { Layout, SEO, ParallaxLayout } from '../components';

const GatsbyPage = () => (
	<Layout invert={1}>
		<SEO title='Gatsby Projects' />
		<ParallaxLayout
			mixBlend={'contrast'}
			filter={'invert(1) hue-rotate(200deg) brightness(2.5)'}
		/>
	</Layout>
);

export default memo(GatsbyPage);
