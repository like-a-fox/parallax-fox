import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SVG } from '../'
import { UpDown, UpDownWide, Divider } from '../../styles'
import { colors } from '../../../tailwind'

export const TopAboutDivider = () => (
  <Divider
    bg="#23262b"
    clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    speed={0.2}
    offset={1}
  />
)
let UpDownSvgs = () => (
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
)
UpDownSvgs = memo(UpDownSvgs)
let UpDownWideSvgs = () => (
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
    <SVG icon="circle" width={6} fill={colors.tealDerp} left="85%" top="15%" />
    <SVG
      icon="upDown"
      hiddenMobile
      width={8}
      fill={colors['grey-darkest']}
      left="45%"
      top="10%"
    />
  </UpDownWide>
)
UpDownWideSvgs = memo(UpDownWideSvgs)
export const BottomAboutDivider = () => (
  <Divider speed={0.1} offset={1}>
    <UpDownSvgs />
    <UpDownWideSvgs />
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
)
