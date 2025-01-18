import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

import { Analytics, Layout } from 'Components';

const CustomNotFound: NextPage = (): JSX.Element => (
	<Layout>
		<Head>
			<title>Page Not Found | Simon Rose</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
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
