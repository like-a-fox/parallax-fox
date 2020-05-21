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
