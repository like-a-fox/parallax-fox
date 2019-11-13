import React, { forwardRef, memo } from 'react';
import { TextArea, InputWrapper, InputLabel } from '../../styles';
import PropTypes from 'prop-types';

function TextAreaInput(props, textInputEl) {
	const {
		label = 'message',
		className,
		name,
		value,
		placeholder,
		width,
		color,
		height,
		underlineColor,
		error,
		padding,
		fontSize,
		handleChange,
	} = props;
	return (
		<InputWrapper>
			<InputLabel color={color} fontSize={fontSize}>
				{label}
			</InputLabel>
			<TextArea
				error={error}
				padding={padding}
				className={className}
				name={name}
				defaultValue={value}
				placeholder={placeholder}
				width={width}
				onChange={handleChange}
				height={height}
				underlineColor={underlineColor}
				ref={textInputEl}
			/>
		</InputWrapper>
	);
}

// eslint-disable-next-line no-func-assign
TextAreaInput = forwardRef(TextAreaInput);

TextAreaInput.propTypes = {
	className: PropTypes.any,
	color: PropTypes.string,
	error: PropTypes.bool,
	fontSize: PropTypes.string,
	handleChange: PropTypes.any,
	height: PropTypes.number,
	label: PropTypes.string,
	name: PropTypes.string,
	padding: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	underlineColor: PropTypes.string,
	value: PropTypes.string,
	width: PropTypes.number,
};

export default memo(TextAreaInput);
