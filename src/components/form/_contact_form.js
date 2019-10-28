import React, { useState, memo, useEffect } from 'react';
import { useFirebase } from '../../firebase';
import { TextInput, TextAreaInput, email_regex, email_regex_str } from '.';

import { Form } from '../../styles';
import { default as FormButtons } from './_form_buttons';

export const formatForm = ({
	name = '',
	email = 'boop@doop.poop',
	message = '',
}) => ({
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
});
const initalForm = {
	name: '',
	email: '',
	message: '',
};
function ContactForm() {
	const [firebase] = useFirebase();
	const [form, formChange] = useState(initalForm);
	const [emailError, checkEmail] = useState(false);
	const [clicked, toggleClicked] = useState(false);
	const resetForm = () => {
		formChange({ name: '', email: '', message: '' });
	};

	useEffect(() => {
		if (clicked && firebase) {
			firebase
				.database()
				.ref('/messages')
				.push(form);
			toggleClicked(false);
			resetForm();
		}
	}, [clicked, form, firebase]);

	const handleSubmit = () => {
		formChange(formatForm(form));
		toggleClicked(true);
	};
	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		formChange({ ...form, [name]: value });
		if (name === 'email') {
			checkEmail(!email_regex.test(value));
		}
	};
	const handleFocus = () => checkEmail(false);

	return (
		<Form onFocus={handleFocus}>
			<TextInput
				name="name"
				label="Name"
				type="text"
				required
				handleChange={handleChange}
				value={form.name}
				placeholder="Stupid Name Here"
				width={100}
			/>
			<TextInput
				name="email"
				label="Email"
				type="email"
				required
				handleChange={handleChange}
				pattern={email_regex_str}
				error={emailError}
				value={form.email}
				placeholder="Stupid Email..."
				width={100}
			/>
			<TextAreaInput
				name="message"
				label="Message"
				handleChange={handleChange}
				required
				value={form.message}
				placeholder="Stupid Message..."
			/>
			<FormButtons handleSubmit={handleSubmit} resetForm={resetForm} />
		</Form>
	);
}

export default memo(ContactForm);
