import PropTypes from 'prop-types';
import React from 'react';
import { Content, Inner, Title } from '../../styles';

const ContactSection = (props) => {
	const { children, ...extraProps } = props;
	return (
		<Content className={'contact'} {...extraProps}>
			<Inner>
				<Title>Get In Touch</Title>
				{children}
			</Inner>
		</Content>
	);
};

ContactSection.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.array,
	]),
	factor: PropTypes.number,
	offset: PropTypes.number,
};
ContactSection.defaultProps = {
	factor: 1,
	offset: 5.7,
};

export default ContactSection;
