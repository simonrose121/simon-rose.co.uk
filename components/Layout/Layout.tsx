import { Nav } from 'components/Nav';
import * as React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<div className="bg-zinc-900 h-screen text-white">
				<Nav />
				{children}
			</div>
		</>
	);
};
