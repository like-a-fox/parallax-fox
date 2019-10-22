import React, { memo } from 'react';
import { Form, FormButton } from '../../styles';
import PropTypes from 'prop-types';

function FormWrapper({
  formRef,
  handleSubmit,
  children,
  handleFocus,
  handleChange,
  handleBlur,
}) {
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

FormWrapper.propTypes = {
  children: PropTypes.any,
  formRef: PropTypes.any,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default memo(FormWrapper);
