import styled from 'styled-components';
import { Link } from 'gatsby';
import { ParallaxLayer, Parallax } from 'react-spring/renderprops-addons.cjs';

export const ParallaxPage = styled(Parallax)`
	top: 0;
	filter: ${(props) => props.loading};
`;

export const Content = styled(ParallaxLayer)`
	${tw`px-4 md:px-12 xl:px-16 justify-center w-full items-center flex z-50`};
	&.hero {
		mix-blend-mode: ${(props) => props.mixBlend || 'exclusion'};
		filter: ${(props) => props.filter};
	}
	&.footer {
		z-index: 30;
	}
	&.contact-section {
		${tw`flex-col justify-start items-start w-full xxl:items-center`}
	}
`;

export const Divider = styled(ParallaxLayer)`
	${tw`absolute w-full h-full min-h-screen`};
	background: ${(props) => props.bg};
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: ${(props) => props.clipPath};
	&.wave {
		svg#wave {
			mask-image: linear-gradient(
				to right,
				rgba(162, 181, 216, 0.9) 0%,
				rgba(148, 130, 186, 0.3) 100%
			);
		}
	}
`;

export const DividerMiddle = styled(Divider)`
	opacity: ${({ flipped }) => (!flipped ? 'initial' : 0.5)};
	clip-path: ${({ flipped }) =>
		!flipped
			? ' polygon(0 0%,100% 11%,100% 78%,0% 100%)'
			: ' polygon(0 37%,75% 48%,100% 10%,100% 10%)'};
`;

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;

export const ContactInner = styled.div`
	${tw`flex-col md:flex justify-between items-start`}
	width: -webkit-fill-available;
	&.contact {
		height: unset;
		.contact-inner {
			${tw`w-2/5 justify-start flex-col`}
		}
	}
	@media (max-width: 700px) {
		&.contact {
			width: -webkit-fill-available;
			.contact-inner {
				width: -webkit-fill-available;
			}
		}
	}
`;

export const ProjectsWrapper = styled.div`
	${tw`flex-col flex md:flex-row md:inline-flex md:flex-wrap justify-between`};
`;

export const WrapperDiv = styled.div`
	${tw`w-full xl:w-2/3`};
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
	flex-basis: calc(50% - 1rem);
	transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

export const Footer = styled.footer`
	${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`;
