/* eslint-disable filenames/match-regex */
import React from 'react';
import {
	AboutSection,
	ContactSection,
	HeroSection,
	ParallaxLayout,
	ProjectsSection,
} from '../components';

const IndexPage = () => {
	return (
		<ParallaxLayout pages={7}>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />
		</ParallaxLayout>
	);
};

export default IndexPage;
