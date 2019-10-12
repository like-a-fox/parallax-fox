import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../tailwind'
import { SVG } from '../'
import {
  UpDown,
  UpDownWide,
  Divider,
  BigTitle,
  Subtitle,
  Content,
  WrapperDiv,
} from '../../styles'

const HeroContentBase = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown opacity={.7}>
        <SVG
          icon="triangle"
          hiddenMobile
          width={48}
          stroke={colors['grey-darkest']}
          left="10%"
          top="20%"
        />
        <SVG
          icon="hexa"
          width={48}
          stroke={colors.greyDigo}
          left="60%"
          top="70%"
        />
        <SVG
          icon="box"
          width={6}
          fill={colors['grey-darker']}
          left="60%"
          top="15%"
        />
      </UpDown>
      <UpDownWide opacity={0.7}>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={colors.teal}
          left="80%"
          top="10%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.tealDerp}
          left="90%"
          top="50%"
        />
        <SVG
          icon="circle"
          width={12}
          fill={colors['grey-darker']}
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={16}
          stroke={colors['grey-darkest']}
          left="30%"
          top="65%"
        />
        <SVG
          icon="cross"
          width={16}
          stroke={colors.perpSkiz}
          left="28%"
          top="15%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors['grey-darkest']}
          left="75%"
          top="10%"
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
      <SVG
        icon="circle"
        hiddenMobile
        width={12}
        fill={colors['grey-darker']}
        left="5%"
        top="70%"
      />
      <SVG
        icon="circle"
        width={6}
        fill={colors['grey-darkest']}
        left="4%"
        top="20%"
      />
      <SVG
        icon="circle"
        width={12}
        stroke={colors['grey-darkest']}
        left="50%"
        top="60%"
      />
      <SVG
        icon="upDown"
        width={8}
        fill={colors['grey-darkest']}
        left="95%"
        top="90%"
      />
      <SVG
        icon="upDown"
        hiddenMobile
        width={24}
        fill={colors['grey-darker']}
        left="40%"
        top="80%"
      />
      <SVG
        icon="triangle"
        width={8}
        stroke={colors['grey-darker']}
        left="25%"
        top="5%"
      />
      <SVG
        icon="circle"
        width={24}
        fill={colors.tealDerp}
        left="95%"
        top="5%"
      />
      <SVG
        icon="box"
        hiddenMobile
        width={24}
        fill={colors.perpSkiz}
        left="5%"
        top="90%"
      />
      <SVG
        icon="box"
        width={6}
        fill={colors['grey-darkest']}
        left="10%"
        top="10%"
      />
      <SVG
        icon="box"
        width={12}
        fill={colors['grey-darkest']}
        left="40%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={16}
        stroke={colors['grey-darker']}
        left="10%"
        top="50%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke={colors['grey-darker']}
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <WrapperDiv>{children}</WrapperDiv>
    </Content>
  </>
)

HeroContentBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

const HeroContent = memo(HeroContentBase)

const Hero = ({ offset }) => (
  <HeroContent offset={offset}>
    <BigTitle>Xeiko Design.</BigTitle>
    <Subtitle>
      {`I'm Derek, and this is a stab at an alternate portfolio page. Enjoy my
      insanity in web format`}
      <br /> <em>&copy; {'Like A Fox Development'} </em>
    </Subtitle>
  </HeroContent>
)

Hero.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default memo(Hero)
