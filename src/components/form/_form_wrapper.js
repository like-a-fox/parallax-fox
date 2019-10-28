import React, { memo, forwardRef } from 'react';
import { Form } from '../../styles';
import { default as FormButtons } from './_form_buttons';
import PropTypes from 'prop-types';

function FormWrapper(
	{ children, handleFocus, handleChange, handleBlur, ...extraProps },
	formRef
) {
	return (
		<Form
			ref={formRef}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={handleChange}>
			{children}
			<FormButtons {...extraProps} />
		</Form>
	);
}

// eslint-disable-next-line no-func-assign
FormWrapper = forwardRef(FormWrapper);

FormWrapper.propTypes = {
	children: PropTypes.any,
	formRef: PropTypes.any,
	handleBlur: PropTypes.func,
	handleChange: PropTypes.func,
	handleFocus: PropTypes.func,
	handleSubmit: PropTypes.func,
};

export default memo(FormWrapper);
