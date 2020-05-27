import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import { fade } from '../../styles';

export const AboutHeader = styled.div`
	${tw`flex font-mono text-primary flex-row items-center m-6`};
`;
export const AboutAvatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;
export const AboutSubTitle = styled.span`
	${tw`text-pink uppercase text-justify justify-start items-stretch h-32 xl:48 flex font-mono pl-8 lg:pl-12 text-md lg:text-lg xl:text-2xl `};
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	letter-spacing: -1px;
`;
export const AboutDescription = styled.p`
	${tw`text-main xl:text-2xl font-mono p-0 lg:p-12 text-justify text-xl md:p-6  md:text-md`};
`;

export const AboutDivider = styled(ParallaxLayer)`
	opacity: 0.5;
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(30, 40, 50, 0.9) 0%,
		rgba(80, 100, 120, 0.7) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(-40% 27%, -18% 100%, 131% 85%, 73% 0%);
`;
