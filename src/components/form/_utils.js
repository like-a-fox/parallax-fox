import React, { useState } from 'react';
import
{
	TextInput,
	TextAreaInput,
	email_regex,
	email_regex_str,
} from '../form';
import PropTypes from 'prop-types';
import { FormButton } from '../../styles';
import { default as FormButtons } from './_form_buttons';
export const initalForm = {
	name: '',
	email: '',
	message: '',
};
export function SubmittedScreen({ toggleClicked })
{
	const [counter, setCount] = useState(0);
	const handleClick = () =>
	{
		setCount(counter + 1);
		if (counter > 1)
		{
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

export const InitialForm = ({
	inputs,
	emailError,
	handleSubmit,
	resetForm,
}) => [
		<TextInput
			key={'name'}
			name="name"
			label="Name"
			type="text"
			required
			value={inputs.name}
			placeholder="Stupid Name Here"
			width={100}
		/>,
		<TextInput
			key={'email'}
			name="email"
			label="Email"
			type="email"
			required
			pattern={email_regex_str}
			error={emailError}
			value={inputs.email}
			placeholder="Stupid Email..."
			width={100}
		/>,
		<TextAreaInput
			key={'message'}
			name="message"
			label="Message"
			required
			value={inputs.message}
			placeholder="Stupid Message..."
		/>,
		<FormButtons
			key={'buttons'}
			handleSubmit={handleSubmit}
			resetForm={resetForm}
		/>,
	];

export const checkInputs = (inputs) =>
{
	let emailError = false;
	if (inputs.email && inputs.email.length > 0)
	{
		emailError = !email_regex.test(inputs.email);
	}
	return Object.keys(inputs).reduce(
		(errorList, nextInput) => ({
			...errorList,
			[nextInput]:
				nextInput === 'email'
					? emailError
					: inputs[nextInput] !== '' &&
					inputs[nextInput] !== null &&
					inputs[nextInput] !== undefined,
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
