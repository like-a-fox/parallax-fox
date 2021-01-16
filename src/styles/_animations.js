import styled, { keyframes, css } from 'styled-components';

export const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;
export const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;
export const upDownAnimation = css`
	${upDown} 4s ease-in-out infinite alternate;
`;
export const upDownWideAnimation = css`
	${upDownWide} 18s ease-in-out infinite alternate;
`;
export const UpDown = styled.div`
	animation: ${upDownAnimation};
	opacity: ${(props) => props.opacity};
	${tw`pin absolute`};
`;
export const UpDownWide = styled.div`
	animation: ${upDownWideAnimation};
	opacity: ${(props) => props.opacity};
	${tw`pin absolute`};
`;
export const hidden = css`
	${tw`hidden xl:block`};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const negRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const rotateAnimation = (length) => css`
	animation: ${rotate} ${length} linear infinite;
`;
export const negativeRotateAnimation = (length) => css`
	animation: ${negRotate} ${length} linear infinite;
`;

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
		opacity: .25;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
`;

const oddSlideElement = keyframes`
from {
	transform: translateX(-300px);
	opacity: .75;
}
to {
	transform: translateX(0px);
	opacity: 1;
}
`;

export const slide = css`
	animation: ${slideElement} 3s ease-in forwards;
`;

export const oddSlide = css`
	animation: ${oddSlideElement} 2s ease alternate 1 backwards;
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;
export const waveAnimation = (length) => css`
	animation: ${wave} ${length} linear infinite alternate;
`;
