import React from 'react';
import { default as FormActions } from './_Actions';
import { StyledForm } from './_FormStyles';
import { default as TextArea } from './_TextArea';
import { default as Input } from './_Input';
import { useForm } from './_useForm';

const Form = (props) => {
	const {
		name,
		email,
		message,
		submitted,
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
						value={name}
						label={'Name'}
						required
					/>
					<Input
						name={'email'}
						value={email}
						label={'Email'}
						type={'email'}
						error={errors.indexOf('email') !== -1}
						required
						email
					/>
					<TextArea name={'message'} value={message} label={'Message'} />
				</>
			) : null}
			<FormActions
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				submitted={submitted}
			/>
		</StyledForm>
	);
};

export default Form;
