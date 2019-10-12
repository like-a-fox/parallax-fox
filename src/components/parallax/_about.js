import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SVG } from '../'
import {
  UpDown,
  UpDownWide,
  AboutHero,
  AboutSub,
  AboutDesc,
  Avatar,
  Divider,
  Inner,
  Content,
  Title,
} from '../../styles'
import { colors } from '../../../tailwind'
import avatar from '../../images/avatar.png'

const AboutSectionBase = ({ children, offset }) => (
  <>
    <Divider
      bg="#23262b"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          fill={colors.greyDigo}
          left="50%"
          top="75%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors['grey-darkest']}
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors['grey-darkest']}
          left="25%"
          top="5%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          fill={colors.burgDee}
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={colors.perpSkiz}
          left="5%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.tealDerp}
          left="95%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors.tealDerp}
          left="85%"
          top="15%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors['grey-darkest']}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.tealDerp} left="4%" top="20%" />
      <SVG
        icon="circle"
        width={12}
        fill={colors['grey-darkest']}
        left="70%"
        top="60%"
      />
      <SVG icon="box" width={6} fill={colors.burgDee} left="10%" top="10%" />
      <SVG
        icon="box"
        width={12}
        fill={colors['grey-darkest']}
        left="20%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke={colors['grey-darkest']}
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

AboutSectionBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

const AboutSection = memo(AboutSectionBase)

const About = ({ offset }) => (
  <AboutSection offset={offset}>
    <Title>About</Title>
    <AboutHero>
      <Avatar src={avatar} alt="Like A Fox" />
      <AboutSub>
        {`Well, I’m going to tell you the best and the worst thing you’ve ever
        heard. Heroes aren’t born.`}
      </AboutSub>
    </AboutHero>
    <AboutDesc>
      {`You just go out there and grind it out. You fail and you look foolish
      and you just keep grinding. There is nothing else. There is no ‘chosen
      one,’ there is no destiny, nobody wakes up one day and finds out
      they’re amazing at something. There’s just slamming your head into the
      wall, refusing to take no for an answer. Being relentless, until
      either the wall or your head breaks. You want to be a hero? You don’t
      have to make some grand decision. There’s no inspirational music,
      there’s no montage. You just don’t quit.`}
    </AboutDesc>
  </AboutSection>
)

About.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default memo(About)
