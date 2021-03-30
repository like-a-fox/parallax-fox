import { default as firebase } from 'gatsby-plugin-firebase';

export const handleFormSubmission = async ({ name, email, message }) => {
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

export const formValidators = {
	name: (value) => /[A-Za-z0-9]+/.test(value),
	email: (email) => /\S+@\S+\.\S+/.test(email),
	message: () => true,
};

export const handleErrors = (form, name) =>
	name && form[name] && !formValidators[name](form[name]);

export const createErrorMessage = (name) =>
	`${name.substring(0, 1).toUpperCase()}${name.substring(1)}`;

export const INITIAL_FORM = { name: '', email: '', message: '' };
