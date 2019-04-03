import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../assets/images/triangle.svg'
import {colors} from '../../tailwind'

export const Title = styled.h1`
  ${tw`text-4xl uppercase lg:text-4xl font-mono text-grey-light mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-weight: 200;
  letter-spacing: -1px;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`

export const BigTitle = styled.h1`
  ${tw`text-4xl lg:text-5xl font-mono text-pink mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: -2px;
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-3xl font-mono text-tealDerp mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  em {
    font-size: 13px;
    text-transform: uppercase;
    font-style:normal;
    color: ${colors.indigo};
  }
`
