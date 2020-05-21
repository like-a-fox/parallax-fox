import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Content, Inner, Title } from '../styles';

/**
 * @component SectionTemplate
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {element} props.Divider
 * @param {oneOfType} props.children
 * @param {string} props.contentClassName
 * @param {string} props.sectionTitle
 */
const SectionTemplate = (props) => {
	const {
		Divider,
		children,
		contentClassName,
		sectionTitle,
		...extraProps
	} = props;
	return (
		<>
			{Divider}
			<Content className={contentClassName} {...extraProps}>
				<Inner>
					<Title>{sectionTitle}</Title>
					{children}
				</Inner>
			</Content>
		</>
	);
};

SectionTemplate.propTypes = {
	Divider: PropTypes.element,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]).isRequired,
	contentClassName: PropTypes.string.isRequired,
	sectionTitle: PropTypes.string.isRequired,
};
SectionTemplate.defaultProps = {
	Divider: null,
};
export default memo(SectionTemplate);
