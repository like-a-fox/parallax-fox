import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Content } from '../../styles';

export const Footer = styled.footer`
	${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`;

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.className
 * @param {number} props.offset
 */
const ContactFooter = (props) => {
	return (
		<Content {...props}>
			<Footer>
				&copy; 2021 by Like A Fox Development.{' '}
				<a href='https://github.com/like-a-fxx/parallax-fox'>
					Github Repository
				</a>
				. Made by{' '}
				<a href='https://github.com/like-a-fox'>Like A Fox Development</a>.
			</Footer>
		</Content>
	);
};

ContactFooter.propTypes = {
	className: PropTypes.string,
	offset: PropTypes.number,
};

ContactFooter.defaultProps = {
	className: 'footer',
	offset: 6,
};

export default ContactFooter;
