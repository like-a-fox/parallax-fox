import React, { memo } from 'react';
import { SVG } from '../';
import { UpDown, UpDownWide, Divider, DividerMiddle } from '../../styles';
import { colors } from '../../../tailwind';

export const TopAboutDivider = () => (
  <Divider
    bg="#23262b"
    clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
    speed={0.2}
    offset={3}
  />
);
let UpDownSvgs = () => (
  <UpDown opacity={0.7}>
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
);
UpDownSvgs = memo(UpDownSvgs);
let UpDownWideSvgs = () => (
  <UpDownWide opacity={0.7}>
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
      stroke={colors.tealDerp}
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
);
UpDownWideSvgs = memo(UpDownWideSvgs);
export const BottomAboutDivider = () => (
  <Divider speed={0.1} offset={3}>
    <UpDownSvgs />
    <UpDownWideSvgs />
    <SVG icon="circle" width={6} fill={colors.tealDerp} left="4%" top="20%" />
    <SVG
      icon="circle"
      width={12}
      stroke={colors['grey-darkest']}
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
);

export const MiddleProjectsDivider = memo(
  () => (
    <DividerMiddle
      bg="linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)"
      speed={-0.2}
      offset={`${1}.1`}
      factor={2}
    />
  ),
  { displayName: 'MiddleProjectsDivider' }
);

let UpDownProject = () => (
  <UpDown opacity={0.7}>
    <SVG icon="box" width={6} stroke={colors.tealDerp} left="85%" top="75%" />
    <SVG icon="upDown" width={8} fill={colors.greyDigo} left="70%" top="20%" />
    <SVG
      icon="triangle"
      width={8}
      stroke={colors.perpSkiz}
      left="25%"
      top="5%"
    />
    <SVG
      icon="circle"
      hiddenMobile
      width={16}
      stroke={colors.tealDerp}
      left="17%"
      top="60%"
    />
  </UpDown>
);
UpDownProject = memo(UpDownProject);

let UpDownWideProject = () => (
  <UpDownWide opacity={0.7}>
    <SVG
      icon="arrowUp"
      hiddenMobile
      width={16}
      fill={colors.perpSkiz}
      left="20%"
      top="90%"
    />
    <SVG
      icon="triangle"
      width={12}
      stroke={colors.tealDerp}
      left="90%"
      top="30%"
    />
    <SVG icon="circle" width={8} stroke={colors.burgDee} left="70%" top="90%" />
    <SVG
      icon="triangle"
      hiddenMobile
      width={16}
      stroke={colors.greyDigo}
      left="18%"
      top="75%"
    />
    <SVG
      icon="circle"
      width={6}
      stroke={colors.tealDerp}
      left="75%"
      top="10%"
    />
    <SVG
      icon="upDown"
      hiddenMobile
      width={8}
      fill={colors.perpSkiz}
      left="45%"
      top="10%"
    />
  </UpDownWide>
);

UpDownWideProject = memo(UpDownWideProject);

export const LowerProjectsDivider = () => (
  <Divider speed={0.1} offset={1} factor={2}>
    <UpDownProject />
    <UpDownWideProject />
    <SVG icon="circle" width={6} stroke={colors.tealDerp} left="4%" top="20%" />
    <SVG icon="circle" width={12} stroke={colors.pink} left="80%" top="60%" />
    <SVG icon="box" width={6} fill={colors.blue} left="10%" top="10%" />
    <SVG icon="box" width={12} stroke={colors.burgDee} left="29%" top="26%" />
    <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors.burgDee} left="80%" top="70%" />
  </Divider>
);
