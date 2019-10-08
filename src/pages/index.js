import React, { memo } from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
// Data
import tileData from '../assets/tiles'
// Views
import { Hero, Projects, Contact, About, Layout } from '../components'

const ParallaxWrapperBase = ({ children, pages }) => (
  <Parallax pages={pages}>{children}</Parallax>
)

const ParallaxWrapper = memo(ParallaxWrapperBase)

const IndexPage = () => (
  <Layout>
    <ParallaxWrapper pages={5}>
      <Hero offset={0} />
      <Projects tileData={tileData} offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </ParallaxWrapper>
  </Layout>
)

export default IndexPage
