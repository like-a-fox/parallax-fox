import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from '../../styles';
import styled, { keyframes, css } from 'styled-components';

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
const waveAnimation = (length) => css`
	animation: ${wave} ${length} linear infinite alternate;
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
const ContactDivider = (props) => {
	return (
		<Divider {...props}>
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

ContactDivider.propTypes = {
	className: PropTypes.string,
	factor: PropTypes.number,
	fill: PropTypes.string,
	offset: PropTypes.number,
};

ContactDivider.defaultProps = {
	className: 'wave',
	factor: 1.5,
	offset: 5.5,
	fill: 'rgba(50, 50, 65, .9)',
};

export default ContactDivider;
