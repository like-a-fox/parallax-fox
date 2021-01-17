import React from 'react';
import styled from 'styled-components';
import {
	waveAnimation,
	fade,
	loading,
	negativeRotateAnimation,
	rotateAnimation,
} from './_animations';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

export const Content = styled(ParallaxLayer)`
	${tw`relative px-4 md:px-12 xl:px-16 justify-center w-full items-center flex z-50`};
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

const WaveWrapper = styled.div`
	${tw`absolute pin-b w-full`};
	transform: matrix(1, 0, 0, -1, 0, 0);
`;
const InnerWave = styled.div`
	${tw`relative h-full`};
	svg {
		width: 100%;
		height: 40vh;
	}
	path {
		${waveAnimation('10s')};
	}
`;
export const WaveDivider = () => {
	return (
		<Divider
			className={'wave'}
			factor={1.5}
			offset={5.5}
			fill={'rgba(50, 50, 65, .9)'}>
			<WaveWrapper>
				<InnerWave>
					<svg
						id={'wave'}
						xmlns={'http://www.w3.org/2000/svg'}
						viewBox={'0 0 800 338.05'}
						preserveAspectRatio={'none'}>
						<path>
							<animate
								attributeName={'d'}
								values={
									'M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z'
								}
								repeatCount={'indefinite'}
								dur={'10s'}
							/>
						</path>
					</svg>
				</InnerWave>
			</WaveWrapper>
		</Divider>
	);
};

const ProjectsUpperDivider = styled(ParallaxLayer)`
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(162, 181, 216, 0.7) 0%,
		rgba(148, 130, 186, 0.3) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(0 0%, 100% 11%, 100% 78%, 0% 100%);
`;

const ProjectsLowerDivider = styled(ParallaxLayer)`
	opacity: 0.5;
	${tw`absolute w-full h-full min-h-screen`};
	animation: ${fade};
	animation-iteration-count: 1;
	animation-fill-mode: none;
	background: linear-gradient(
		to right,
		rgba(162, 181, 216, 0.7) 0%,
		rgba(148, 130, 186, 0.3) 100%
	);
	top: 0;
	svg {
		fill: ${(props) => props.fill};
	}
	clip-path: polygon(0 37%, 75% 48%, 100% 10%, 100% 10%);
`;

export const UpperDivider = () => {
	return <ProjectsUpperDivider factor={1.7} speed={0.3} offset={1} />;
};

export const LowerDivider = () => {
	return <ProjectsLowerDivider factor={1.5} speed={-0.5} offset={4.2} />;
};

const LoadingCircle = styled.div`
	${tw`absolute shadow-lg rounded-full`}
	height: ${(props) => props.diameter}rem;
	width: ${(props) => props.diameter}rem;
	background-color: rgba(${(props) => props.bg});
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	z-index: ${(props) => props.zindex};
	transform-origin: ${(props) => props.transform}px
		${(props) => props.transform}px;
	${rotateAnimation('1s')}
`;

const LoadingInner = styled.div`
	${tw`absolute shadow-lg h-full w-full rounded-full`}
	background-color: rgba(120, 140, 152, 0.8);
	width: 18rem;
	height: 18rem;
	backface-visibility: hidden;
	transform-origin: 80px 100px;
	${negativeRotateAnimation('3s')}
`;

const LoadingSpinner = styled.div`
	${tw`absolute pin-0 z-1005 flex justify-center items-center`}
	${loading}
	overflow: visible;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	&:after {
		position: absolute;
		top: 0;
		left: 0;
		height: -webkit-fill-available;
		width: -webkit-fill-available;
		background-color: rgba(0, 0, 0, 0.6);
		content: ' ';
		z-index: -1;
	}
`;

export const Loading = () => {
	return (
		<LoadingSpinner>
			<LoadingInner>
				<LoadingCircle
					zindex='inherit'
					diameter={13}
					bg='117, 93, 99, .9'
					top={100}
					left={100}
					transform={10}
				/>
				<LoadingCircle
					zindex='1001'
					diameter={8}
					bg='86,79,114,0.9'
					top={50}
					left={50}
					transform={50}
				/>
			</LoadingInner>
		</LoadingSpinner>
	);
};
