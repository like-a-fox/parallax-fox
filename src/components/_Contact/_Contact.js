import React from 'react';
import styled from 'styled-components';
import { default as ContactDivider } from './_ContactDivider';
import { default as ContactFooter } from './_ContactFooter';
import { default as ContactSection } from './_ContactSection';
import { default as ContactForm } from './_ContactForm';

const ContactText = styled.p`
	${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`;
const Contact = () => {
	return (
		<>
			<ContactSection>
				<ContactText>
					Say <a href='mailto:likeafox.dev@gmail.com'>Hi </a>
				</ContactText>
				<ContactForm />
			</ContactSection>
			<ContactFooter />
			<ContactDivider />
		</>
	);
};

export default Contact;
