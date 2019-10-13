import React, { memo } from 'react';
import {
  AboutHero,
  AboutSub,
  AboutDesc,
  Avatar,
  Inner,
  Content,
  Title,
} from '../../styles';
import { TopAboutDivider, BottomAboutDivider } from './_dividers';
import avatar from '../../images/avatar.png';

const About = () => (
  <>
    <TopAboutDivider />
    <BottomAboutDivider />
    <Content speed={0.4} offset={3}>
      <Inner>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Like A Fox" />
          <AboutSub>
            {`Well, I’m going to tell you the best and the worst thing you’ve ever
        heard. Heroes aren’t born.`}
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          {`You just go out there and grind it out. You fail and you look foolish
      and you just keep grinding. There is nothing else. There is no ‘chosen
      one,’ there is no destiny, nobody wakes up one day and finds out
      they’re amazing at something. There’s just slamming your head into the
      wall, refusing to take no for an answer. Being relentless, until
      either the wall or your head breaks. You want to be a hero? You don’t
      have to make some grand decision. There’s no inspirational music,
      there’s no montage. You just don’t quit.`}
        </AboutDesc>
      </Inner>
    </Content>
  </>
);
export default memo(About);
