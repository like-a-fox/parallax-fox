import React from 'react';

import {
	Inner,
	Content,
	Title,
	LinkWrapper,
	LinkText,
	TitleWrapper,
	ProjectsWrapper,
	UpperDivider,
	LowerDivider,
} from '../styles';

import { useProjectTiles } from '../graphql';

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
