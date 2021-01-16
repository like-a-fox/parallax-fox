import React from 'react';
export const LazyLoads = {
	Contact: React.lazy(() => import('./Contact')),
	Projects: React.lazy(() => import('./Projects')),
	About: React.lazy(() => import('./About')),
	Hero: React.lazy(() => import('./Hero')),
};
export { default as Hero } from './Hero';
export { default as Contact } from './Contact';
export { default as Projects } from './Projects';
export { default as About } from './About';
export { default as Layout } from './Layout';
export { default as Providers } from './Providers';
export { default as Loading } from './Loading';
