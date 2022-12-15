import * as React from 'react';
import { faGithub, faGoodreads, faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Social = {
	title: string;
	href: string;
	faIcon: IconDefinition;
};

export const Profile: React.FC = () => {
	const socialNetworks: Array<Social> = [
		{
			title: 'Email',
			href: 'mailto:simonrose121@gmail.com',
			faIcon: faEnvelope,
		},
		{
			title: 'Github',
			href: 'https://github.com/simonrose121',
			faIcon: faGithub,
		},
		{
			title: 'LinkedIn',
			href: 'http://uk.linkedin.com/in/simonprose/',
			faIcon: faLinkedin,
		},
		{
			title: 'Google Scholar',
			href: 'https://scholar.google.com/citations?user=wMWa2TkAAAAJ&hl=en',
			faIcon: faGraduationCap,
		},
		{
			title: 'Research Gate',
			href: 'https://www.researchgate.net/profile/Simon_Rose2',
			faIcon: faResearchgate,
		},
		{
			title: 'Goodreads',
			href: 'https://www.goodreads.com/user/show/22312452-simon-rose',
			faIcon: faGoodreads,
		},
	];
	return (
		<div className="flex items-center gap-8 flex-col md:flex-row p-5 md:p-0">
			<img
				src="https://s.gravatar.com/avatar/5a0fd43b00b619257adf46ee7626f254?s=300"
				alt="Simon Rose profile picture"
				className="rounded-full w-48 shadow-lg"
			/>
			<div className="flex prose flex-col gap-5">
				<p>Hi, I’m Simon.</p>
				<p>Welcome to my online CV and blog.</p>
				<p>
					I'm an ambitions and driven software engineer, with 10 years of experience building software,
					managing teams and implementing strategy and process. Most recently I've been working as a Lead
					Software Engineer and Chief Technology Officer. I have a PhD in Computer Science and Education. I
					pride myself on my strong interpersonal and teaching skills and exceptional ability in organisation,
					planning and time management.
				</p>
				<p>
					In my spare time, I love to read, exercise and I'm on a perpetual journey to understand myself. You
					can read more about that in my{' '}
					<Link href="/blog" className="inline underline">
						blog
					</Link>
					.
				</p>
				<p>I’d love to hear from you, please get in touch!</p>
				<div className="flex prose gap-4 md:prose-lg">
					{socialNetworks.map(social => (
						<Link href={social.href}>
							<FontAwesomeIcon icon={social.faIcon} className="w-5" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
