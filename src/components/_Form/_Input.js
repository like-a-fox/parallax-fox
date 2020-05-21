import React, { forwardRef, useState } from 'react';
import { Input, InputWrapper, InputLabel } from './_FormStyles';
import PropTypes from 'prop-types';

const StandardInput = forwardRef(function StandardInput(props, inputRef) {
	const { label, value, required, email, ...inputProps } = props;
	const [inputValue, setInputValue] = useState(() => value || '');
	const [errors, setErrors] = useState(false);
	const checkInput = () => {
		const empty_regex_str = /\w+/i;
		const email_regex_str = /\S+@\S+\.\S+/i;
		let validEmail = !email || email_regex_str.test(inputValue);
		let validRequired = !required || empty_regex_str.test(inputValue);
		setErrors(!validEmail || !validRequired);
	};
	const onFocus = () => {
		if (errors) {
			setErrors(false);
		}
	};
	const onChange = (event) => {
		const { value } = event.target;
		if (value !== inputValue) {
			setInputValue(value);
		}
	};

	const onBlur = (event) => {
		const { value } = event.target;
		if (value !== inputValue) {
			setInputValue(value);
		}
		checkInput(value);
	};
	return (
		<InputWrapper>
			<InputLabel required={required} error={errors}>
				{label}
			</InputLabel>
			<Input
				error={errors}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				value={inputValue}
				ref={inputRef}
				{...inputProps}
			/>
		</InputWrapper>
	);
});

StandardInput.propTypes = {
	email: PropTypes.bool,
	label: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
};

StandardInput.defaultProps = {
	type: 'text',
	required: false,
	email: false,
};

export default StandardInput;
