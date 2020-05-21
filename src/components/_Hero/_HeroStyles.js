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
