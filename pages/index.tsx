/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Analytics, Layout, Position, Profile } from 'Components';
import { experiences, publications, qualifications } from 'Content';

const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>Home | Simon Rose</title>
			<meta
				name="description"
				content="Simon Rose is Software Engineer and Tech Leader with a PhD in Computer Science and Education."
			/>
			<link rel="icon" href="/favicon.jpg" />
		</Head>
		<Analytics />
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
				<h2 className="text-2xl flex font-semibold">Skills</h2>
				<hr className="border-gray-400" />
				<div className="flex justify-between gap-10 md:gap-0 flex-col md:flex-row">
					<div className="flex flex-col md:basis-1/3">
						<p className="font-bold">Technical</p>
						<ul className="list-disc ml-7">
							<li>React, Next.js and Redux</li>
							<li>AngularJS and RxJS</li>
							<li>Vue.js and Nuxt.js</li>
							<li>TypeScript/JavaScript</li>
							<li>HTML/CSS/SCSS</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>Automated testing (Jest/Cypress/Playwright)</li>
							<li>MongoDB/SQL databases</li>
							<li>GraphQL</li>
							<li>Deployments using Vercel, Netlify, AWS, Google Firebase and Ubuntu servers.</li>
							<li>Pipeline configuration using Gitlab CI/CD and Jenkins</li>
						</ul>
					</div>
					<div className="flex flex-col md:basis-1/3">
						<p className="font-bold">Design and Project Management</p>
						<ul className="list-disc ml-7">
							<li>UI/UX design</li>
							<li>Figma</li>
							<li>Jira/Linear/Trello</li>
							<li>Agile</li>
						</ul>
					</div>
					<div className="flex flex-col md:basis-1/3">
						<p className="font-bold">Soft Skills</p>
						<ul className="list-disc ml-7">
							<li>Problem-solving</li>
							<li>Organisation</li>
							<li>Planning</li>
							<li>Adaptability</li>
							<li>Communication</li>
							<li>Attention to detail</li>
							<li>Pragmatism</li>
							<li>Evaluating competency</li>
							<li>Situational awareness</li>
							<li>Leadership</li>
							<li>Business awareness</li>
							<li>Educating</li>
							<li>Presenting</li>
							<li>Building productive team cultures</li>
						</ul>
					</div>
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
				<div className="flex flex-col gap-10 text-md">
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
