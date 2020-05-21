import PropTypes from 'prop-types';
import React from 'react';
import { default as ProjectsDivider } from './_ProjectsDivider';
import { default as ProjectTiles } from './_ProjectTiles';
import { ProjectsWrapper } from './_ProjectsStyles';
import { Inner, Content, Title } from '../../styles';

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {number} props.factor
 * @param {number} props.offset
 */
const Projects = (props) => {
	return (
		<>
			<ProjectsDivider />
			<Content className={'projects'} {...props}>
				<Inner>
					<Title>Projects</Title>
					<ProjectsWrapper>
						<ProjectTiles />
					</ProjectsWrapper>
				</Inner>
			</Content>
		</>
	);
};

Projects.propTypes = {
	factor: PropTypes.number,
	offset: PropTypes.number,
};

Projects.defaultProps = {
	factor: 2,
	offset: 1,
};

export default Projects;