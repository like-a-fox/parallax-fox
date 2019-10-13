import styled, { keyframes, css } from 'styled-components';
import tw from 'tailwind.macro';
import triangle from '../images/triangle.svg';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
  opacity: ${props => props.opacity};
  ${tw`pin absolute`};
`;
export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  opacity: ${props => props.opacity};
  ${tw`pin absolute`};
`;
export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`;
export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
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
    ${waveAnimation('20s')};
  }
`;
export const Title = styled.h1`
  ${tw`text-4xl uppercase lg:text-4xl font-mono text-grey-light mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-weight: 200;
  letter-spacing: -1px;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`;
