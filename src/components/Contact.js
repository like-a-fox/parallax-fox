import React from 'react';

import { Form } from './Form';

import {
	Content,
	Inner,
	Title,
	WaveDivider,
	ContactText,
	Footer,
} from '../styles';

const Contact = () => {
	return (
		<>
			<Content className={'contact'} factor={1} offset={5.7}>
				<Inner>
					<Title>Get In Touch</Title>
					<ContactText>
						Say <a href='mailto:likeafox.dev@gmail.com'>Hi </a>
					</ContactText>
					<Form />
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
