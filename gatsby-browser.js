/* eslint-disable filenames/match-regex */
/* eslint-disable react/prop-types */
import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import { default as Providers } from './src/components/_Providers';
import { Loading } from './src/components/_Loading';

export const wrapRootElement = ({ element }) =>
	typeof window !== 'undefined' ? (
		<React.Suspense fallback={<Loading />}>
			<Providers>{element}</Providers>{' '}
		</React.Suspense>
	) : (
		element
	);
