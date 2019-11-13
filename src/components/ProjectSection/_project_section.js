import React, { memo } from 'react';
import { default as Projects } from './_projects';
import { default as ProjectsDivider } from './_projects_divider';

const ProjectSection = ({ ...extraParallax }) => (
	<>
		<Projects factor={2} offset={1} {...extraParallax} />
		<ProjectsDivider {...extraParallax} />
	</>
);

export default memo(ProjectSection);
