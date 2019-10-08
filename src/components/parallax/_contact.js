import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Divider, Title, Content, Inner } from '../../elements'
import { UpDown, UpDownWide, waveAnimation } from '../../styles/animations'
import { colors } from '../../../tailwind'
import { default as SVG } from '../_svg'

const WaveWrapper = styled.div`
  ${tw`absolute pin-b w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${waveAnimation('20s')};
  }
`

const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`

const ContactSectionBase = ({ children, offset }) => (
  <>
    <Divider fill="#23262b" speed={0.2} offset={offset}>
      <WaveWrapper>
        <InnerWave>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
    <Content speed={0.4} offset={offset}>
      {children}
    </Content>
    <Divider speed={0.1} offset={offset}>
      <UpDown>
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
      </UpDown>
      <UpDownWide>
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
  </>
)

ContactSectionBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

const ContactSection = memo(ContactSectionBase)

const Contact = ({ offset }) => (
  <ContactSection offset={offset}>
    <Inner>
      <Title>Get in touch</Title>
      <ContactText>
        Say <a href="mailto:likeafox.dev@gmail.com">Hi </a>
      </ContactText>
    </Inner>
    <Footer>
      &copy; 2019 by Like A Fox Development.{' '}
      <a href="https://github.com/like-a-fxx/parallax-fox">Github Repository</a>
      . Made by{' '}
      <a href="https://github.com/like-a-fox">Like A Fox Development</a>.
    </Footer>
  </ContactSection>
)

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
}

export default memo(Contact)
