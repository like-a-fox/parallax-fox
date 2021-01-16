import loadable from '@loadable/component';

export const Contact = loadable(() => import('./Contact'));
export const Projects = loadable(() => import('./Projects'));
export const About = loadable(() => import('./About'));
export const Hero = loadable(() => import('./Hero'));
export { default as Layout } from './Layout';
export { default as Providers } from './Providers';
export { default as Loading } from './Loading';
