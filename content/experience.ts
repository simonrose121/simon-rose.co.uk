/* eslint-disable max-len */
export type PositionType = {
	title: string;
	place: string;
	dates: string;
	description: string;
}

export const experiences: Array<PositionType> = [
	{
		title: 'Lead Software Engineer - Front-end (Contract)',
		place: '542 Digital',
		dates: 'July 2021 -',
		description: `
I joined 542 Digital as one of two Front-end Software Engineers, but took lead of the team when the business started to scale and there became a need for a larger front-end team.

During my time as Team Lead, I have:

- Hired software engineers at different levels to build a productive and cohesive team.
- Managed the team, and managed projects before 542 hired a dedicated project manager for the team.
- Overhauled the front-end tech stack from JavaScript/jQuery projects sitting within a larger Laravel application, to standalone TypeScript/React projects that can handle additional complexity.
- Developed a range of web applications both data-driven and creative using TypeScript, React, Redux and Next.js.
- Implemented a git submodule library for shared functionality across 542 React applications, including components with Storybook and utility functions.
- Been instrumental in enabling the business to expand from data-driven applications to creative-driven web applications, which the front-end team now build in Next.js with TypeScript.
- Implemented a testing strategy for front-end projects, including using automated tests in Cypress.
- Implemented a code review process and coding standards.
- Configured reusable CI/CD pipelines in Gitlab for the front-end projects, including versioning, change logs and linting.
- Configured application deployments to AWS using Docker/EKS and Amplify, Vercel and Cloudflare Pages.
- Designed API schemas for integration of front-end applications with the other tech stacks used within the business, mainly Drupal and Laravel.
- Overhauled 542’s project design phases to use Figma and created design systems and UI/UX designs for front-end projects. I then handed this off when they began hiring a design team.
- Implemented Agile processes to both the front-end and back-end teams at 542, including regular sprint planning, retrospectives and backlog planning.
- Seconded to another team within the business to implement software development processes such as code review, coding standards, commit message linting and regular process meetings.
- Transitioned the business to use Notion for documentation and implemented standardised documentation practices.
- Created and delivered presentations to senior stakeholders on new projects and analysis of existing parts of the business.
- Advised the business on growth from a small agency (10 employees) to an SME (40 employees).
		`,
	},
	{
		title: 'Chief Technology Officer (Contract)',
		place: 'MTa Learning',
		dates: 'January 2022 -',
		description: `
I was hired to oversee the development and implementation of the MTa Immersion online platform. 

My time as CTO has involved:

- Architecting the technical solution (full stack TypeScript using Next.js, Nest.js and MongoDB) to replace the legacy platform (Unity and Photon) based on requirements from the Managing Director.
- Hiring software engineers and designers at multiple levels to implement the platform.
- Handling the product strategy of MTa Immersion, including road-mapping, and managing task priorities and dependencies.
- Ideation and design of bespoke business simulations for large corporate clients.
- Managing projects using the Agile methodology.
- Developing a productive and open culture within the MTa Immersion team.
- Implementing processes for software development, communication and handling remote teams.
- UI/UX design in Figma using a design system of components and variables.
- Scaling the business through outsourcing and subscription targets.
- Aligning the MTa Immersion platform with MTa Learning business strategy.
- Attending expos and selling the MTa Learning products, including MTa Immersion, on the stand.
		`,
	},
	{
		title: 'End Point Assessor',
		place: 'Sheffield Hallam University',
		dates: 'August 2020 -',
		description: `
I was brought in as the first End Point Assessor on the Digital and Technology Solutions Specialist Integrated Degree Apprenticeship run by Sheffield Hallam University. Assessors must be actively working in the software industry and have a minimum of a Master’s degree in the field. The assessment is used by software companies of varying sizes to develop their employees and gear them towards management.

As part of the role, I have:

- Developed an assessment process, including assessment schemes and question frameworks, based on the Government provided standard.
- Conducted the assessments for 35+ apprentices, each involving a 2 hour discussion and grading a 10,000 word project report.
- Onboarded two additional assessors, one in Software Engineering and another in Data Analytics.
- Improved the process and tracking of the assessments year on year, working with the teaching team at Sheffield Hallam.
- Automated parts of the process such as document generation.
		`,
	},
	{
		title: 'Software Engineer (Freelance)',
		place: 'Only the Brave and The Black Eye Project',
		dates: 'April 2021 - September 2021',
		description: `
I was retained by two advertising agencies to maintain and build websites. This involved:

- Working on legacy Vue and WordPress web applications.
- Developing Vue websites from Adobe XD designs.
- Building animated HTML banners in Figma for large-scale advertising campaigns.
		`,
	},
	{
		title: 'Research Software Engineer (Freelance)',
		place: 'Loughborough University',
		dates: 'May 2020 - October 2021',
		description: `
I built software for two research projects at Loughborough University, this involved:

- Understanding and interpreting client requirements using my understanding of research and research software.
- Developing full-stack applications using Vue.js, Vuex, Express and MongoDB (Cognitive Function Task) and Angular, RXJS and Firebase (Numeralis).
- Deploying applications to on premises servers using PM2 and Nginx.
- Designing UI/UX using Figma.
- Conducting regular meetings to handle client requirements using an Agile approach.
		`,
	},
	{
		title: 'Associate Lecturer',
		place: 'Sheffield Hallam University',
		dates: 'September 2016 - October 2020',
		description: `
As part of my PhD scholarship, I lectured on Computer Science and Software Engineering modules. I was then hired on a part-time basis after completing the degree.

This involved:

- Preparing and delivering teaching content on a number of undergraduate  Computer Science and Software Engineering modules, including Fundamentals of Programming (using C++) and Group Software Development (JavaScript.)
- Supervising MSc, BSc and BEng students on their final year projects.
- Student voice ‘outstanding’ member of staff 2016-17 and 2019-20.
		`,
	},
	{
		title: 'Computing Teacher',
		place: 'Mercia Secondary School',
		dates: 'September 2018 - July 2019',
		description: `
I worked part-time as a Computing teacher at Mercia, teaching the first year group into a new school whilst they hired a full-time member of staff.

This involved:

- Preparing and delivering teaching content in line with the Computer Science curriculum.
		`,
	},
	{
		title: 'Full-stack Software Engineer',
		place: '3Squared',
		dates: 'September 2013 - May 2016',
		description: `
I did my industrial placement at 3Squared, and was kept on part-time whilst finishing my degree. I was recently interviewed as a [former placement student](https://www.linkedin.com/posts/3squared-ltd._placements-activity-6789886310145368064-WM6s).

The position involved:

- Developing full-stack web applications in C# using ASP.NET MVC and Web Forms.
- Improving JavaScript and CSS practices.
- Working in Agile teams.
- Code reviews.
- Version control Team Foundation Server and later Git, as the company transitioned towards that.
- API design and implementation.
		`,
	},
];
