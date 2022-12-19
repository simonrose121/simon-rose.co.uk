import { faGithub, faGoodreads, faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import * as React from 'react';

type Social = {
	title: string;
	href: string;
	faIcon: IconDefinition;
};

export const Profile: React.FC = () => {
	const socialNetworks: Array<Social> = [
		{
			title: 'Email',
			href: 'mailto:simon@rose.tech',
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
				alt="Simon Rose profile"
				className="rounded-full w-48 shadow-lg"
			/>
			<div className="flex text-md flex-col gap-5">
				<p>Hi, I’m Simon.</p>
				<p>Welcome to my online CV and blog.</p>
				<p>
					I&apos;m an ambitious and driven software engineer, with 10 years of experience building software,
					managing teams and implementing strategy and process. I run my own software company,{' '}
					<Link href="https://www.rose.tech" className="inline underline">
						RoseTech
					</Link>
					, and most recently I&apos;ve been contracting as a Lead Software Engineer and Chief Technology
					Officer.
				</p>
				<p>
					I have a PhD in Computer Science and Education, and my research focused on creating games to teach
					children programming skills. I pride myself on my strong interpersonal and teaching skills, and my
					exceptional ability in organisation, planning and time management.
				</p>
				<p>
					In my spare time, I love to read, exercise and travel. I&apos;m on a perpetual journey to understand
					and improve myself, which you can read more about on my{' '}
					<Link href="/blog" className="inline underline">
						blog
					</Link>
					.
				</p>
				<p>I’d love to hear from you, please get in touch!</p>
				<div className="flex gap-4 md:prose-lg">
					{socialNetworks.map(social => (
						<Link href={social.href} key={social.title}>
							<FontAwesomeIcon icon={social.faIcon} className="w-5" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
