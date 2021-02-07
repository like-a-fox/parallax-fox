import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { default as Button, ButtonWrapper } from './Button';

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
				<Button onClick={handleSubmit} label={'Send It'} secondary />
				<Button onClick={handleReset} label={'whoopsies!'} />
			</ButtonWrapper>
		);
	}

	return (
		<ButtonWrapper submitted>
			<Button onClick={handleClick} label={buttonText} />
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

export const StyledForm = styled.form`
	${tw`shadow-lg mb-8 md:m-auto p-2 md:p-4 xl:p-12 2xl:p-24 relative w-full opacity-75 bg-black-soft flex-grow rounded-lg text-white flex-col items-stretch font-mono`}
	transition: background 20ms ease-in-out;
	padding-bottom: ${(props) => props.submitted && '3rem'};
	padding-top: ${(props) => props.submitted && '3rem'};
`;

const Form = (props) => {
	const {
		children,
		submitted,
		handleReset,
		handleSubmit,
		setSubmitted,
		...formProps
	} = props;

	return (
		<StyledForm {...formProps}>
			{children}
			<FormActions
				handleReset={handleReset}
				handleSubmit={handleSubmit}
				submitted={submitted}
				setSubmitted={setSubmitted}
			/>
		</StyledForm>
	);
};

Form.propTypes = {
	children: PropTypes.any,
	handleReset: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	setSubmitted: PropTypes.func.isRequired,
	submitted: PropTypes.bool,
};

export default Form;
