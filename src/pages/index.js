import React from 'react';
import {
	ParallaxLayout,
	HeroSection,
	ProjectSection,
	AboutSection,
	ContactFooter,
} from '../components';

const IndexPage = () => (
	<ParallaxLayout pages={6}>
		<HeroSection />
		<ProjectSection />
		<AboutSection />
		<ContactFooter />
	</ParallaxLayout>
);

export default IndexPage;
