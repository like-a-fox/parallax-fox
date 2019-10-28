import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormButton, ButtonWrapper } from '../../styles';


function FormButtons({ resetForm, handleSubmit }) {
	return (
		<ButtonWrapper>
			<FormButton onClick={handleSubmit} submit>
				Send It Stupid
			</FormButton>
			<FormButton onClick={resetForm}>
				whoopsies!
			</FormButton>
		</ButtonWrapper>
	)
}

FormButtons.propTypes = {
	email: PropTypes.string,
	form: PropTypes.shape({
		email: PropTypes.string,
		name: PropTypes.string,
		message: PropTypes.string
	}),
	handleSubmit: PropTypes.any,
	message: PropTypes.string,
	name: PropTypes.string,
	resetForm: PropTypes.func
}

export default memo(FormButtons);
