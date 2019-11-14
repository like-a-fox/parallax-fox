import styled from 'styled-components';

export const AboutHero = styled.div`
	${tw`flex font-mono text-primary flex-row items-center`};
`;
export const Avatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;
export const AboutSub = styled.span`
	${tw`text-pink uppercase text-justify justify-start items-stretch h-32 xl:48 flex font-mono pl-6 lg:pl-12 text-lg  lg:text-2xl xl:text-3xl `};
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.5));
	letter-spacing: -1px;
`;
export const AboutDesc = styled.p`
	${tw`text-main xl:text-2xl font-mono pt-6 md:pt-12 text-justify`};
`;
