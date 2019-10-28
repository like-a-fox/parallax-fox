import React, { useState, memo } from 'react';
import { useFirebase } from 'gatsby-plugin-firebase';
import { formatForm } from '../../hooks';
import {
	TextInput,
	TextAreaInput,
	FormWrapper,
	email_regex,
	email_regex_str,
} from '.';

const formState = {
	name: '',
	email: '',
	message: '',
};

function ContactForm() {
	const [form, formChange] = useState({ ...formState });
	const [emailError, checkEmail] = useState(false);
	const [clicked, toggleClicked] = useState(false);
	useFirebase((firebase) => {
		if (clicked) {
			const data = formatForm(form)
			firebase.database().ref('/messages').push({ ...data });
			toggleClicked(false);
			resetForm();
		}
	}, [clicked, form])
	const resetForm = () => formChange({ ...formState });
	const handleSubmit = () => {
		toggleClicked(true);
	}
	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'email' && value !== form[name]) {
			checkEmail(!email_regex.test(value));
		}
		formChange({ [name]: value });
	};
	const handleFocus = () => checkEmail(false);

	return (
		<FormWrapper
			handleFocus={handleFocus}
			handleChange={handleChange}
			resetForm={resetForm}
			handleSubmit={handleSubmit}
			form={form}>
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
