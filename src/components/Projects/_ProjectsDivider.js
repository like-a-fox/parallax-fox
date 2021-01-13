import PropTypes from 'prop-types';
import React from 'react';
import { ProjectsUpperDivider, ProjectsLowerDivider } from './_ProjectsStyles';

export const UpperDivider = (props) => {
	return <ProjectsUpperDivider {...props} />;
};

UpperDivider.propTypes = {
	factor: PropTypes.number,
	offset: PropTypes.number,
	speed: PropTypes.number,
};
UpperDivider.defaultProps = {
	factor: 1.7,
	speed: 0.3,
	offset: 1,
};

export const LowerDivider = (props) => {
	return <ProjectsLowerDivider {...props} />;
};

LowerDivider.propTypes = {
	factor: PropTypes.number,
	offset: PropTypes.number,
	speed: PropTypes.number,
};
LowerDivider.defaultProps = {
	factor: 1.5,
	speed: -0.5,
	offset: 4.2,
};
