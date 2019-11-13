import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BigTitle, Subtitle, Content, WrapperDiv } from '../../styles';
import { default as HeroDivider } from './_hero_divider';

const Hero = ({ offset = 0, ...extraParallax }) => (
	<>
		<Content className='hero' offset={offset} {...extraParallax}>
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
		<HeroDivider offset={offset} {...extraParallax} />
	</>
);

Hero.propTypes = {
	offset: PropTypes.number,
};

export default memo(Hero);
