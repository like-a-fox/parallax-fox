import React, { memo } from 'react';
import { Title, Content, Inner, ContactText } from '../../styles';

import { ContactForm } from '../FormComponents';

const Contact = ({ ...parallaxProps }) => (
	<Content className='contact-section' {...parallaxProps}>
		<Inner className='contact-title'>
			<Title>Get in touch</Title>
			<ContactText>
				Say <a href='mailto:likeafox.dev@gmail.com'>Hi </a>
			</ContactText>
			<ContactForm />
		</Inner>
	</Content>
);

export default memo(Contact);
