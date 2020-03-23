import React,{memo,useMemo} from 'react';
import {useStaticQuery,graphql} from 'gatsby';
import PropTypes from 'prop-types';
import {
	ProjectsWrapper,
	LinkWrapper,
	TitleWrapper,
	Text,
	DividerMiddle,
} from '../../styles';
import {default as SectionTemplate} from './_SectionTemplate';

const ProjectsDivider=(props) => (
	<>
		<DividerMiddle
			factor={1.7}
			speed={0.3}
			offset={1}
			bg='linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)'
			{...props}
		/>

		<DividerMiddle
			factor={1.5}
			speed={-0.1}
			flipped='true'
			offset={4.2}
			bg='linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)'
			{...props}
		/>
	</>
);

/**
 * @component ProjectLink
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {{id: string,fluid: {src: string}}} props.node
 * @param {shap} props.tile
 */
const ProjectLink=memo(function ProjectLink(props) {
	let {
		id,
		fluid: {src},
	}=props.node;
	let {path,title,subtitle}=props.tile;
	return (
		<LinkWrapper key={id} to={path} bg={src}>
			<TitleWrapper>
				{title}
				<Text>{subtitle}</Text>
			</TitleWrapper>
		</LinkWrapper>
	);
});

ProjectLink.propTypes={
	node: PropTypes.shape({
		id: PropTypes.string,
		fluid: PropTypes.shape({
			src: PropTypes.string,
		}),
	}),
	tile: PropTypes.shap({
		path: PropTypes.string,
		title: PropTypes.string,
		subtitle: PropTypes.string,
	}),
};

const ProjectsSection=(props) => {
	const data=useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					tileData {
						angular {
							path
							subtitle
							title
						}
						firebase {
							path
							subtitle
							title
						}
						gatsbyjs {
							path
							subtitle
							title
						}
						graphql {
							subtitle
							path
							title
						}
						react {
							path
							subtitle
							title
						}
						rxjs {
							path
							subtitle
							title
						}
					}
				}
			}
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
	const Tiles=useMemo(() => {
		return data.allImageSharp.edges.map(({node}) => {
			let tile=
				data.site.siteMetadata.tileData[`${node.originalName.split('_')[0]}`];
			return <ProjectLink key={node.id} node={node} tile={tile} />;
		});
	},[data]);
	const Divider=<ProjectsDivider {...props} />;
	return (
		<SectionTemplate
			factor={2}
			offset={1}
			Divider={Divider}
			contentClassName={'projects'}
			sectionTitle={'Projects'}
			{...props}>
			<ProjectsWrapper>{Tiles}</ProjectsWrapper>
		</SectionTemplate>
	);
};

export default memo(ProjectsSection);
