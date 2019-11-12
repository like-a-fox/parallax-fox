import styled from 'styled-components';

export const AboutHero = styled.div`
	${tw`flex font-mono text-primary flex-row items-center`};
`;
export const Avatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;
export const AboutSub = styled.span`
	${tw`text-primary font-mono pl-6 lg:pl-12 text-xl lg:text-2xl xl:text-3xl`};
	text-transform: uppercase;
	align-items: center;
	letter-spacing: -1px;
`;
export const AboutDesc = styled.p`
	${tw`text-tertiary text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};
`;
