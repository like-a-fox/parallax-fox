import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const loadingFade = keyframes`
	from {
		opacity: 0.5;
	}
	to {
		opacity: 1;
	}
`;

const loading = css`
	animation: ${loadingFade} 2s ease alternate 1 forwards;
`;

const rotateAnimation = (length) => css`
	animation: ${rotate} ${length} linear infinite;
`;
const negativeRotateAnimation = (length) => css`
	animation: ${negRotate} ${length} linear infinite;
`;

export const LoadingCircle = styled.div`
	${tw`absolute shadow-lg rounded-full`}
	height: ${(props) => props.diameter}vh;
	width: ${(props) => props.diameter}vh;
	background-color: rgba(${(props) => props.bg});
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	z-index: ${(props) => props.zindex};
	transform-origin: ${(props) => props.transform}px
		${(props) => props.transform}px;
	${rotateAnimation('5s')}
`;

export const LoadingInner = styled.div`
	${tw`absolute shadow-lg h-full w-full rounded-full`}
	transform: translateZ(0) scale(1);
	background-color: rgba(120, 140, 152, 0.5);
	width: ${(props) => props.diameter}vh;
	height: ${(props) => props.diameter}vh;
	backface-visibility: hidden;
	left: calc(100vw / 2);
	transform-origin: 80px 100px;
	${negativeRotateAnimation('8s')}
`;

export const LoadingSpinner = styled.div`
	${tw`fixed inset-0 z-1000 flex justify-center items-center h-screen w-screen`}
	${loading}
	top: 0;
	overflow: visible;
	&:after {
		content: ' ';
		height: -webkit-fill-available;
		width: 100%;
		background: linear-gradient(
			to top,
			rgba(50, 50, 65, 0.2) 0%,
			rgba(50, 50, 65, 0.7) 100%
		);
		clip-path: polygon(0px 0%, 0% 100%, 100% 100%, 0px 15%);
	}
`;

const Loading = () => {
	return (
		<LoadingSpinner diameter={90}>
			<LoadingInner>
				<LoadingCircle
					zindex='inherit'
					diameter={70}
					bg='117, 93, 99, .7'
					top={100}
					left={100}
					transform={10}
				/>
				<LoadingCircle
					zindex='1001'
					diameter={35}
					bg='86,79,114,0.9'
					top={50}
					left={50}
					transform={50}
				/>
			</LoadingInner>
		</LoadingSpinner>
	);
};

export default Loading;