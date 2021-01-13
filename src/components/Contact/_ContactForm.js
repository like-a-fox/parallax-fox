import React from 'react';
import { Form, Input, TextArea } from '../Form';
import { useContactForm } from './_useContactForm';

const ContactForm = () => {
	const { name, email, message, ...formProps } = useContactForm();
	return (
		<Form {...formProps}>
			<Input name={'name'} value={name} label={'Name'} required />
			<Input
				name={'email'}
				value={email}
				label={'Email'}
				type={'email'}
				required
				email
			/>
			<TextArea name={'message'} value={message} label={'Message'} />
		</Form>
	);
};

export default ContactForm;
