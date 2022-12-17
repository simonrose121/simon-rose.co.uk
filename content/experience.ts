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
		dates: 'July 21 -',
		description: `
I joined 542 Digital as a Senior Front-end Software Engineer, but was quickly promoted when the business started to scale and there became a need for a larger front-end team.

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
- Seconded to another team within the business to implement software development processes such as code review, coding standards, commit message linting and regular process meetings.
- Transitioned the business to use Notion and implemented standardised documentation practices.
- Created and delivered presentations to senior stakeholders on new projects and analysis of existing parts of the business.
- Advised the business on growth in terms of software development strategy from a small agency (10 employees) to an SME (40 employees).
		`,
	},
	{
		position: 'Chief Technology Officer',
		company: 'MTa Learning',
		dates: 'January 22 -',
		description: `
I was hired to oversee the development and implementation of the MTa Immersion online platform. 

My time as CTO has involved:

- Architecting the technical solution (full stack TypeScript using Next.js, Nest.js and MongoDB) to replace the legacy platform (Unity and Photon) based on requirements from the Managing Director.
- Hiring software engineers and designers to implement the platform.
- Handling the product strategy of MTa Immersion, including roadmapping, task priorities and dependencies.
- Managing the project using an Agile approach.
- Developing a productive and open culture within the MTa Immersion team.
- Implementing processes for software development, communication and handling remote teams.
- UI/UX design in Figma using a design system of components and variables.
- Scaling the business through outsourcing and subscription targets.
- Aligning the MTa Immersion platform with MTa Learning business strategy.
- Attending expos and selling the MTa Learning products, including MTa Immersion, on the stand.
		`,
	},
];
