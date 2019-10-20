import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BigTitle, Subtitle, Content, WrapperDiv } from '../../styles';
import { HeroHeaderBg } from './_dividers';

const HeroContentBase = ({ children, offset }) => (
  <>
    <HeroHeaderBg />
    <Content className="hero" speed={0.4} offset={offset}>
      <WrapperDiv>{children}</WrapperDiv>
    </Content>
  </>
);

HeroContentBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
};

const HeroContent = memo(HeroContentBase);

const Hero = ({ offset }) => (
  <HeroContent offset={offset}>
    <BigTitle>
      Design. <i>not aga!n</i>
    </BigTitle>
    <Subtitle>
      {`I'm Derek, and if one more person asks me to make a word press site,
      I'm gonna stab someone. Or use jQuery. Seriously!
      The 90s called and they want their shitty JavaScript library back.`}
      <br /> <em>&copy; {'Like A Fox Development'} </em>
    </Subtitle>
  </HeroContent>
);

Hero.propTypes = {
  offset: PropTypes.number.isRequired,
};

export default memo(Hero);
