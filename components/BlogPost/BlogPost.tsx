/* eslint-disable jsx-a11y/heading-has-content */
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { Footer, Nav } from 'Components';

const components = {
	a: ({ ...props }) => <Link href={props.href} className="underline inline" {...props} />,
	h1: ({ ...props }) => <h1 className="text-3xl mb-6" {...props} />,
	h2: ({ ...props }) => <h1 className="text-2xl" {...props} />,
	h3: ({ ...props }) => <h1 className="text-xl" {...props} />,
	h4: ({ ...props }) => <h1 className="text-lg" {...props} />,
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
			<div className="container mx-auto mt-10 text-sm flex flex-col gap-4">
				<MDXProvider components={components}>{children}</MDXProvider>
			</div>
			<Footer />
		</div>
	</>
);
