import React, { useState, memo } from 'react';
import { TextInput, TextAreaInput, FormWrapper, baseValidation } from '.';

function ContactForm() {
  const [formState, setFormValue] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [invalidInputs, setValidCheck] = useState({
    email: false,
    name: false,
    message: false,
  });
  const checkInput = ({ target: { name, value } }) =>
    setValidCheck({
      ...invalidInputs,
      [name]: !baseValidation(value, name === 'email'),
    });
  const focusReset = ({ target: { name } }) =>
    setValidCheck({ ...invalidInputs, [name]: false });
  const handleSetValue = ({ target }) =>
    setFormValue({ ...formState, [target.name]: target.value });
  return (
    <FormWrapper
      handleFocus={focusReset}
      handleBlur={checkInput}
      handleChange={handleSetValue}
    >
      <TextInput
        name="name"
        label="Name"
        type="text"
        error={invalidInputs.name}
        value={formState.name}
        placeholder="Stupid Name Here"
        width={100}
      />
      <TextInput
        name="email"
        label="Email"
        type="email"
        error={invalidInputs.email}
        value={formState.email}
        placeholder="Stupid Email..."
        width={100}
      />
      <TextAreaInput
        name="message"
        label="Message"
        error={invalidInputs.message}
        value={formState.message}
        placeholder="Stupid Message..."
      />
    </FormWrapper>
  );
}

export default memo(ContactForm);
