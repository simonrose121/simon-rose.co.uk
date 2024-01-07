/* eslint-disable max-len */
export type BlogPostMeta = {
	id: string;
	title: string;
	date: Date;
	path: string;
	socialImage?: string | undefined;
	description?: string | undefined;
}

export const posts: Array<BlogPostMeta> = [
	{
		id: '2023-reading',
		title: '2023 - A Year in Books',
		description: 'A summary of my favourite books from 2023, along with some stats from 8 years of book-a-week my reading challenge.',
		date: new Date('2024-01-08'),
		path: '2023-reading-roundup',
		socialImage: 'https://www.simon-rose.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyearinbooks.2e96c3dd.png&w=1080&q=75'
	},
	{
		id: '4-months-travelling',
		title: '4 Months Travelling: Highlights, Low Points and Reflections of a Backpacking Adventure',
		description: 'Highlights, low points and reflections of a 4-month backpacking adventure.',
		date: new Date('2023-10-22'),
		path: '4-months-travelling',
		socialImage: 'https://www.simon-rose.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgokarts.94e31550.jpeg&w=1200&q=75',
	},
	{
		id: '500-books',
		title: '500 Books: A Journey of Life, Learning and Growth',
		description: 'I\'ve read 500 books since January 2016 and have written about why I read, how it\'s changed me and how I’ve managed to keep it up.',
		date: new Date('2023-08-24'),
		path: '500-books',
		socialImage: 'https://www.simon-rose.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffromreadingchair2019.305bdb00.jpeg&w=1200&q=75',
	},
	{
		id: '2022-reading',
		title: '2022 - A Year in Books',
		date: new Date('2023-01-03'),
		path: '2022-reading-roundup',
		socialImage: 'https://www.simon-rose.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyearinbooks.ab3b922e.png&w=1200&q=75',
	},
	{
		id: 'mood-meter',
		title: '500+ Days of Mood Tracking',
		date: new Date('2022-11-23'),
		path: '500-days-of-mood-tracking',
	},
	{
		id: 'headspace',
		title: '500 Days of Meditation',
		date: new Date('2022-01-27'),
		path: '500-days-of-headspace',
	},
	{
		id: '2021-reading',
		title: '2021 - A Year in Books',
		date: new Date('2022-01-02'),
		path: '2021-reading-roundup',
	},
	{
		id: '2020-reading',
		title: '2020 - A Year in Books',
		date: new Date('2021-01-02'),
		path: '2020-reading-roundup',
	},
];
