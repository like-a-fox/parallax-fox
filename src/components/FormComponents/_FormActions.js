import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormButton, ButtonWrapper } from '../../styles';

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {function} props.handleSubmit
 * @param {function} props.resetForm
 */
const FormActions = (props) => {
	const { resetForm, handleSubmit } = props;
	return (
		<ButtonWrapper>
			<FormButton onClick={handleSubmit} submit>
				Send It Stupid
			</FormButton>
			<FormButton onClick={resetForm}>whoopsies!</FormButton>
		</ButtonWrapper>
	);
};

FormActions.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default memo(FormActions);
