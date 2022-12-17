import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import * as React from 'react';

import { Footer, Nav } from 'Components';

const components = {
	/* eslint-disable jsx-a11y/anchor-has-content */
	a: ({ ...props }) => <a href={props.href} className="underline inline" {...props} />,
	/* eslint-disable jsx-a11y/heading-has-content */
	h1: ({ ...props }) => <h1 className="text-3xl mb-6 font-semibold" {...props} />,
	h2: ({ ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
	h3: ({ ...props }) => <h3 className="text-xl font-semibold" {...props} />,
	h4: ({ ...props }) => <h4 className="text-lg font-semibold" {...props} />,
};

export const BlogPost: React.FC<{
	children: React.ReactNode;
	meta: {
		title: string;
		date: string;
	};
}> = ({ children, meta }) => (
	<>
		<div className="bg-zinc-900 text-white">
			<Head>
				<title>{meta.title} | Simon Rose</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Nav />
			<div className="container mx-auto mt-10 text-md flex flex-col gap-4">
				<MDXProvider components={components}>{children}</MDXProvider>
			</div>
			<Footer />
		</div>
	</>
);
