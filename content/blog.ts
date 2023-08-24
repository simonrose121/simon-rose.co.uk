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
		id: '500-books',
		title: '500 Books: A Journey of Personal Development',
		description: 'I\'ve read 500 books since January 2016 and have written about why I read, how it\'s changed me and how I’ve managed to keep it up.',
		date: new Date('2023-08-24'),
		path: '500-books',
		socialImage: 'https://www.simon-rose.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffromreadingchair2019.305bdb00.jpeg&w=1200&q=75',
	},
	{
		id: '2022-reading',
		title: '2022 - A Year in Books',
		date: new Date('2023-01-01'),
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
		date: new Date('2022-01-01'),
		path: '2021-reading-roundup',
	},
	{
		id: '2020-reading',
		title: '2020 - A Year in Books',
		date: new Date('2021-01-02'),
		path: '2020-reading-roundup',
	},
];
