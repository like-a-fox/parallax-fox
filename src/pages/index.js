/* eslint-disable filenames/match-regex */
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { About, Contact, Hero, Projects } from '../components';

const IndexPage = () => {
	return (
		<Parallax pages={7}>
			<Hero />
			<Projects />
			<About />
			<Contact />
		</Parallax>
	);
};

export default IndexPage;
