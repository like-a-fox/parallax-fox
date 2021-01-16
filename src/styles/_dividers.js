import React from 'react';
import styled from 'styled-components';
import { waveAnimation, fade } from './_animations';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

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
