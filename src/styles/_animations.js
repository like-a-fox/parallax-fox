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

export const rotateAnimation = (length) => css`
	animation: ${rotate} ${length} linear infinite;
`;
export const negativeRotateAnimation = (length) => css`
	animation: ${negRotate} ${length} linear infinite;
`;
export const hidden = css`
	${tw`hidden xl:block`};
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
		clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 15%);
	}
`;
