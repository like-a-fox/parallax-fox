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

function ProjectLink({ id, fluid: { src, originalName } }) {
	let tile = tile_data[`${originalName.split('_')[0]}`];
	let { path, title, subtitle } = tile;
	return (
		<LinkWrapper key={id} to={path} bg={src}>
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
		src: PropTypes.string,
		originalName: PropTypes.string,
	}),
};

function Projects({ ...parallaxProps }) {
	const data = useStaticQuery(graphql`
		query TileBackgroundImages {
			allImageSharp(
				filter: { fluid: { originalName: { glob: "*_background.{png,jpg,jpeg}" } } }
			) {
				edges {
					node {
						id
						fluid {
							src
							originalName
						}
					}
				}
			}
		}
	`);
	return (
		<Content className="projects" speed={0.4} factor={2} {...parallaxProps}>
			<Inner>
				<Title>Projects</Title>
				<ProjectsWrapper>
					{data.allImageSharp.edges.map(({ node }) => (
						<ProjectLink key={node.id} {...node} />
					))}
				</ProjectsWrapper>
			</Inner>
		</Content>
	);
}

Projects.propTypes = {
	offset: PropTypes.number,
	minHeight: PropTypes.string,
	mobileHeight: PropTypes.string,
};
Projects.defaultProps = {
	offset: 1,
};

export default memo(Projects);
