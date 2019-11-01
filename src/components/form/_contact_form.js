import React, { useState, memo } from 'react';
import { useMessageFire } from '../../firebase';
import {
	TextInput,
	TextAreaInput,
	email_regex,
	email_regex_str,
} from '../form';
import PropTypes from 'prop-types';
import { Form, FormButton } from '../../styles';
import { default as FormButtons } from './_form_buttons';

const initalForm = {
	name: '',
	email: '',
	message: '',
};
function SubmittedScreen({ toggleClicked }) {
	const [counter, setCount] = useState(0);
	const handleClick = () => {
		setCount(counter + 1);
		if (counter > 1) {
			toggleClicked(false);
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
const InitialForm = ({ inputs, emailError, handleSubmit, resetForm }) => [
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
function ContactForm(firebase) {
	const [inputs, changeInputs] = useState(initalForm);
	const [form, formChange] = useState(null);
	const [emailError, checkEmail] = useState(false);
	const [clicked, toggleClicked] = useState(false);
	const resetForm = () => {
		changeInputs({ name: '', email: '', message: '' });
		formChange(null);
	};
	useMessageFire(form, firebase);

	const handleSubmit = () => {
		formChange(inputs);

		toggleClicked(true);
		resetForm();
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		changeInputs({ ...inputs, [name]: value });
		if (name === 'email') {
			checkEmail(!email_regex.test(value));
		}
	};
	const handleFocus = () => checkEmail(false);
	return (
		<Form submitted={clicked} onChange={handleChange} onFocus={handleFocus}>
			{!clicked ? (
				<InitialForm
					handleSubmit={handleSubmit}
					inputs={inputs}
					emailError={emailError}
					resetForm={resetForm}
				/>
			) : (
				<SubmittedScreen toggleClicked={toggleClicked} />
			)}
		</Form>
	);
}

export default memo(ContactForm);
