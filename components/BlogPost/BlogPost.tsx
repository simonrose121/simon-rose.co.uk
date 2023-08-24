import { MDXProvider } from '@mdx-js/react';
import dayjs from 'dayjs';
import Head from 'next/head';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import { Analytics, Footer, Nav } from 'Components';
import { BlogPostMeta } from 'Content';

// Disable the following rules to allow overriding MDX elements
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
const components = {
	a: ({ ...props }) => <a href={props.href} className="underline inline" {...props} />,
	h1: ({ ...props }) => <h1 className="text-3xl mb-6 font-semibold" {...props} />,
	h2: ({ ...props }) => <h3 className="text-2xl font-semibold" {...props} />,
	h3: ({ children, ...props }) => {
		const idText = children.replace(/ /g, '_').toLowerCase();
		return (
			<h2 className="text-xl -mb-2 mt-6 font-semibold" id={idText} {...props}>
				{children}
			</h2>
		);
	},
	h4: ({ ...props }) => <h4 className="text-lg -mb-2 mt-4 font-semibold" {...props} />,
	blockquote: ({ ...props }) => <i className="italics pl-4 text-zinc-200 border-l-4 border-zinc-600" {...props} />,
};

export const BlogPost: React.FC<{
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	readonly meta: BlogPostMeta;
}> = ({ children, meta }) => {
	const contentString = renderToString(children);

	const getHeadings = source => {
		const regex = /<h3>(.*?)<\/h3>/g;

		if (source.match(regex)) {
			return source.match(regex).map(heading => {
				const headingText = heading.replace('<h3>', '').replace('</h3>', '');

				const link = `#${headingText.replace(/ /g, '_').toLowerCase()}`;

				return {
					text: headingText,
					link,
				};
			});
		}

		return [];
	};

	const headings = getHeadings(contentString);

	return (
		<>
			<div className="bg-zinc-900 text-white">
				<Head>
					<title>{meta.title} | Simon Rose</title>
					<link rel="icon" href="/favicon.png" />
					{meta.socialImage ? (
						<>
							<meta property="og:title" content={meta.title} />
							{meta.description ? <meta property="og:description" content={meta.description} /> : <></>}
							<meta property="og:image" content={meta.socialImage} />
							<meta property="og:image:type" content="image/png" />
							<meta property="og:image:width" content="650" />
							<meta property="og:image:height" content="550" />
							<meta property="og:author" content="Simon Rose" />
							<meta property="og:type" content="article" />
							<meta property="og:published_date" content={dayjs(meta.date).toISOString()} />
						</>
					) : (
						<></>
					)}
				</Head>
				<Analytics />
				<Nav />
				<div className="container mx-auto mt-10 text-md p-5 md:p-0">
					<h1 className="text-3xl font-semibold">{meta.title}</h1>
					<h6 className="text-sm">{dayjs(meta.date).format('MMM D, YYYY')}</h6>
					<h2 className="text-xl font-semibold mb-2 mt-10">Contents</h2>
					{headings.length > 0 ? (
						<ol>
							{headings.map(heading => (
								<li key={heading.text}>
									<a href={heading.link} className="underline">
										{heading.text}
									</a>
								</li>
							))}
						</ol>
					) : null}
					<div className="mt-4 flex flex-col gap-4">
						<MDXProvider components={components}>{children}</MDXProvider>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};
