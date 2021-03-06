import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import {
	Inner,
	Content,
	Title,
	LinkText,
	UpperDivider,
	LowerDivider,
} from '../styles';

import { useProjectTiles } from '../graphql';

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
	animation-delay: 2s;
	flex-basis: calc(50% - 1rem);
	transition: transform 1.4s;
	transition-delay: ${(props) => (props.delay + 1) * 50}ms;
	filter: grayscale(30%);
	&:before {
		${tw`bg-center bg-no-repeat bg-cover absolute -z-1 h-full w-full inset-0`}
		content: ' ';
		background-image: url(${(props) => props.bg});
		filter: opacity(0.85) grayscale(70%);
	}
	&:hover {
		transform: translateY(-7px);
		&:before {
			filter: grayscale(30%);
		}
	}
`;

const Projects = () => {
	const tiles = useProjectTiles();
	const ProjectTiles = tiles.map(({ id, src, title, subtitle }) => (
		<LinkWrapper key={id} to={'/'} bg={src}>
			<TitleWrapper>
				{title}
				<LinkText>{subtitle}</LinkText>
			</TitleWrapper>
		</LinkWrapper>
	));
	return (
		<>
			<UpperDivider />
			<Content className={'projects'} factor={2} offset={1}>
				<Inner>
					<Title>Projects</Title>
					<ProjectsWrapper>{ProjectTiles}</ProjectsWrapper>
				</Inner>
			</Content>
			<LowerDivider />
		</>
	);
};

export default Projects;
