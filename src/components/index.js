import { lazy } from 'react';
export const AboutSection = lazy(() => import('./_AboutSection'));
export const ContactSection = lazy(() => import('./_ContactSection'));
export const HeroSection = lazy(() => import('./_HeroSection'));
export const ParallaxLayout = lazy(() => import('./_ParallaxLayout'));
export const ProjectsSection = lazy(() => import('./_ProjectsSection'));
export { default as SEO } from './_SEO';
export { default as Layout } from './_Layout';
export { default as LoadingBubbles } from './_LoadingBubbles';
