import loadable from '@loadable/component';
export {
	upDown,
	upDownWide,
	upDownAnimation,
	upDownWideAnimation,
	UpDown,
	UpDownWide,
	hidden,
	rotateAnimation,
	negativeRotateAnimation,
	waveAnimation,
	fade,
} from './_animations';
export {
	Input,
	TextArea,
	StyledForm,
	FormButton,
	ButtonWrapper,
	Inner,
	ProjectsWrapper,
	TitleWrapper,
	LinkWrapper,
} from './_elements';
export {
	Title,
	Text,
	Subtitle,
	ContactText,
	Footer,
	LinkText,
} from './_typography';
export { Loading } from './_dividers';
export { GlobalStyle } from './_global';

export const WaveDivider = loadable(() => import('./_dividers.js'), {
	resolveComponent: (components) => components.WaveDivider,
});
export const LowerDivider = loadable(() => import('./_dividers.js'), {
	resolveComponent: (components) => components.LowerDivider,
});
export const UpperDivider = loadable(() => import('./_dividers.js'), {
	resolveComponent: (components) => components.UpperDivider,
});
export const Divider = loadable(() => import('./_dividers.js'), {
	resolveComponent: (components) => components.Divider,
});
export const Content = loadable(() => import('./_dividers.js'), {
	resolveComponent: (components) => components.Content,
});
