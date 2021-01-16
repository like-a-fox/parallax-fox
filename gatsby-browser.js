/* eslint-disable react/prop-types */
import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import { default as Providers } from './src/components/Providers';
import { default as Loading } from './src/components/Loading';

export const wrapRootElement = ({ element }) =>
	typeof window !== 'undefined' ? (
		<React.Suspense fallback={<Loading />}>
			<Providers>{element}</Providers>
		</React.Suspense>
	) : (
		<Providers>{element}</Providers>
	);
