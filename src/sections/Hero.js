import React from 'react';
import { Content, Subtitle, Divider } from '../styles';
import styled from 'styled-components';

export const BigTitle = styled.h1`
	${tw`text-2xl lg:text-3xl font-thin xl:text-4xl h-8 flex items-center uppercase justify-start font-mono text-primary mb-3`};
	text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	letter-spacing: -2px;
	i {
		${tw`text-secondary h-full text-base inline-flex items-start `}
	}
`;

export const WrapperDiv = styled.div`
	${tw`w-full xl:w-2/3`};
`;

const Hero = () => {
	return (
		<>
			<Content className={'hero'} offset={0}>
				<WrapperDiv>
					<BigTitle>
						Design. <i>not aga!n</i>
					</BigTitle>
					<Subtitle>
						I&apos;m Derek, and if one more person asks me to make a wordpress
						site, or use jquery, I&apos;m gonna lose it. Seriously... The 90s
						called and they want their shitty CMS and JavaScript library back.
						<br /> <em>&copy; {'Like A Fox Development'} </em>
					</Subtitle>
				</WrapperDiv>
			</Content>
			<Divider
				bg={
					'linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)'
				}
				clipPath={'polygon(0 0%,100% 0%,100% 100%,0 15%)'}
				offset={0}
				speed={0.5}
			/>
		</>
	);
};

export default Hero;
