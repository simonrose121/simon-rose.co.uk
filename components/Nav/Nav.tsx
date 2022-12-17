import Image from 'next/image';
import * as React from 'react';

import Logo from '../../public/logo.svg';
import { NavLink } from './NavLink';

export const Nav: React.FC = () => {
	const navLinks = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Blog',
			href: '/blog',
		},
	];

	return (
		<nav className="bg-black shadow">
			<div className="container mx-auto">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex items-center px-2 lg:px-0">
						<Image src={Logo} width={70} height={50} alt="Simon Rose Logo" className="py-1" />
					</div>
					<div className="ml-2">
						<div className="flex">
							{navLinks.map(n => (
								<NavLink {...n} key={n.label} />
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
