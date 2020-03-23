import PropTypes from 'prop-types';
import React,{memo} from 'react';
import {Content,Inner,Title} from '../styles';

const SectionTemplate=(props)=> {
	const {
		Divider = null,
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
}

SectionTemplate.propTypes = {
	Divider: PropTypes.element,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]).isRequired,
	contentClassName: PropTypes.string.isRequired,
	sectionTitle: PropTypes.string.isRequired,
};

export default memo(SectionTemplate);
