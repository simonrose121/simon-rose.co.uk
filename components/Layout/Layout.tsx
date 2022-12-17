import * as React from 'react';

import { Nav, Footer } from 'Components';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>
		<div className="bg-zinc-900 text-white">
			<Nav />
			{children}
			<Footer />
		</div>
	</>
);
