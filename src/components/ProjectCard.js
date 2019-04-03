import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {Link} from 'gatsby';

const Wrapper = styled(Link)`
  width: 100%;
  position: relative;
  ${tw`shadow-lg relative no-underline rounded-lg text-white flex-col flex justify-end`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-height: 19rem;
  filter: grayscale(30%);
  overflow:hidden;
  &:before {
    content: '';
    opacity: .7;
    background-image: ${props => props.bg};
    background-color: rgba(10,10,50,.4);
      background-position:center ;
  background-repeat: no-repeat;
  background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(70%);
  }
  &:hover {
    &:before {
      filter: grayscale(10%);
    }
    transform: translateY(-5px);
    filter: grayscale(30%);
  }
`

const Text = styled.div`
  ${tw`opacity-85 font-mono text-white text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-weight: 200;
  letter-spacing: -1px;
`

const Title = styled.div`
  ${tw`text-white relative uppercase text-xl md:text-2xl xl:text-3xl font-mono `};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow:hidden;
  padding: 1rem;
  background-color: rgba(0,0,40,.1);
  border-radius: 4px;
   &:before {
    content: '';
    position: absolute;
    background-color: rgba(0,0,40,.3);
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px);
  }
`

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper to={link} bg={bg}>
    <Title>{title}
      <Text>{children}</Text>
    </Title>

  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
