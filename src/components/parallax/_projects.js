import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SVG, ProjectCard } from '../../elements'
import {
  UpDown,
  ProjectsWrapper,
  UpDownWide,
  Divider,
  DividerMiddle,
  Title,
  Content,
  Inner,
} from '../../assets'
import { colors } from '../../../tailwind'

const ProjectsSectionBase = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, rgba(162, 181, 216, .7) 0%, rgba(148, 130, 186, .3) 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.tealDerp} left="85%" top="75%" />
        <SVG
          icon="upDown"
          width={8}
          fill={colors.greyDigo}
          left="70%"
          top="20%"
        />
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
          width={24}
          fill={colors.tealDerp}
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
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
        <SVG
          icon="circle"
          width={16}
          fill={colors.burgDee}
          left="70%"
          top="90%"
        />
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
          fill={colors.tealDerp}
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
      <SVG icon="circle" width={6} fill={colors.tealDerp} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
      <SVG icon="box" width={6} fill={colors.blue} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors.burgDee} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors.burgDee} left="80%" top="70%" />
    </Divider>
  </>
)
ProjectsSectionBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

const ProjectsSection = memo(ProjectsSectionBase)

const Projects = ({ offset, tileData }) => (
  <ProjectsSection offset={offset}>
    <Title>Projects</Title>
    <ProjectsWrapper>
      {tileData.map(tile => (
        <ProjectCard
          key={tile.bg}
          title={tile.title}
          bg={`url(${tile.background})`}
          link={tile.pathname}
        >
          {tile.subtitle}
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  </ProjectsSection>
)

Projects.propTypes = {
  offset: PropTypes.number.isRequired,
  tileData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      background: PropTypes.any,
      pathname: PropTypes.string,
      cols: PropTypes.number,
      icon: PropTypes.any,
    })
  ),
}

export default memo(Projects)
