import styled, { keyframes, css } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const negRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;
export const wave = keyframes`
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
export const waveAnimation = (length) => css`
	animation: ${wave} ${length} linear infinite alternate;
`;
export const rotateAnimation = (length) => css`
	animation: ${rotate} ${length} linear infinite;
`;
export const negativeRotateAnimation = (length) => css`
	animation: ${negRotate} ${length} linear infinite;
`;
export const hidden = css`
	${tw`hidden xl:block`};
`;
export const WaveWrapper = styled.div`
	${tw`absolute pin-b w-full`};
	transform: matrix(1, 0, 0, -1, 0, 0);
`;
export const InnerWave = styled.div`
	${tw`relative h-full`};
	svg {
		width: 100%;
		height: 40vh;
	}
	path {
		${waveAnimation('15s')};
	}
`;

export const LoadingCircle = styled.div`
	${tw`absolute shadow-lg rounded-full`}
	height: ${(props) => props.diameter}px;
	width: ${(props) => props.diameter}px;
	background-color: rgba(${(props) => props.bg});
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	z-index: ${(props) => props.zindex};
	transform-origin: ${(props) => props.transform}px ${(props) =>
	props.transform}px;
	${rotateAnimation('3s')}
`;

export const LoadingInner = styled.div`
	${tw`absolute shadow-lg h-full w-full rounded-full`}
	transform: translateZ(0) scale(1);
	background-color: rgba(120, 140, 152, 0.5);
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	backface-visibility: hidden;
	left: ${(props) => props.size / 2};
	transform-origin: 80px 100px;
	${negativeRotateAnimation('5s')}
`;

export const LoadingSpinner = styled.div`
	${tw`fixed inset-0 z-1000 flex justify-center items-center h-screen w-screen`}
	overflow: hidden;
`;
