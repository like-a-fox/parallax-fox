import React from 'react';
import {
	ParallaxPage,
	HeroSection,
	ProjectSection,
	AboutSection,
	ContactFooter,
} from '../components';

const IndexPage = () => (
	<ParallaxPage pages={6}>
		<HeroSection />
		<ProjectSection />
		<AboutSection />
		<ContactFooter />
	</ParallaxPage>
);

export default IndexPage;
