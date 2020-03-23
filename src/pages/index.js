import React from 'react';
import {
	AboutSection,
	ContactFooter,
	HeroSection,
	Loading,
	ParallaxLayout,
	ProjectSection,
} from '../components';

const IndexPage = () => {
	const Hero = <HeroSection />;
	const Projects = <ProjectSection />;
	const About = <AboutSection />;
	const Contact = <ContactFooter />;
	if (!Hero || !Projects || !About || !Contact) {
		return <Loading />;
	}
	return (
		<ParallaxLayout pages={6}>
			{Hero}
			{Projects}
			{About}
			{Contact}
		</ParallaxLayout>
	);
};

export default IndexPage;

