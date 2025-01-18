import dayjs from 'dayjs';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Analytics, Layout } from 'Components';
import { posts } from 'Content';

const Blog: NextPage = () => (
	<Layout>
		<Head>
			<title>Blog | Simon Rose</title>
			<meta
				name="description"
				// eslint-disable-next-line max-len
				content="Simon Rose's blog contains posts on the books he's read and his perpetual journey to understand himself and the world."
			/>
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
		<Analytics />
		<main className="container mx-auto p-5 md:p-0">
			<h1 className="text-3xl mb-6 font-semibold mt-12">Posts</h1>
			<div className="flex flex-col gap-8">
				{posts.map(post => (
					<div key={post.id}>
						<h2 className="text-2xl">
							<Link href={`/blog/${post.path}`}>{post.title}</Link>
						</h2>
						<h4 className="text-sm">{dayjs(post.date).format('MMM D, YYYY')}</h4>
					</div>
				))}
			</div>
		</main>
	</Layout>
);

export default Blog;
