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
	h4: ({ children, ...props }) => {
		const idText = children.replace(/ /g, '_').toLowerCase();
		return (
			<h2 className="text-xl -mb-2 mt-4 font-semibold" id={idText} {...props}>
				{children}
			</h2>
		);
	},
	blockquote: ({ ...props }) => <i className="italics pl-4 text-zinc-200 border-l-4 border-zinc-600" {...props} />,
};

export const BlogPost: React.FC<{
	children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
	readonly meta: BlogPostMeta;
}> = ({ children, meta }) => {
	const contentString = renderToString(children);

	const getHeadings = source => {
		const h3Regex = /<h3>(.*?)<\/h3>/g;
		const h4Regex = /<h4>(.*?)<\/h4>/g;

		if (source.match(h3Regex)) {
			return source.match(h3Regex).map(h3Heading => {
				// Extract h3 text
				const headingText = h3Heading.replace('<h3>', '').replace('</h3>', '');
				const link = `#${headingText.replace(/ /g, '_').toLowerCase()}`;

				// Find the content following this h3 heading
				const h3StartIndex = source.indexOf(h3Heading);
				const nextH3Index = source.indexOf('<h3>', h3StartIndex + 1);

				const isLastH3 = nextH3Index === -1;
				const startSlice = h3StartIndex;
				const endSlice = isLastH3 ? undefined : nextH3Index;
				const h3Section = source.slice(startSlice, endSlice);

				// Extract h4 subheadings within the h3 section
				const subHeadings = (h3Section.match(h4Regex) || []).map(h4Heading => {
					const subHeadingText = h4Heading.replace('<h4>', '').replace('</h4>', '');
					const subLink = `#${subHeadingText.replace(/ /g, '_').toLowerCase()}`;
					return {
						text: subHeadingText,
						link: subLink,
					};
				});

				return {
					text: headingText,
					link,
					subHeadings,
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
					<link rel="icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					{meta.socialImage ? (
						<>
							<meta property="og:title" content={meta.title} />
							{meta.description ? <meta property="og:description" content={meta.description} /> : <></>}
							<meta property="og:image" content={meta.socialImage} />
							<meta property="og:image:type" content="image/png" />
							<meta property="og:image:width" content="650" />
							<meta property="og:image:height" content="550" />
							<meta name="author" content="Simon Rose" />
							<meta
								name="publish_date"
								property="og:publish_date"
								content={dayjs(meta.date).toISOString().slice(0, -1)}
							/>
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
									{heading.subHeadings.length > 0 ? (
										<ol className="ml-6">
											{heading.subHeadings.map(subHeading => (
												<li key={subHeading.text}>
													<a href={subHeading.link} className="underline">
														{subHeading.text}
													</a>
												</li>
											))}
										</ol>
									) : null}
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
