import { useState, useCallback } from 'react';
import { default as useFirebase } from './_useFirebase';

export const email_regex_str = '\\S+@\\S+\\.\\S+';
export const empty_regex_str = '[A-Za-z0-9]{1,20}';
export const email_regex = new RegExp(email_regex_str);
export const empty_regex = new RegExp(empty_regex_str);

export const handleForm = ({ name, email, message }) => ({
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

export default function useSendFire() {
	const [form, changeInputs] = useState({ name: '', email: '', message: '' });
	const [submitted, setFormStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const firebase = useFirebase();
	function handleReset() {
		changeInputs({ name: '', email: '', message: '' });
		setFormStatus(false);
	}
	const handleSubmit = useCallback(() => {
		let valid =
			form &&
			form.name &&
			form.email &&
			!empty_regex.test(form.name) &&
			!email_regex.test(form.email) &&
			!submitted;
		if (valid) {
			let formattedInputs = handleForm(form);
			firebase.database().ref('/messages').push(formattedInputs);
			setFormStatus(true);
		} else {
			setErrorMessage(
				'Failed to submit your form please check that all input fields are valid'
			);
		}
	}, [form, setErrorMessage, firebase, setFormStatus, submitted]);

	const handleFocus = () => {
		if (errorMessage) {
			setErrorMessage('');
		}
	};
	const handleBlur = (event) => {
		const { value, name } = event.target;
		if (form[name] !== value) {
			changeInputs({ ...form, [name]: value });
		}
	};
	return {
		...form,
		submitted,
		errorMessage,
		handleReset,
		handleSubmit,
		handleFocus,
		handleBlur,
	};
}

