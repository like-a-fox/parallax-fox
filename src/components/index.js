import React from 'react';

export const Contact = React.lazy(() => import('./Contact'));
export const Projects = React.lazy(() => import('./Projects'));
export const About = React.lazy(() => import('./About'));
export const Hero = React.lazy(() => import('./Hero'));
export { default as Layout } from './Layout';
export { default as Providers } from './Providers';
export { default as Loading } from './Loading';
