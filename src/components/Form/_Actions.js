import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormButton, ButtonWrapper } from '../../styles';

export const FormActions = (props) => {
	const { submitted, setSubmitted, handleSubmit, handleReset } = props;
	const [clicks, setClicks] = useState(0);
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
					Send It Stupid
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

export default FormActions;
