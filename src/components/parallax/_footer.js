import React, { memo } from 'react';
import { Content, Footer } from '../../styles';

const FooterSection = ({ ...parallaxProps }) => (
	<Content className='footer' {...parallaxProps}>
		<Footer>
			&copy; 2019 by Like A Fox Development.{' '}
			<a href='https://github.com/like-a-fxx/parallax-fox'>Github Repository</a>.
			Made by <a href='https://github.com/like-a-fox'>Like A Fox Development</a>.
		</Footer>
	</Content>
);

export default memo(FooterSection);
