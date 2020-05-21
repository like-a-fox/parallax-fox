import styled from 'styled-components';
import { Link } from 'gatsby';
import { Divider } from '../../styles';

export const ProjectsWrapper = styled.div`
	${tw`flex-col flex md:flex-row md:inline-flex md:flex-wrap justify-between`};
`;

export const TitleWrapper = styled.div`
	${tw`text-tertiary rounded-sm overflow-hidden relative uppercase text-xl md:text-2xl xl:text-3xl font-mono p-4`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	&:before {
		${tw`absolute  -z-1 inset-0 h-full w-full`}
		content: ' ';
		filter: blur(1px);
	}
`;

export const LinkWrapper = styled(Link)`
	${tw`shadow-lg mx-0 my-1 md:m-2 min-h-sm w-full  md:min-h-wrap md:w-1/2 relative no-underline rounded-lg text-white flex-col overflow-hidden flex-grow flex justify-end`};
	flex-basis: calc(50% - 1rem);
	transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	filter: grayscale(30%);
	&:before {
		${tw`bg-center bg-no-repeat bg-cover absolute -z-1 h-full w-full inset-0`}
		content: ' ';
		background-image: url(${(props) => props.bg});
		filter: opacity(0.85) grayscale(70%);
	}
	&:hover {
		transform: translateY(-5px);
		&:before {
			filter: grayscale(30%);
		}
	}
`;

export const DividerMiddle = styled(Divider)`
	opacity: ${({ flipped }) => (!flipped ? 'initial' : 0.5)};
	clip-path: ${({ flipped }) =>
		!flipped
			? ' polygon(0 0%,100% 11%,100% 78%,0% 100%)'
			: ' polygon(0 37%,75% 48%,100% 10%,100% 10%)'};
`;

export const LinkText = styled.div`
	${tw`opacity-85 font-mono text-tertiary text-sm md:text-base`};
	text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	font-weight: 200;
	letter-spacing: -1px;
`;