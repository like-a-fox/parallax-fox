import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { default as ProjectsLink } from './_ProjectsLink';

const ProjectTiles = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					tileData {
						pathname
						subtitle
						title
					}
				}
			}
			allImageSharp(
				filter: {
					fluid: { originalName: { glob: "*_background.{png,jpg,jpeg}" } }
				}
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

	return data.allImageSharp.edges.map(({ node }, index) => {
		let tile = data.site.siteMetadata.tileData.find(
			({ pathname }) =>
				pathname && pathname === node.fluid.originalName.split('_')[0]
		);
		return <ProjectsLink key={node.id} node={node} tile={tile} delay={index} />;
	});
};

export default ProjectTiles;
