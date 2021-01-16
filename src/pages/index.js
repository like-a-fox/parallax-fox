/* eslint-disable filenames/match-regex */
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { About, Contact, Hero, Layout, Projects } from '../components';

const IndexPage = () => {
	return (
		<Layout>
			<Parallax pages={7}>
				<Hero />
				<Projects />
				<About />
				<Contact />
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
