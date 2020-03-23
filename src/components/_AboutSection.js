import React,{memo} from 'react';
import avatar from '../images/avatar.png';
import {AboutDesc,AboutHero,AboutSub,Avatar,Divider} from '../styles';
import {default as SectionTemplate} from './_SectionTemplate';

const AboutDivider = memo(function AboutDivider({ ...parallaxProps }) {
	return (
		<Divider
			bg='linear-gradient(to right, rgba(30,40,50,.9) 0%, rgba(80, 100, 120, .7) 100%)'
			clipPath='polygon(-40% 27% ,-18% 100%,131% 85%,73% 0%)'
			speed={0.2}
			offset={3}
			{...parallaxProps}
		/>
	);
});

const AboutSection = (props) => {
	const Divider = <AboutDivider {...props} />;
	return (
		<SectionTemplate
			speed={-0.1}
			factor={1.5}
			offset={3}
			Divider={Divider}
			contentClassName={'about'}
			sectionTitle={'About'}
			{...props}>
			<AboutHero>
				<Avatar src={avatar} alt='Like A Fox' />
				<AboutSub>
					Well, I’m going to tell you the best and the worst thing you’ve ever heard.
					Heroes aren’t born.
				</AboutSub>
			</AboutHero>
			<AboutDesc>
				You just go out there and grind it out. You fail and you look foolish and
				you just keep grinding. There is nothing else. There is no ‘chosen one,’
				there is no destiny, nobody wakes up one day and finds out they’re amazing
				at something. There’s just slamming your head into the wall, refusing to
				take no for an answer. Being relentless, until either the wall or your head
				breaks. You want to be a hero? You don’t have to make some grand decision.
				There’s no inspirational music, there’s no montage. You just don’t quit.
			</AboutDesc>
		</SectionTemplate>
	);
};

export default memo(AboutSection);

