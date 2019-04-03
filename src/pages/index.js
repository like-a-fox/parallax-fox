import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

//Data
import { tileData } from '../assets/tiles'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../assets/images/avatar.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 1.5rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex font-mono flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-indigo-lightest pt-12 font-mono lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  text-transform: uppercase;
  letter-spacing: -1px;
`

const AboutDesc = styled.p`
  ${tw`text-indigo-lighter text-lg md:text-xl lg:text-2xl font-mono pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>Xeiko Design.</BigTitle>
        <Subtitle>
          {' '}
          I'm Derek, and this is a stab at an alternate portfolio page. Enjoy my
          insanity in web format
          <br /> <em> &copy; Like A Fox Development </em>{' '}
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          {tileData.map((tile, i) => (
            <ProjectCard
              title={tile.title}
              bg={`url(${tile.background})`}
              link={tile.pathname}>
              {tile.subtitle}
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Like A Fox" />
          <AboutSub>
            Well, I’m going to tell you the best and the worst thing you’ve ever
            heard. Heroes aren’t born.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You just go out there and grind it out. You fail and you look foolish
          and you just keep grinding. There is nothing else. There is no ‘chosen
          one,’ there is no destiny, nobody wakes up one day and finds out
          they’re amazing at something. There’s just slamming your head into the
          wall, refusing to take no for an answer. Being relentless, until
          either the wall or your head breaks. You want to be a hero? You don’t
          have to make some grand decision. There’s no inspirational music,
          there’s no montage. You just don’t quit.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:likeafox.dev@gmail.com">Hi </a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Like A Fox Development.{' '}
          <a href="https://github.com/like-a-fxx/parallax-fox">
            Github Repository
          </a>
          . Made by{' '}
          <a href="https://github.com/like-a-fox">Like A Fox Development</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
