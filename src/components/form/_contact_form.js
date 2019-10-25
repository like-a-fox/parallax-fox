import React, { useState, memo } from 'react';
import {
  TextInput,
  TextAreaInput,
  FormWrapper,
  email_regex,
  email_regex_str,
} from '.';
import { useFirebase } from 'gatsby-plugin-firebase';

const formState = {
  name: '',
  email: '',
  message: '',
};

function ContactForm() {
  const [form, formChange] = useState({ ...formState });
  const [contact, setContact] = useState(null);
  const [emailError, checkEmail] = useState(false);
  const [firebaseSubmit, setFirebase] = useState();
  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email' && value !== form[name]) {
      checkEmail(!email_regex.test(value));
    }
    formChange({ [name]: value });
  };
  useFirebase(
    firebase =>
      setFirebase(() => {
        if (contact) {
          firebase
            .database()
            .ref('/messages')
            .push(contact);
        }
        setContact(null);
      }),
    [contact]
  );
  const handleSubmit = () => {
    setContact(() => {
      const { name, email, message } = form;
      return {
        name,
        email,
        message,
        date: Date.now(),
        html: `
                          <div>From: ${name}</div>
                          <div>Email: <a href="mailto:${email}">${email}</a></div>
                          <div>Date: ${Date.now()}</div>
                          <div>Message: ${message}</div>
                          `,
      };
    });
    firebaseSubmit();
  };
  const handleFocus = () => checkEmail(false);
  return (
    <FormWrapper
      handleFocus={handleFocus}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    >
      <TextInput
        name="name"
        label="Name"
        type="text"
        required
        value={form.name}
        placeholder="Stupid Name Here"
        width={100}
      />
      <TextInput
        name="email"
        label="Email"
        type="email"
        required
        pattern={email_regex_str}
        error={emailError}
        value={form.email}
        placeholder="Stupid Email..."
        width={100}
      />
      <TextAreaInput
        name="message"
        label="Message"
        required
        value={form.message}
        placeholder="Stupid Message..."
      />
    </FormWrapper>
  );
}

export default memo(ContactForm);
