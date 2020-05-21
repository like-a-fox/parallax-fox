import React from 'react';
import { AboutDivider } from './_AboutStyles';
import { default as AboutSection } from './_AboutSection';

const About = () => {
	return (
		<>
			<AboutDivider speed={-0.2} offset={3} />
			<AboutSection />
		</>
	);
};

export default About;
