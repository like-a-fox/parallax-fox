/* eslint-disable filenames/match-regex */
import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import {
	About,
	Contact,
	Hero,
	Layout,
	Projects,
	LazyLoads,
} from '../components';

const IndexPage = () => {
	const isSSR = typeof window !== 'undefined';
	return (
		<Layout>
			<Parallax pages={7}>
				{isSSR ? (
					<>
						<Hero />
						<Projects />
						<About />
						<Contact />
					</>
				) : (
					<>
						<LazyLoads.Hero />
						<LazyLoads.Projects />
						<LazyLoads.About />
						<LazyLoads.Contact />
					</>
				)}
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
