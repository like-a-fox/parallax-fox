import React from 'react';
import { DividerMiddle } from './_ProjectsStyles';

const ProjectsDivider = (props) => (
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

export default ProjectsDivider;
