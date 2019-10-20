import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';
import { colors } from '../../tailwind';

export const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};

  &.hero {
    mix-blend-mode: color-dodge;
  }
`;
export const Divider = styled(ParallaxLayer)`
  ${tw`absolute w-full h-full`};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

export const Inner = styled.div`
  ${tw`w-full xxl:w-2/3 text-center lg:text-left`};
`;

export const ContactInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: -webkit-fill-available;
  &.contact {
    .contact-inner {
      width: 40%;
      height: 100%;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    &.contact {
      width: -webkit-fill-available;
      .contact-inner {
        width: -webkit-fill-available;
      }
    }
  }
`;

export const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

export const ContactText = styled.p`
  ${tw`text-grey-light font-mono text-xl md:text-2xl lg:text-3xl`};
  margin-top: 12px;
`;

export const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-mono text-md lg:text-lg`};
`;
export const ProjectsWrapper = styled.div`
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
`;

export const WrapperDiv = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

export const TitleWrapper = styled.div`
  ${tw`text-white relative uppercase text-xl md:text-2xl xl:text-3xl font-mono `};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 1rem;
  background-color: rgba(0, 0, 40, 0.1);
  border-radius: 4px;
  &:before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 40, 0.3);
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px);
  }
`;
export const Text = styled.div`
  ${tw`opacity-85 font-mono text-white text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-weight: 200;
  letter-spacing: -1px;
`;

//Input Styles

export const InputWrapper = styled.div`
  ${tw`relative no-underline rounded-lg text-white flex-col flex justify-end font-mono`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const InputLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize || '1.2rem'};
  color: ${({ color }) => color || colors.white};
  display: inline-flex;
  text-transform: uppercase;
  opacity: 0.7;
  transform: translate(8px, 8px);
  font-family: inherit;
  z-index: 1000;
`;

export const Input = styled.input`
  text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
  opacity: 0.7;
  transition: box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: #23262b;
  height: ${({ height }) => height || 52}px;
  box-shadow: 0 4px 0 0
    ${({ underlineColor, error }) =>
      underlineColor ? colors.greyDigo : error ? error : colors.pink};
  border: none;
  outline: none;
  opacity: 0.9;
  width: ${({ width }) => width}%;
  padding: 8px;
  padding-left: ${({ padding }) => padding || 12}px;
  padding-top: 12px;
  font-size: 1.3rem;
  font-family: inherit;
  margin-bottom: 24px;
  font-weight: 200;
  color: ${({ error, color }) =>
    error ? colors.pink : color ? color : colors.pink};
  &:hover {
    box-shadow: 0 4px 0 0 ${colors.grey};
  }
`;

//Text Area Alt

export const TextArea = styled.textarea`
  text-shadow: 0 2px 10px rgba(20, 20, 20, 0.3);
  font-size: 1.3rem;
  transition: box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 200;
  min-height: 120px;
  letter-spacing: -1px;
  resize: none;
  padding: 8px;
  opacity: 0.9;
  font-family: inherit;
  text-transform: capitalize;
  background-color: #23262b;
  box-shadow: 0 4px 0 0
    ${({ underlineColor, error }) =>
      underlineColor ? colors.greyDigo : error ? error : colors.pink};
  border: none;
  outline: none;
  color: ${({ error, color }) =>
    error ? colors.pink : color ? color : colors.pink};

  width: 100%;
  padding: ${({ padding }) => padding || 12}px;
  &:hover {
    box-shadow: 0 4px 0 0 ${colors.grey};
  }
`;

//Form

export const Form = styled.form`
  ${tw`shadow-lg relative rounded-lg text-white flex-col flex stretch font-mono`}
  width: 100%;
  flex-grow: 1;
  padding: 24px;
  background-color: #161719;
  opacity: 0.8;
  @media (max-width: 700px) {
    margin-bottom: 80px;
  }
`;

//Button For Form
export const FormButton = styled.a`
  ${tw`shadow-sm text-xl font-mono`}
  transition: background-color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: #23262b;
  margin-top: 24px;
  opacity: 0.9;
  font-weight: 600;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${colors.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  max-height: 48px;
  min-width: 50%;
  flex-grow: 1;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: ${colors.grey};
  }
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
  position: relative;
  ${tw`shadow-lg relative no-underline rounded-lg text-white flex-col flex justify-end`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-height: 19rem;
  filter: grayscale(30%);
  overflow: hidden;
  &:before {
    content: '';
    opacity: 0.75;
    background-image: url(${props => props.bg});
    background-color: rgba(10, 10, 50, 0.4);
    background-position: center;
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
      opacity: 0.9;
    }
    transform: translateY(-5px);
    filter: grayscale(30%);
  }
`;
export const BigTitle = styled.h1`
  ${tw`text-4xl lg:text-5xl font-mono text-pink mb-3 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: -2px;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  i {
    color: ${props => props.subColor || colors.perpSkiz};
    height: inherit;
    font-size: 1rem;
    display: inline-flex;
    align-items: flex-start;
  }
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-3xl font-mono text-tealDerp mt-6 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  em {
    font-size: 13px;
    text-transform: uppercase;
    font-style: normal;
    color: ${colors.pink};
  }
`;
