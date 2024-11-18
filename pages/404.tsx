import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { Analytics, Layout } from 'Components';

const CustomNotFound: NextPage = (): JSX.Element => (
	<Layout>
		<Head>
			<title>Page Not Found | Simon Rose</title>
			<link rel="icon" href="/favicon.jpg" />
		</Head>
		<Analytics />
		<main className="container mx-auto mt-12 flex flex-col items-center">
			<h2>
				Oops, you&apos;ve taken a wrong turn. Back to{' '}
				<Link href="/" className="underline inline">
					home.
				</Link>
			</h2>
		</main>
	</Layout>
);

export default CustomNotFound;
