import { MDXProvider } from '@mdx-js/react';
import dayjs from 'dayjs';
import Head from 'next/head';
import * as React from 'react';

import { Footer, Nav } from 'Components';
import { BlogPostMeta } from 'Content';

// Disable the following rules to allow overriding MDX elements
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
const components = {
	a: ({ ...props }) => <a href={props.href} className="underline inline" {...props} />,
	h1: ({ ...props }) => <h1 className="text-3xl mb-6 font-semibold" {...props} />,
	h2: ({ ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
	h3: ({ ...props }) => <h3 className="text-xl font-semibold" {...props} />,
	h4: ({ ...props }) => <h4 className="text-lg font-semibold" {...props} />,
	blockquote: ({ ...props }) => <i className="italics" {...props} />,
};

export const BlogPost: React.FC<{
	children: React.ReactNode;
	meta: BlogPostMeta;
}> = ({ children, meta }) => (
	<>
		<div className="bg-zinc-900 text-white">
			<Head>
				<title>{meta.title} | Simon Rose</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Nav />
			<div className="container mx-auto mt-10 text-md p-5 md:p-0">
				<h1 className="text-3xl font-semibold">{meta.title}</h1>
				<h6 className="text-sm">{dayjs(meta.date).format('MMM D, YYYY')}</h6>
				<div className="mt-10 flex flex-col gap-4">
					<MDXProvider components={components}>{children}</MDXProvider>
				</div>
			</div>
			<Footer />
		</div>
	</>
);
