import React, { useRef, memo } from 'react';
import { Input, InputWrapper, InputLabel } from '../../styles';
import PropTypes from 'prop-types';

function TextInput(props) {
  const {
    label = 'test',
    type,
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
  } = props;
  const inputEl = useRef(null);
  return (
    <InputWrapper>
      <InputLabel color={color} fontSize={fontSize}>
        {label}
      </InputLabel>
      <Input
        type={type}
        error={error}
        padding={padding}
        className={className}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        width={width}
        height={height}
        underlineColor={underlineColor}
        ref={inputEl}
      />
    </InputWrapper>
  );
}

TextInput.propTypes = {
  className: PropTypes.any,
  color: PropTypes.string,
  error: PropTypes.bool,
  fontSize: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  padding: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  underlineColor: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default memo(TextInput);
