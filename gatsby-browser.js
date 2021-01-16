/* eslint-disable react/prop-types */
import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import { default as Providers } from './src/components/Providers';
export const wrapRootElement = ({ element }) => (
	<Providers>{element}</Providers>
);
