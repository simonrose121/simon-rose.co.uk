/* eslint-disable max-len */
export type Experience = {
	position: string;
	company: string;
	dates: string;
	description: string;
}

export const experiences: Array<Experience> = [
	{
		position: 'Lead Software Engineer - Front-end',
		company: '542 Digital',
		dates: 'July 21 - April 23',
		description: `I joined 542 Digital as a Senior Front-end Software Engineer, but was quickly promoted when the business started to scale and there became a need for a larger front-end team.

During my time as Team Lead, I have:

- Hired software engineers at different levels to build a well functioning and cohesive team.
- Managed the team, and managed projects before 542 hired a dedicated project manager for the team.
- Overhauled the front-end tech stack from JavaScript/jQuery projects sitting within a larger Laravel application, to standalone TypeScript/React projects that can handle additional complexity.
- Developed a range of web applications both data-driven and creative using TypeScript, React, Redux and Next.js.
- Implemented a git submodule library for shared functionality across 542 React applications, including components with Storybook and utility functions.
- Been instrumental in enabling the business to expand from data-driven applications to creative-driven web applications, which the front-end team now build in Next.js with TypeScript.
- Implemented a testing strategy for front-end projects, including using automated tests in Cypress.
- Implemented a code review process and coding standards.
- Configured reusable CI/CD pipelines in Gitlab for the front-end projects, including versioning, change logs and linting.
- Configured application deployments to AWS using Docker/EKS and Amplify.
- Designed API schemas for integration of front-end applications with the other tech stacks used within the business, mainly Drupal and Laravel.
- Overhauled 542’s project design phases to use Figma and created design systems and UI/UX designs for front-end projects.
- Implemented Agile processes to both the front-end and back-end teams at 542, including regular sprint planning, retrospectives and backlog planning.
- Seconded to the back-end team to implement software development processes such as code review, coding standards, commit message linting and regular process meetings.
- Transitioned the business to use Notion and implemented standardised documentation practices.
- Created and delivered presentations to senior stakeholders on new projects and analysis of existing parts of the business.
- Advised the business on growth in terms of software development strategy from a small agency to a medium-sized business.
` as string,
	},
];
