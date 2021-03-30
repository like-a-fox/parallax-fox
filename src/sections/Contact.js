import React from 'react';

import { Form, Input, Textarea } from '../components';
import { useAtomForm } from '../atoms';
import {
	Content,
	Inner,
	Title,
	WaveDivider,
	ContactText,
	Footer,
} from '../styles';

const Contact = () => {
	const {
		name,
		email,
		message,
		errors,
		submitted,
		handleFields,
		...formProps
	} = useAtomForm();
	return (
		<>
			<Content className={'contact'} factor={1} offset={5.7}>
				<Inner>
					<Title>Get In Touch</Title>
					<ContactText>
						Say <a href='mailto:likeafox.dev@gmail.com'>Hi </a>
					</ContactText>
					<Form submitted={submitted} {...formProps}>
						{!submitted ? (
							<>
								<Input
									error={errors.indexOf('name') !== -1}
									name={'name'}
									value={name}
									label={'Name'}
									required
									{...handleFields}
								/>
								<Input
									name={'email'}
									value={email}
									label={'Email'}
									type={'email'}
									error={errors.indexOf('email') !== -1}
									required
									email
									{...handleFields}
								/>
								<Textarea
									name={'message'}
									value={message}
									label={'Message'}
									{...handleFields}
								/>
							</>
						) : null}
					</Form>
				</Inner>
			</Content>
			<Content className={'footer'} offset={6}>
				<Footer>
					&copy; 2021 by Like A Fox Development.{' '}
					<a href='https://github.com/like-a-fox/parallax-fox'>
						Github Repository
					</a>
					. Made by{' '}
					<a href='https://github.com/like-a-fox'>Like A Fox Development</a>.
				</Footer>
			</Content>
			<WaveDivider />
		</>
	);
};

export default Contact;
