import React from 'react';
import { default as firebase } from 'gatsby-plugin-firebase';

const INITIAL_FORM = {
	name: '',
	email: '',
	message: '',
};

export const useErrorHandling = () => {
	const [errors, setErrors] = React.useState([]);

	const handleError = (name) =>
		errors.indexOf(name) === -1 && setErrors((errors) => [...errors, name]);

	const handleFocusReset = (name) =>
		errors.indexOf(name) !== -1 &&
		setErrors((errors) => errors.splice(errors.indexOf(name), 1));

	const validateEmail = (email) =>
		/\S+@\S+\.\S+/.test(email) || handleError('email');
	const validateRequired = (value) =>
		/[A-Za-z0-9]+/.test(value) || handleError('name');
	const createErrorMessage = (name) =>
		`${name.substring(0, 1).toUpperCase()}${name.substring(1)}`;

	const handleFormValidation = (form) => {
		const { name, email } = form;
		const validName = validateRequired(name);
		const validEmail = validateEmail(email);
		return validEmail && validName && form;
	};

	return {
		errors,
		handleError,
		handleFocusReset,
		handleFormValidation,
		validateEmail,
		validateRequired,
		createErrorMessage,
	};
};

const handleFormSubmission = async ({ name, email, message }) => {
	const db = firebase.database();
	let data = {
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

	await db.ref('/messages').push(data);
	await fetch('/api/mailer', {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
};

export const useFireForm = () => {
	const [submitted, setSubmitted] = React.useState(false);
	const { handleFormValidation } = useErrorHandling();

	const handleSubmitForm = (form) => () => {
		const validForm = handleFormValidation(form);
		if (validForm) {
			handleFormSubmission(form).then(() => setSubmitted(true));
		}
	};
	const handleResetForm = (handleClearForm) => () => {
		handleClearForm();
		setSubmitted(false);
	};
	return {
		submitted,
		setSubmitted,
		handleSubmitForm,
		handleResetForm,
	};
};

export const useForm = () => {
	const [form, setForm] = React.useState(INITIAL_FORM);
	const {
		errors,
		hanldeFocusReset,
		validateEmail,
		validateRequired,
		createErrorMessage,
	} = useErrorHandling();
	const {
		submitted,
		setSubmitted,
		handleSubmitForm,
		handleResetForm,
	} = useFireForm();

	const handleInputChange = ({ target: { name, value } }) =>
		name && value && setForm((form) => ({ ...form, [name]: value }));

	const handleClearForm = () => setForm(INITIAL_FORM);

	const handleBlur = ({ target: { name, value } }) =>
		(name === 'name' && validateRequired(value)) ||
		(name === 'email' && validateEmail(value));

	return {
		...form,
		submitted,
		setSubmitted,
		errors,
		createErrorMessage,
		onBlur: handleBlur,
		onChange: handleInputChange,
		handleReset: handleResetForm(handleClearForm),
		handleSubmit: handleSubmitForm(form),
		onFocus: hanldeFocusReset,
	};
};
