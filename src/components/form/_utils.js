import React, { useState } from 'react';
import { TextInput, TextAreaInput, email_regex } from '../form';
import PropTypes from 'prop-types';
import { FormButton } from '../../styles';
import { default as FormButtons } from './_form_buttons';
export const initalForm = {
	name: '',
	email: '',
	message: '',
};
export function SubmittedScreen({ toggleClicked }) {
	const [counter, setCount] = useState(0);
	const handleClick = () => {
		setCount(counter + 1);
		if (counter > 1) {
			toggleClicked();
		}
	};
	return (
		<FormButton onClick={handleClick}>
			{!counter
				? 'Send Another'
				: counter < 2
				? 'Are You F*cking Kidding?'
				: 'Wow, Fine Ass Hole'}
		</FormButton>
	);
}

SubmittedScreen.propTypes = {
	toggleClicked: PropTypes.any,
};

export const InitialForm = ({ inputs, errors, handleSubmit, resetForm }) => {
	const labels = Object.keys(errors).reduce(
		(prev, next) => ({
			...prev,
			[next]: {
				label: `${next}${errors[next] ? ' failllllll' : ''}`,
				error: errors[next],
				name: next,
				defaultValue: inputs[next],
				required: true,
				type: next === 'email' ? 'email' : 'text',
			},
		}),
		{}
	);
	return [
		<TextInput
			key="name"
			placeholder="Stupid Name Here"
			width={100}
			{...labels['name']}
		/>,
		<TextInput
			key="email"
			placeholder="Stupid Email..."
			width={100}
			{...labels['email']}
		/>,
		<TextAreaInput
			key="message"
			placeholder="Stupid Message..."
			{...labels['message']}
		/>,
		<FormButtons
			key={'buttons'}
			handleSubmit={handleSubmit}
			resetForm={resetForm}
		/>,
	];
};

export const checkInputs = (inputs) => {
	let emailError = false;
	if (inputs.email && inputs.email.length > 0) {
		emailError = !email_regex.test(inputs.email);
	}
	return Object.keys(inputs).reduce(
		(errorList, nextInput) => ({
			...errorList,
			[nextInput]:
				nextInput === 'email'
					? emailError
					: inputs[nextInput] === '' ||
					  inputs[nextInput] === null ||
					  inputs[nextInput] === undefined,
		}),
		{}
	);
};

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
