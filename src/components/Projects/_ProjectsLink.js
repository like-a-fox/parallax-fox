import React from 'react';
import PropTypes from 'prop-types';
import { LinkWrapper, LinkText, TitleWrapper } from './_ProjectsStyles';

const ProjectLink = (props) => {
	const {
		node: {
			id,
			fluid: { src },
		},
		tile: { title, subtitle },
	} = props;
	return (
		<LinkWrapper key={id} to={'/'} bg={src}>
			<TitleWrapper>
				{title}
				<LinkText>{subtitle}</LinkText>
			</TitleWrapper>
		</LinkWrapper>
	);
};

ProjectLink.propTypes = {
	node: PropTypes.shape({
		id: PropTypes.string,
		fluid: PropTypes.shape({
			src: PropTypes.string,
		}),
	}),
	tile: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
	}),
};

export default ProjectLink;
