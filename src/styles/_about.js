import styled from 'styled-components';

export const AboutHero = styled.div`
	${tw`flex font-mono flex-col lg:flex-row items-center`};
`;
export const Avatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;
export const AboutSub = styled.span`
	${tw`text-indigo-lightest pt-12 font-mono lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
	text-transform: uppercase;
	letter-spacing: -1px;
`;
export const AboutDesc = styled.p`
	${tw`text-indigo-lighter text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};
`;
