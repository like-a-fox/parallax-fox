import styled from 'styled-components';
import { Link } from 'gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import { fade, slide, oddSlide } from '../../styles';

export const ProjectsWrapper = styled.div`
	${tw`flex-col flex md:flex-row md:inline-flex md:flex-wrap justify-between`};
`;

export const TitleWrapper = styled.div`
	${tw`text-tertiary rounded-sm overflow-hidden relative uppercase text-xl md:text-2xl xl:text-3xl font-mono p-4`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	&:before {
		${tw`absolute  -z-1 inset-0 h-full w-full`}
		content: ' ';
		filter: blur(1px);
	}
`;

export const LinkWrapper = styled(Link)`
	${tw`shadow-lg mx-0 my-1 md:m-2 min-h-sm w-full  md:min-h-wrap md:w-1/2 relative no-underline rounded-lg text-white flex-col overflow-hidden flex-grow flex justify-end`};
	animation: ${slide};
	animation-iteration-count: 1;
	animation-fill-mode: both;
	animation-delay: 1s;
	flex-basis: calc(50% - 1rem);
	transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	&:nth-of-type(3n + 2) {
		animation: ${oddSlide};
		animation-iteration-count: 1;
		animation-fill-mode: none;
		animation-delay: 0;
	}
	filter: grayscale(30%);
	&:before {
		${tw`bg-center bg-no-repeat bg-cover absolute -z-1 h-full w-full inset-0`}
		content: ' ';
		background-image: url(${(props) => props.bg});
		filter: opacity(0.85) grayscale(70%);
	}
	&:hover {
		transform: translateY(-5px);
		&:before {
			filter: grayscale(30%);
		}
	}
`;

export const ProjectsUpperDivider = styled(ParallaxLayer)`
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(162, 181, 216, 0.7) 0%,
		rgba(148, 130, 186, 0.3) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(0 0%, 100% 11%, 100% 78%, 0% 100%);
`;

export const ProjectsLowerDivider = styled(ParallaxLayer)`
	opacity: 0.5;
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(162, 181, 216, 0.7) 0%,
		rgba(148, 130, 186, 0.3) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(0 37%, 75% 48%, 100% 10%, 100% 10%);
`;

export const LinkText = styled.div`
	${tw`opacity-85 font-mono text-tertiary text-sm md:text-base`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	font-weight: 200;
	letter-spacing: -1px;
`;
