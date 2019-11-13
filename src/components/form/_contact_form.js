import React, { memo } from 'react';
import { useSendFire } from '../../firebase';
import { InitialForm, SubmittedScreen } from './_utils';
import { Form } from '../../styles';

function ContactForm() {
	const [inputs, errors, submitted, eventFunctions] = useSendFire();
	const {
		handleBlur,
		handleChange,
		handleFocus,
		handleResetSubmit,
		handleReset,
		handleSubmit,
	} = eventFunctions;
	return (
		<Form
			submitted={submitted}
			onBlur={handleBlur}
			onChange={handleChange}
			onFocus={handleFocus}>
			{!submitted ? (
				<InitialForm
					handleSubmit={handleSubmit}
					inputs={inputs}
					errors={errors}
					resetForm={handleReset}
				/>
			) : (
				<SubmittedScreen toggleClicked={handleResetSubmit} />
			)}
		</Form>
	);
}

export default memo(ContactForm);
