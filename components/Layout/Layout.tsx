import * as React from 'react';

import { Nav, Footer, Analytics } from 'Components';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>
		<Analytics />
		<div className="bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
			<Nav />
			<div className="mb-auto">{children}</div>
			<Footer />
		</div>
	</>
);
