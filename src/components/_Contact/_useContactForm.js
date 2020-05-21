import { useState, useCallback } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { useSnackbar } from 'notistack';
export const email_regex_str = '\\S+@\\S+\\.\\S+';
export const empty_regex_str = '[A-Za-z0-9]+';
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
const baseValidation = (field) =>
	field !== null && field !== undefined && empty_regex.test(field);
const validateForm = (form) => {
	const { name, email, message } = form;
	let errors = [];
	if (!baseValidation(name)) {
		errors.push('Name Input has errors');
	}
	if (!baseValidation(email) || !email_regex.test(email)) {
		errors.push('Email Input has errors');
	}
	if (!baseValidation(message)) {
		errors.push('Message Input has errors');
	}
	return errors;
};

const FORM_INITIAL_STATE = {
	name: '',
	email: '',
	message: '',
};

export const useContactForm = () => {
	const [form, changeInputs] = useState({ ...FORM_INITIAL_STATE });
	const [submitted, setFormStatus] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const db = firebase.database();
	function handleReset() {
		changeInputs({ name: '', email: '', message: '' });
		setFormStatus(false);
	}
	const handleSubmit = useCallback(() => {
		let valid = !validateForm(form).length && !submitted;
		if (valid) {
			let formattedInputs = handleForm(form);
			db.ref('/messages').push(formattedInputs);
			setFormStatus(true);
		} else {
			for (let error of validateForm(form)) {
				enqueueSnackbar(`Form Submit Failed: ${error}`, {
					variant: 'error',
				});
			}
			setErrorMessage(true);
		}
	}, [form, setErrorMessage, enqueueSnackbar, db, setFormStatus, submitted]);

	const handleFocus = () => {
		if (errorMessage) {
			setErrorMessage(false);
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
		setFormStatus,
		handleReset,
		handleSubmit,
		handleFocus,
		handleBlur,
	};
};
