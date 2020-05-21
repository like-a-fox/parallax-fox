import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { useSendFire } from '../firebase';
import { ContactText } from '../styles';
import { default as Footer } from './_Footer';
import {
	FormWrapper,
	StandardInput,
	StandardTextArea,
} from './_FormComponents';
import { default as SectionTemplate } from './_SectionTemplate';
import { default as WaveDivider } from './_WaveDivider';

/**
 * @component ContactSection
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.email
 * @param {string} props.message
 * @param {string} props.name
 */
const ContactSection = (props) => {
	const { name, email, message, ...wrapperProps } = useSendFire();
	const [emailError, setEmailError] = useState(false);
	const handleEmailValidation = (event) => {
		const { name, value } = event.target;
		const email_regex_str = /\S+@\S+\.\S+/gi;
		if (name && name === 'email') {
			if (value) {
				const emailValid = email_regex_str.test(value);
				if (!emailValid && !emailError) {
					setEmailError(true);
				}
			}
		}
	};
	return (
		<>
			<SectionTemplate
				factor={1.5}
				offset={4.7}
				contentClassName={'contact'}
				sectionTitle={'Get In Touch'}
				{...props}>
				<ContactText>
					Say <a href='mailto:likeafox.dev@gmail.com'>Hi </a>
				</ContactText>
				<FormWrapper {...wrapperProps}>
					<StandardInput name={'name'} value={name} label={'Name'} required />
					<StandardInput
						name={'email'}
						value={email}
						label={'Email'}
						type={'email'}
						required
						onBlur={handleEmailValidation}
						error={emailError}
					/>
					<StandardTextArea
						name={'message'}
						value={message}
						label={'Message'}
					/>
				</FormWrapper>
			</SectionTemplate>
			<Footer />
			<WaveDivider />
		</>
	);
};

ContactSection.propTypes = {
	email: PropTypes.string,
	message: PropTypes.string,
	name: PropTypes.string,
};

ContactSection.defaultProps = {
	name: '',
	email: '',
	message: '',
};

export default memo(ContactSection);
