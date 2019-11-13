import React, { memo } from 'react';
import { default as FooterSection } from './_footer';
import { default as ContactSection } from './_contact';
import { default as ContactFooterDivider } from './_contact_footer_divider';

const ContactFooter = ({ ...extraParallax }) => (
	<>
		<ContactSection factor={1.5} offset={4.7} {...extraParallax} />
		<FooterSection offset={5} {...extraParallax} />
		<ContactFooterDivider {...extraParallax} />
	</>
);

export default memo(ContactFooter);
