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
			{/* Use an img here to avoid Next Image being in a span */}
			<img
				src="https://s.gravatar.com/avatar/5a0fd43b00b619257adf46ee7626f254?s=500"
				alt="Simon Rose profile"
				className="rounded-full w-48 shadow-lg"
			/>
			<div className="flex text-md flex-col gap-5">
				<p>Hi, I’m Dr Simon Rose.</p>
				<p>Welcome to my online CV and blog.</p>
				<p>
					I am a software engineer and tech leader with 10+ years of experience building and leading
					high-performing, innovative and results-driven software development teams. I have led the design,
					development and delivery of complex software projects across finance, education and academia.
				</p>
				<p>
					I&apos;m currently working as Principal Engineer at{' '}
					<Link href="https://www.thenational.academy/" className="inline underline">
						Oak National Academy
					</Link>
					, after running my{' '}
					<Link href="https://www.rose.tech" className="inline underline">
						own software consultancy
					</Link>{' '}
					for several years. I am also an assessor on the Digital and Technology Solutions Specialist
					Integrated Degree Apprenticeship, helping to shape the next generation of tech leaders.
				</p>
				<p>
					I pride myself on my leadership and communication skills. I am exceptional at organisation, process
					implementation and attention to detail. I hold a PhD in Computer Science and Education, and my
					research focused on creating games to teach children programming skills. The game I created,{' '}
					<Link href="https://www.pirateplunder.app" className="inline underline">
						Pirate Plunder
					</Link>{' '}
					is available to play for free online.
				</p>
				<p>
					In my spare time, I love to{' '}
					<Link href="https://www.goodreads.com/user/show/22312452-simon-rose" className="inline underline">
						read
					</Link>
					,{' '}
					<Link href="https://www.strava.com/athletes/20580417" className="inline underline">
						exercise
					</Link>{' '}
					and travel. I&apos;m on a perpetual journey to understand and improve myself, which you can read
					more about on my{' '}
					<Link href="/blog" className="inline underline">
						blog
					</Link>
					.
				</p>
				{/* <p>
					If you&apos;d like my CV in a more traditional format, there is also a{' '}
					<Link href="/simon-rose-cv.pdf" className="inline underline">
						PDF version.
					</Link>
				</p> */}
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
