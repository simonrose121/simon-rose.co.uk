import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

type NavLinkProps = {
	href: string;
	label: string;
};
export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
	const router = useRouter();
	return (
		<Link
			href={href}
			key={label}
			className={`
				ml-4 
				px-3 
				py-2 
				rounded-md 
				text-md 
				leading-5 
				font-medium
				text-white 
				font-semibold
				hover:bg-gray-800
				hover:text-white 
				transition 
				duration-150 
				ease-in-out
				cursor-pointer 
				focus:outline-none
			    focus:text-white ${router.pathname === href ? 'underline' : ''}`}
		>
			{label}
		</Link>
	);
};
