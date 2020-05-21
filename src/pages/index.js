/* eslint-disable filenames/match-regex */
import React from 'react';
import { About, Contact, Hero, ParallaxLayout, Projects } from '../components';

const IndexPage = () => {
	const isSSR = typeof window !== 'undefined';
	return (
		<>
			{isSSR && (
				<ParallaxLayout pages={7}>
					<Hero />
					<Projects />
					<About />
					<Contact />
				</ParallaxLayout>
			)}
		</>
	);
};

export default IndexPage;
