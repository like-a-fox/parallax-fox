import styled from 'styled-components';
import { colors } from '../../tailwind';
import { rotateAnimation } from './_animations';
import triangle from '../images/triangle.svg';

export const Title = styled.h1`
	${tw`text-3xl uppercase lg:text-4xl font-mono text-tertiary mb-8 tracking-wide relative inline-flex items-center justify-end pl-12`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	font-weight: 200;
	min-width: max-content;
	letter-spacing: -1px;
	&:before {
		content: '';
		width: 40px;
		height: 40px;
		background: url(${triangle});
		position: absolute;
		background-size: 40px;
		${rotateAnimation('4s')};
		left: -5px;
		top: 0;
	}
`;
export const ContactText = styled.p`
	${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
	margin-top: 12px;
`;

export const Text = styled.div`
	${tw`opacity-85 font-mono text-tertiary text-sm md:text-base`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	font-weight: 200;
	letter-spacing: -1px;
`;

export const BigTitle = styled.h1`
	${tw`text-4xl lg:text-5xl font-mono text-primary mb-3 tracking-wide`};
	text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
	text-transform: uppercase;
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	font-weight: 200;
	letter-spacing: -2px;
	height: 2.25rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	i {
		color: ${(props) => props.subColor || colors.secondary};
		height: inherit;
		font-size: 1rem;
		display: inline-flex;
		align-items: flex-start;
	}
`;

export const Subtitle = styled.p`
	${tw`text-2xl lg:text-3xl font-mono text-tertiary mt-6 xxl:w-3/4`};
	text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	em {
		font-size: 13px;
		text-transform: uppercase;
		font-style: normal;
		color: ${colors.pink};
	}
`;
