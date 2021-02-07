import React from 'react';

import { Form, Input, Textarea } from '../components';
import { useForm } from '../graphql';
import {
	Content,
	Inner,
	Title,
	WaveDivider,
	ContactText,
	Footer,
} from '../styles';

const Contact = () => {
	const { name, email, message, errors, submitted, ...formProps } = useForm();
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
								<Textarea
									name={'message'}
									defaultValue={message}
									label={'Message'}
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
