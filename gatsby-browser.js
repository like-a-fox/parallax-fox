/* eslint-disable filenames/match-regex */
/* eslint-disable react/prop-types */
import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import { default as Providers } from './src/components/_Providers';
import { default as LoadingBubbles } from './src/components/_LoadingBubbles';

export const wrapRootElement = ({ element }) =>
	typeof window !== 'undefined' ? (
		<React.Suspense fallback={<LoadingBubbles />}>
			<Providers>{element}</Providers>{' '}
		</React.Suspense>
	) : (
		element
	);
