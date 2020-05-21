import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { default as FormActions } from './_Actions';
import { Form } from '../../styles';

const FormWrapper = (props) => {
	const { children, handleBlur, handleFocus, submitted, ...formProps } = props;

	return (
		<Form onBlur={handleBlur} onFocus={handleFocus} submitted={submitted}>
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
