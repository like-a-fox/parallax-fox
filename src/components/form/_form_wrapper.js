import React, { useRef, memo } from 'react';
import { Form, FormButton } from '../../styles';
import PropTypes from 'prop-types';

function FormWrapper({ children, handleChange, handleSubmit }) {
  const formRef = useRef(null);
  return (
    <Form ref={formRef} onChange={handleChange}>
      {children}
      <FormButton submit onClick={handleSubmit}>
        Send your stupidity
      </FormButton>
    </Form>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.any,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default memo(FormWrapper);
