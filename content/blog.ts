export type BlogPostMeta = {
	id: string;
	title: string;
	date: Date;
	path: string;
}

export const posts: Array<BlogPostMeta> = [
	{
		id: 'mood-meter',
		title: '500+ Days of Mood Tracking',
		date: new Date('2022-11-23'),
		path: '/500-days-of-mood-tracking',
	},
	{
		id: 'headspace',
		title: '500 Days of Meditation',
		date: new Date('2022-01-27'),
		path: '/500-days-of-headspace',
	},
	{
		id: '2020-reading',
		title: '101 in 2020 - A Year in Books',
		date: new Date('2021-01-02'),
		path: '/2020-reading-roundup',
	},
];
