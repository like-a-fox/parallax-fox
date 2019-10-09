import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { LinkWrapper, TitleWrapper, Text } from '../assets'

const ProjectCard = ({ title, link, children, bg }) => (
  <LinkWrapper to={link} bg={bg}>
    <TitleWrapper>
      {title}
      <Text>{children}</Text>
    </TitleWrapper>
  </LinkWrapper>
)

export default memo(ProjectCard)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired,
}
