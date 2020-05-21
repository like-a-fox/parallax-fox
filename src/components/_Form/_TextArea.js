import React, { memo, forwardRef, useState } from 'react';
import { TextArea, InputWrapper, InputLabel } from './_FormStyles';
import PropTypes from 'prop-types';

/**
 * @component StandardTextArea
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.className
 * @param {boolean} props.error
 * @param {string} props.label
 * @param {string} props.name
 * @param {function} props.onBlur
 * @param {string} props.placeholder
 * @param {boolean} props.required
 * @param {string} props.type
 * @param {any} props.value
 */
const StandardTextArea = forwardRef(function StandardTextArea(
	{ label, type, className, name, value, placeholder, error, required, onBlur },
	inputRef
) {
	const [inputValue, setInputValue] = useState(() => value || '');
	const [errors, setErrors] = useState(() => !!error);
	const checkInput = (event) => {
		const { value } = event.target;
		const empty_regex_str = /[A-Za-z0-9]{1,20}/gi;
		const errorCheck = empty_regex_str.test(value);
		if (required && errorCheck) {
			setErrors(errorCheck);
		}
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

	const handleBlur = (event) => {
		if (onBlur) {
			onBlur(event);
		}
		checkInput(event);
	};
	return (
		<InputWrapper>
			<InputLabel required={required} error={errors}>
				{label}
			</InputLabel>
			<TextArea
				type={type}
				error={errors}
				className={className}
				name={name}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={handleBlur}
				defaultValue={value}
				placeholder={placeholder}
				ref={inputRef}
			/>
		</InputWrapper>
	);
});

StandardTextArea.propTypes = {
	className: PropTypes.string,
	error: PropTypes.bool,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onBlur: PropTypes.func,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.any,
};

StandardTextArea.defaultProps = {
	type: 'text',
	error: false,
	required: false,
};

export default memo(StandardTextArea);
