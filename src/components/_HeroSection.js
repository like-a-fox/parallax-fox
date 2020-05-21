import React, { memo } from 'react';
import { BigTitle, Content, Divider, Subtitle, WrapperDiv } from '../styles';

/**
 * @component HeroSection
 * @type {import('react').FunctionComponent}
 * @param {object} props
 */
const HeroSection = (props) => {
	return (
		<>
			<Content className='hero' offset={0} {...props}>
				<WrapperDiv>
					<BigTitle>
						Design. <i>not aga!n</i>
					</BigTitle>
					<Subtitle>
						I&apos;m Derek, and if one more person asks me to make a wordpress
						site, or use jquery, I&apos;m gonna stab someone. Seriously... The
						90s called and they want their shitty CMS and JavaScript library
						back.
						<br /> <em>&copy; {'Like A Fox Development'} </em>
					</Subtitle>
				</WrapperDiv>
			</Content>
			<Divider
				bg='linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)'
				clipPath='polygon(0 0%,100% 0%,100% 100%,0 15%)'
				speed={0.5}
				offset={0}
				{...props}
			/>
		</>
	);
};

export default memo(HeroSection);
