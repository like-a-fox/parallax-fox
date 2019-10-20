import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Title,
  Content,
  Inner,
  WaveWrapper,
  InnerWave,
  Footer,
  ContactText,
} from '../../styles';
import { ContactForm } from '../form';

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
  </>
);

ContactSectionBase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
};

const ContactSection = memo(ContactSectionBase);

const Contact = ({ offset }) => (
  <ContactSection offset={offset}>
    <Inner className="contact-title">
      <Title>Get in touch</Title>
      <ContactText>
        Say <a href="mailto:likeafox.dev@gmail.com">Hi </a>
      </ContactText>
      <ContactForm />
    </Inner>
    <Footer>
      &copy; 2019 by Like A Fox Development.{' '}
      <a href="https://github.com/like-a-fxx/parallax-fox">Github Repository</a>
      . Made by{' '}
      <a href="https://github.com/like-a-fox">Like A Fox Development</a>.
    </Footer>
  </ContactSection>
);

Contact.propTypes = {
  offset: PropTypes.number.isRequired,
};

export default memo(Contact);
