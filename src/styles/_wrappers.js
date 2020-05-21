import styled, { css, keyframes } from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

const fadeBackground = keyframes`
	from {
		opacity: .5;
	}
	to {
		opacity: 1;
	}
`;

export const fade = css`
	${fadeBackground} 2s ease-in;
`;
const slideElement = keyframes`
	from {
		transform: translateX(300px);
	}
	to {
		transform: translateX(0px)
	}
`;

const oddSlideElement = keyframes`
from {
	transform: translateX(-300px);
}
to {
	transform: translateX(0px)
}
`;

export const slide = css`
	${slideElement} 3s ease-in;
`;

export const oddSlide = css`
	${oddSlideElement} 2s ease;
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
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
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

export const Inner = styled.div`
	${tw`w-full xxl:w-2/3 text-center flex flex-col items-start justify-around lg:text-left`};
`;
