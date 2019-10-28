import styled from 'styled-components';
import { Link } from 'gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import { colors } from '../../tailwind';

export const Content = styled(ParallaxLayer)`
	${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};

	&.hero {
		mix-blend-mode: color-dodge;
	}
`;
export const Divider = styled(ParallaxLayer)`
	${tw`absolute w-full h-full`};
	background: ${(props) => props.bg};
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: ${(props) => props.clipPath};
`;

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center lg:text-left`};
`;

export const ContactInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: -webkit-fill-available;
	&.contact {
		.contact-inner {
			width: 40%;
			height: 100%;
			justify-content: flex-start;
			flex-direction: column;
		}
	}
	@media (max-width: 700px) {
		flex-direction: column;
		&.contact {
			width: -webkit-fill-available;
			.contact-inner {
				width: -webkit-fill-available;
			}
		}
	}
`;

export const DividerMiddle = styled(Divider)`
	clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const ContactText = styled.p`
	${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
	margin-top: 12px;
`;

export const Footer = styled.footer`
	${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`;
export const ProjectsWrapper = styled.div`
	${tw`flex flex-wrap justify-between mt-8`};
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 1200px) {
		grid-gap: 1.5rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 1.5rem;
	}
`;

export const WrapperDiv = styled.div`
	${tw`w-full xl:w-2/3`};
`;

export const TitleWrapper = styled.div`
	${tw`text-white relative uppercase text-xl md:text-2xl xl:text-3xl font-mono `};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	padding: 1rem;
	background-color: rgba(0, 0, 40, 0.1);
	border-radius: 4px;
	&:before {
		content: '';
		position: absolute;
		background-color: rgba(0, 0, 40, 0.3);
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(1px);
	}
`;
export const Text = styled.div`
	${tw`opacity-85 font-mono text-white text-sm md:text-base`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	font-weight: 200;
	letter-spacing: -1px;
`;

export const LinkWrapper = styled(Link)`
	width: 100%;
	position: relative;
	${tw`shadow-lg relative no-underline rounded-lg text-white flex-col flex justify-end`};
	transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	min-height: 19rem;
	filter: grayscale(30%);
	overflow: hidden;
	&:before {
		content: '';
		opacity: 0.75;
		background-image: url(${(props) => props.bg});
		background-color: rgba(10, 10, 50, 0.4);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: grayscale(70%);
	}
	&:hover {
		&:before {
			filter: grayscale(10%);
			opacity: 0.9;
		}
		transform: translateY(-5px);
		filter: grayscale(30%);
	}
`;
export const BigTitle = styled.h1`
	${tw`text-4xl lg:text-5xl font-mono text-pink mb-3 tracking-wide`};
	text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
	text-transform: uppercase;
	font-weight: 200;
	letter-spacing: -2px;
	height: 2.25rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	i {
		color: ${(props) => props.subColor || colors.perpSkiz};
		height: inherit;
		font-size: 1rem;
		display: inline-flex;
		align-items: flex-start;
	}
`;

export const Subtitle = styled.p`
	${tw`text-2xl lg:text-3xl font-mono text-tealDerp mt-6 xxl:w-3/4`};
	text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
	em {
		font-size: 13px;
		text-transform: uppercase;
		font-style: normal;
		color: ${colors.pink};
	}
`;
