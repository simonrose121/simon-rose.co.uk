/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Layout, Position, Profile } from 'Components';
import { experiences, publications, qualifications } from 'Content';

const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>Home | Simon Rose</title>
			<link rel="icon" href="/favicon.svg" />
		</Head>

		<main className="container mx-auto mt-12 flex flex-col gap-14">
			<Profile />
			<div className="flex flex-col gap-4 p-5 md:p-0">
				<h2 className="text-2xl flex font-semibold">Experience</h2>
				<hr className="border-gray-400" />
				<div className="flex flex-col gap-10">
					{experiences.map((ex, index) => (
						<Position information={ex} key={index} />
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4 p-5 md:p-0">
				<h2 className="text-2xl flex font-semibold">Education</h2>
				<hr className="border-gray-400" />
				<div className="flex flex-col gap-10">
					{qualifications.map((ex, index) => (
						<Position information={ex} key={index} />
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4 p-5 md:p-0">
				<h2 className="text-2xl flex font-semibold">Publications</h2>
				<hr className="border-gray-400" />
				<div className="flex flex-col gap-10 text-sm">
					{publications.map((pub, index) => (
						<Link href={pub.href} key={index}>
							{pub.citation}
						</Link>
					))}
				</div>
			</div>
		</main>
	</Layout>
);

export default Home;
