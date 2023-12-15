/* eslint-disable max-len */
export type PositionType = {
	title: string;
	place: string;
	dates: string;
	description: string;
	placeUrl?: string | undefined;
}

export const experiences: Array<PositionType> = [
	{
		title: 'Senior Lead Software Engineer - Front-end',
		place: 'Thrive',
		placeUrl: 'https://www.thrivelearning.com/',
		dates: 'October 2023 -',
		description: `
After taking a 6 month career break, I took a permanent role at Thrive to build my leadership and management experience in an industry that I'm passionate about.

This has involved:

- Guiding the front-end implementation of Thrive's learning platform using TypeScript, React, Redux and GraphQL.
- Line managing 8 front-end software engineers (4 direct and 4 indirect) of differing levels of seniority and experience, guiding personal development and setting goals through 1:1s.
- Implementing front-end best practices and ensuring consistency across workstreams.
- Working on platform health and technical debt initiatives, collaborating with back-end, QA and cloud engineers.
- Building out Thrive's component library using Storybook and MUI, working closely with the UI/UX team.
- Leading the implementation of Notion across the business.
		`,
	},
	{
		title: 'Senior Technical Manager - Front-end',
		place: '542 Digital',
		placeUrl: 'https://542.digital/',
		dates: 'April 2022 - March 2023',
		description: `
As 542 Digital took on more work and expanded into other operating areas, my responsibilities broadened and my role transitioned to a Senior Technical Manager. During this time I have:
- Overseen the development of 19 fintech web applications, both data-driven and creative, using TypeScript, React, Redux and Next.js. Most of these applications are restricted access, but publicly available examples include [Power With Gold](https://powerwithgold.mygoldguide.in/), [invest.gold](https://invest.gold/) and [Gold Return Attribution Model](https://www.gold.org/goldhub/tools/gold-return-attribution-model).
- Led a team of 5 engineers, supporting their personal and professional development through 1:1s and continuous feedback. 
- Implemented Agile processes to both the front-end and back-end teams at 542, including regular sprint planning, retrospectives and backlog planning.
- Seconded to another team within the business to implement software development processes such as code review, coding standards, commit message linting and regular process meetings.
- Worked across technical teams to produce cross-platform solutions.
- Conducted feasibility studies, business case development and project budgeting.
- Documented and reported projects across the business. 
- Was instrumental in enabling the business to expand from data-driven applications to creative-driven web applications, which the front-end team now build in Next.js with TypeScript.
- Created and delivered presentations to senior stakeholders on new projects and analysis of existing parts of the business.
- Conducted interviews for other roles in the business, including Project Managers and Designers.
- Consulted the business on growth from a small agency (10 employees) to an SME (40 employees) and acted as a de-facto Director in terms of financial and business discussions.
		`,
	},
	{
		title: 'Chief Technology Officer',
		place: 'MTa Learning',
		placeUrl: 'https://www.experientiallearning.org/',
		dates: 'January 2022 - March 2023',
		description: `
I was hired to oversee the development and implementation of the MTa Immersion online platform. 

My time as CTO has involved:

- Architecting the technical solution (full stack TypeScript using Next.js, Nest.js and MongoDB) to replace the legacy platform (Unity and Photon) based on requirements from the Managing Director.
- Overseeing the delivery of 18 web applications and APIs for the platform activities using the above technology stack for [MTa Immersion](https://www.experientiallearning.org/online/).
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
		title: 'Lead End Point Assessor (Part-time)',
		place: 'Sheffield Hallam University',
		placeUrl: 'https://www.shu.ac.uk/',
		dates: 'August 2020 -',
		description: `
I was brought in as the first End Point Assessor on the Digital and Technology Solutions Specialist Integrated Degree Apprenticeship run by Sheffield Hallam University. Assessors must be actively working in the software industry and have a minimum of a Master’s degree in the field. The assessment is used by software companies of varying sizes to develop their employees and gear them towards management.

As part of the role, I have:

- Developed an assessment process, including assessment schemes and question frameworks, based on the Government provided standard.
- Conducted the assessments for 40 apprentices over 3 years, each involving a 2 hour discussion and grading a 10,000 word project report.
- Onboarded two additional assessors, one in Software Engineering and another in Data Analytics.
- Improved the process and tracking of the assessments year on year, working with the teaching team at Sheffield Hallam.
- Automated parts of the process such as document generation.
		`,
	},
	{
		title: 'Technical Lead - Front-end',
		place: '542 Digital',
		placeUrl: 'https://542.digital/',
		dates: 'October 2021 - March 2022',
		description: `
As 542 Digital grew and I transitioned to 4 days a week. I was given the opportunity to lead the front-end team.

During my time as Team Lead, I:

- Hired software engineers at different levels to build a productive and cohesive team.
- Managed a team of 5 engineers, and managed projects before 542 hired a dedicated project manager for the team.
- Overhauled the front-end tech stack from JavaScript/jQuery projects sitting within a larger Laravel application, to standalone TypeScript/React projects that can handle additional complexity.
- Overseen the development of 8 fintech web applications, both data-driven and creative, using TypeScript, React, Redux and Next.js. Publicly available examples include [542 Digital's Website](https://542.digital/) and [Qaurum](https://qaurum.gold.org/).
- Implemented a git submodule library for shared functionality across 542 React applications, including components with Storybook and utility functions.
- Transitioned the business to use Notion for documentation and implemented standardised documentation practices.
- Implemented a testing strategy for front-end projects, including using automated tests in Cypress.
- Implemented a code review process and coding standards.
- Configured application deployments to AWS using Docker/EKS and Amplify, Vercel and Cloudflare Pages.
- Configured reusable CI/CD pipelines in Gitlab for the front-end projects, including versioning, change logs and linting.
- Designed API schemas for integration of front-end applications with the other tech stacks used within the business, mainly Drupal and Laravel.
- Overhauled 542’s project design phases to use Figma and created design systems and UI/UX designs for front-end projects. I then handed this off when they began hiring a design team.
		`,
	},
	{
		title: 'Senior Software Engineer - Front-end',
		place: '542 Digital',
		placeUrl: 'https://542.digital/',
		dates: 'July 2021 - September 2021',
		description: `
I initially joined 542 Digital part-time as a Senior Front-end Software Engineer.

During this time I:
- Developed 2 web applications in React, JavaScript and Highcharts. Both these tools are restricted access.
- Maintained 4 legacy applications in JavaScript and jQuery.
- Was involved in high-level discussions with internal and external stakeholders on implementation strategy for a large project.
		`,
	},
	{
		title: 'Software Engineer (Freelance)',
		place: 'The Black Eye Project',
		placeUrl: 'https://theblackeyeproject.co.uk/',
		dates: 'May 2021 - September 2021',
		description: `
I maintained and built websites for The Black Eye Project. This involved:

- Working on legacy Vue and WordPress web applications. Examples include and [The Black Eye Project](https://theblackeyeproject.co.uk/) and [Mudd Tiling](https://mudd-tiling.com/).
- Developing Vue websites from Adobe XD designs. Examples include [The Synergy Building](https://www.thesynergybuilding.com/).
		`,
	},
	{
		title: 'Software Engineer (Freelance)',
		place: 'Only The Brave',
		placeUrl: 'https://www.onlythebrave.co.uk/',
		dates: 'April 2021 - August 2021',
		description: `
I built banners for ad campaigns and maintained websites for Only The Brave. This involved:

- Working on legacy Vue web applications. Examples include [Giraffe](https://www.giraffe.net/).
- Building animated HTML banners in Figma for large-scale advertising campaigns for Lloyds Pharmacy.
		`,
	},
	{
		title: 'Technical Director',
		place: 'Rose Brothers Digital',
		placeUrl: 'https://www.rosebrothersdigital.co.uk/',
		dates: 'August 2020 - March 2022',
		description: `
My brother and I started a digital marketing business in lockdown. This involved:

- Designing and developing bespoke websites.
- SEO optimisation over the lifetime of the sites.
- Client outreach and lead generation.
		`,
	},
	{
		title: 'Research Software Engineer (Freelance)',
		place: 'Loughborough University',
		placeUrl: 'https://www.lboro.ac.uk/',
		dates: 'May 2020 - March 2023',
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
		title: 'Associate Lecturer (Part-time)',
		place: 'Sheffield Hallam University',
		placeUrl: 'https://www.shu.ac.uk/',
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
		placeUrl: 'https://www.merciaschool.com/',
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
		placeUrl: 'https://3squared.com/',
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
