import React, {  memo, forwardRef } from 'react';
import { Input, InputWrapper, InputLabel } from '../../styles';
import {empty_regex_str} from '.';
import PropTypes from 'prop-types';

function TextInput(
  {
    label = 'test',
    type,
    className,
    name,
    value,
    placeholder,
    width,
    pattern=empty_regex_str,
    color,
    height,
    underlineColor,
    error,
    padding,
    fontSize,
    required = false,
  },
  inputRef
) {
  if (required) {
    required = 'required';
  }
  return (
    <InputWrapper>
      <InputLabel error={error} color={color} fontSize={fontSize}>
        {label}
      </InputLabel>
      <Input
        pattern={pattern}
        type={type}
        error={error}
        padding={padding}
        className={className}
        name={name}
        required={required}
        defaultValue={value}
        placeholder={placeholder}
        width={width}
        height={height}
        underlineColor={underlineColor}
        ref={inputRef}
      />
    </InputWrapper>
  );
}
// eslint-disable-next-line no-func-assign
TextInput = forwardRef(TextInput);

TextInput.propTypes = {
  className: PropTypes.any,
  color: PropTypes.string,
  error: PropTypes.bool,
  fontSize: PropTypes.string,
  height: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  padding: PropTypes.string,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  underlineColor: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number
};

export default memo(TextInput);
