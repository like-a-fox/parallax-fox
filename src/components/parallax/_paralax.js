import React, { memo } from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { tileData } from '../../assets'
import { Hero, Projects, Contact, About } from './'

const ParallaxWrapperBase = ({ children, pages }) => (
  <Parallax pages={pages}>{children}</Parallax>
)

const ParallaxWrapper = memo(ParallaxWrapperBase)

const ParallaxPage = () => (
  <ParallaxWrapper pages={5}>
    <Hero offset={0} />
    <Projects tileData={tileData} offset={1} />
    <About offset={3} />
    <Contact offset={4} />
  </ParallaxWrapper>
)
export default memo(ParallaxPage)