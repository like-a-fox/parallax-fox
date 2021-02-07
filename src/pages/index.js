/* eslint-disable filenames/match-regex */
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { Hero, Projects, About, Contact } from '../sections';
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
