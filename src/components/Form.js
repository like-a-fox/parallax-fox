import React from 'react';
import PropTypes from 'prop-types';
import { default as Textarea } from './Textarea';
import { default as Input } from './Input';
import { StyledForm, ButtonWrapper, FormButton } from '../styles';
import { useForm } from '../graphql/_useForm';

const FormActions = (props) => {
	const { submitted, setSubmitted, handleSubmit, handleReset } = props;
	const [clicks, setClicks] = React.useState(0);
	const handleClick = () => {
		if (submitted) {
			if (clicks < 2) {
				setClicks(clicks + 1);
			} else {
				handleReset();
				setClicks(0);
				setSubmitted(false);
			}
		}
	};
	const buttonText =
		submitted &&
		(clicks === 0
			? 'Send Another Message?'
			: clicks === 1
			? 'Oh Really One Message Isnt Enough?'
			: 'Seriously? Wow You Are Selfish');
	if (!submitted) {
		return (
			<ButtonWrapper>
				<FormButton onClick={handleSubmit} submit>
					Send It
				</FormButton>
				<FormButton onClick={handleReset}>whoopsies!</FormButton>
			</ButtonWrapper>
		);
	}

	return (
		<ButtonWrapper submitted>
			<FormButton onClick={handleClick}> {buttonText} </FormButton>
		</ButtonWrapper>
	);
};

FormActions.propTypes = {
	setSubmitted: PropTypes.func,
	submitted: PropTypes.bool,
	handleSubmit: PropTypes.func,
	handleReset: PropTypes.func,
};

FormActions.defaultProps = {
	submitted: false,
	setSubmitted: () => null,
};

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
					<Textarea name={'message'} defaultValue={message} label={'Message'} />
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
