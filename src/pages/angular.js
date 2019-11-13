import React, { memo } from 'react';
import { Layout, SEO } from '../components';

const AngularPage = () => (
	<Layout>
		<SEO title='Angular But Not Obtuse' />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default memo(AngularPage);
