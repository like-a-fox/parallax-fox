import React from 'react';
import { default as FormActions } from './_Actions';
import { StyledForm, TextArea, Input } from '../../styles';
import { useForm } from './_useForm';

const Form = (props) => {
	const {
		name,
		email,
		message,
		submitted,
		setSubmitted,
		errors,
		handleReset,
		handleSubmit,
		...formProps
	} = useForm();

	return (
		<StyledForm {...formProps}>
			{!submitted ? (
				<>
					<Input
						error={errors.indexOf('name') !== -1}
						name={'name'}
						defaultValue={name}
						label={'Name'}
						required
					/>
					<Input
						name={'email'}
						defaultValue={email}
						label={'Email'}
						type={'email'}
						error={errors.indexOf('email') !== -1}
						required
						email
					/>
					<TextArea name={'message'} defaultValue={message} label={'Message'} />
				</>
			) : null}
			<FormActions
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				submitted={submitted}
				setSubmitted={setSubmitted}
			/>
		</StyledForm>
	);
};

export default Form;
