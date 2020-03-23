import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { default as FormActions } from './_FormActions';
import { Form } from '../../styles';

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {oneOfType} props.children
 * @param {function} props.handleReset
 * @param {function} props.handleSubmit
 * @param {boolean} props.submitted
 */
const FormWrapper = (props) => {
	const { children, handleSubmit, handleReset, submitted } = props;
	const FormButtons = !submitted ? (
		<FormActions handleSubmit={handleSubmit} handleReset={handleReset} />
	) : null;
	return (
		<Form>
			{children}
			{FormButtons}
		</Form>
	);
};


FormWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  handleReset: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitted: PropTypes.bool
};

FormWrapper.defaultProps = {
	submitted: false,
};

export default memo(FormWrapper);

