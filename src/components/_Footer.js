import React, { memo } from 'react';
import { Content, Footer as FooterStyled } from '../styles';

/**
 * @component Footer
 * @type {import('react').FunctionComponent}
 * @param {object} props
 */
const Footer = (props) => {
	return (
		<Content className='footer' offset={5} {...props}>
			<FooterStyled>
				&copy; 2019 by Like A Fox Development.{' '}
				<a href='https://github.com/like-a-fxx/parallax-fox'>Github Repository</a>.
				Made by <a href='https://github.com/like-a-fox'>Like A Fox Development</a>.
			</FooterStyled>
		</Content>
	);
};

export default memo(Footer);

