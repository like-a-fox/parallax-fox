import React, { memo, forwardRef } from 'react';
import { Form, FormButton } from '../../styles';
import PropTypes from 'prop-types';

function FormWrapper(
  { handleSubmit, children, handleFocus, handleChange, handleBlur },
  formRef
) {
  return (
    <Form
      ref={formRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      {children}
      <FormButton submit onClick={handleSubmit}>
        Send your stupidity
      </FormButton>
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
