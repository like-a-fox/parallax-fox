import React, { useState, memo } from 'react';
import { TextInput, TextAreaInput, FormWrapper } from '.';

function ContactForm() {
  const [formState, setFormValue] = useState({
    email: '',
    name: '',
    message: '',
  });
  const handleSetValue = ({ target }) =>
    setFormValue({ ...formState, [target.name]: target.value });

  return (
    <FormWrapper handleChange={handleSetValue}>
      <TextInput
        name="name"
        label="Name"
        type="text"
        value={formState.name}
        placeholder="Stupid Name Here"
        width={100}
      />
      <TextInput
        name="email"
        label="Email"
        type="email"
        value={formState.email}
        placeholder="Stupid Email..."
        width={100}
      />
      <TextAreaInput
        name="message"
        label="Message"
        value={formState.message}
        placeholder="Stupid Message..."
      />
    </FormWrapper>
  );
}

export default memo(ContactForm);
