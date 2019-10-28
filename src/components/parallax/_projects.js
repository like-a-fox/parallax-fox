import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
	ProjectsWrapper,
	LinkWrapper,
	TitleWrapper,
	Text,
	Title,
	Content,
	Inner,
} from '../../styles';
import { tile_data } from './_tile_data';
import { MiddleProjectsDivider } from './_dividers';

function ProjectLink({ id, fluid: { srcWebp, originalName } }) {
	let tile = tile_data[`${originalName.split('_')[0]}`];
	let { path, title, subtitle } = tile;
	return (
		<LinkWrapper key={id} to={path} bg={srcWebp}>
			<TitleWrapper>
				{title}
				<Text>{subtitle}</Text>
			</TitleWrapper>
		</LinkWrapper>
	);
}

ProjectLink.propTypes = {
	id: PropTypes.any,
	fluid: PropTypes.shape({
		srcWebp: PropTypes.string,
		originalName: PropTypes.string,
	}),
};

// eslint-disable-next-line no-func-assign
ProjectLink = memo(ProjectLink);

export default function Projects() {
	const data = useStaticQuery(graphql`
		query TileBackgroundImages {
			__typename
			allImageSharp(
				filter: { fluid: { originalName: { glob: "*_background*" } } }
			) {
				nodes {
					id
					fluid(fit: COVER) {
						srcWebp
						originalName
					}
				}
			}
		}
	`);
	return (
		<>
			<MiddleProjectsDivider />
			<Content className="projects" speed={0.4} offset={`${1}.2`} factor={2}>
				<Inner>
					<Title>Projects</Title>
					<ProjectsWrapper>
						{data.allImageSharp.nodes.map((project) => (
							<ProjectLink key={project.id} {...project} />
						))}
					</ProjectsWrapper>
				</Inner>
			</Content>
		</>
	);
}
