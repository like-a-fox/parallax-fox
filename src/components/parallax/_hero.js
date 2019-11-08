import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BigTitle, Subtitle, Content, WrapperDiv } from '../../styles';

const Hero = ({ ...parallaxProps }) => (
	<Content className="hero" {...parallaxProps}>
		<WrapperDiv>
			<BigTitle>
				Design. <i>not aga!n</i>
			</BigTitle>
			<Subtitle>
				{`I'm Derek, and if one more person asks me to make a word press site,
      I'm gonna stab someone. Or use jQuery. Seriously!
      The 90s called and they want their shitty JavaScript library back.`}
				<br /> <em>&copy; {'Like A Fox Development'} </em>
			</Subtitle>
		</WrapperDiv>
	</Content>
);

Hero.propTypes = {
	mixBlend: PropTypes.any,
};

export default memo(Hero);
