import React, { memo } from 'react';
import { Title, Content, Inner, ContactText } from '../../styles';

import { ContactForm } from '../form';

const Contact = ({ ...parallaxProps }) => (
	<Content {...parallaxProps}>
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
