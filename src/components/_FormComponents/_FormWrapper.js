import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { default as FormActions } from './_FormActions';
import { Form } from '../../styles';

/**
 * @component FormWrapper
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {oneOfType} props.children
 * @param {function} props.handleReset
 * @param {function} props.handleSubmit
 * @param {function} props.handleBlur
 * @param {function} props.handleFocus
 * @param {boolean} props.submitted
 */
const FormWrapper = (props) => {
	const { children, handleBlur, handleFocus, submitted, ...formProps } = props;

	return (
		<Form onBlur={handleBlur} onFocus={handleFocus}>
			{!submitted ? children : null}
			<FormActions submitted={submitted} {...formProps} />
		</Form>
	);
};

FormWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	handleBlur: PropTypes.func,
	handleFocus: PropTypes.func,
	submitted: PropTypes.bool,
};

FormWrapper.defaultProps = {
	submitted: false,
};

export default memo(FormWrapper);
