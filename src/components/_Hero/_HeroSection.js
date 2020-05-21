import PropTypes from 'prop-types';
import React from 'react';
import { Content, Subtitle } from '../../styles';
import { WrapperDiv, BigTitle } from './_HeroStyles';

/**
 * @component
 * @type {import('react').FunctionComponent}
 * @param {object} props
 * @param {string} props.className
 * @param {number} props.offset
 */
const HeroSection = (props) => {
	return (
		<Content {...props}>
			<WrapperDiv>
				<BigTitle>
					Design. <i>not aga!n</i>
				</BigTitle>
				<Subtitle>
					I&apos;m Derek, and if one more person asks me to make a wordpress
					site, or use jquery, I&apos;m gonna stab someone. Seriously... The 90s
					called and they want their shitty CMS and JavaScript library back.
					<br /> <em>&copy; {'Like A Fox Development'} </em>
				</Subtitle>
			</WrapperDiv>
		</Content>
	);
};

HeroSection.propTypes = {
	className: PropTypes.string,
	offset: PropTypes.number,
};

HeroSection.defaultProps = {
	className: 'hero',
	offset: 0,
};

export default HeroSection;
