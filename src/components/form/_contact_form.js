import React, { useState, useEffect, memo } from 'react';
import { useFirebase } from '../../firebase';
import {
	checkInputs,
	handleForm,
	InitialForm,
	SubmittedScreen,
	initalForm,
} from './_utils';
import { Form } from '../../styles';

function ContactForm() {
	const [inputs, changeInputs] = useState(() => ({ ...initalForm }));
	const [errors, checkErrors] = useState(() => checkInputs(inputs));
	const [firebase] = useFirebase();
	const [formSubmit, changeForm] = useState(() => {
		if (!inputs.message || !inputs.email || !inputs.name) {
			return { error: true, form: null, submitted: false };
		}
		const form = handleForm(inputs);
		return { error: false, form, submitted: false };
	});
	useEffect(() => {
		const { form, error, submitted } = formSubmit;
		if (form && !error && !submitted) {
			firebase
				.database()
				.ref('/messages')
				.push(form);
			changeForm({ error: false, form: null, submitted: true });
		}
	}, [formSubmit, firebase]);
	const resetForm = () => {
		changeInputs({ ...initalForm });
	};
	const handleSubmit = () => {
		if (!inputs.message || !inputs.email || !inputs.name) {
			changeForm({ error: true, form: null, submitted: false });
		} else {
			const form = handleForm(inputs);
			changeForm({ error: false, form, submitted: false });
			resetForm();
		}
	};
	const handleBlur = ({ target: { name, value } }) =>
		checkErrors({
			...errors,
			[name]: value !== '' && value !== null && value !== undefined,
		});
	const handleChange = (event) => {
		const { name, value } = event.target;
		changeInputs({ ...inputs, [name]: value });
	};
	const handleFocus = (event) =>
		checkErrors({ ...errors, [event.target.name]: false });

	const resetSubmit = () => {
		changeForm({ ...formSubmit, submitted: false });
	};
	return (
		<Form
			submitted={formSubmit.submitted}
			onBlur={handleBlur}
			onChange={handleChange}
			onFocus={handleFocus}>
			{!formSubmit.submitted ? (
				<InitialForm
					handleSubmit={handleSubmit}
					inputs={inputs}
					emailError={errors.email}
					resetForm={resetForm}
				/>
			) : (
				<SubmittedScreen toggleClicked={resetSubmit} />
			)}
		</Form>
	);
}

export default memo(ContactForm);
