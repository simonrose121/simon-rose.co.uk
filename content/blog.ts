export type BlogPostMeta = {
	id: string;
	title: string;
	date: Date;
	path: string;
	socialImage?: string | undefined;
}

export const posts: Array<BlogPostMeta> = [
	{
		id: 'reading-500-books',
		title: 'Reading 500 Books: Why, How and What I’ve Learnt',
		date: new Date('2023-08-24'),
		path: 'reading-500-books',
		socialImage: 'https://simon-rose.co.uk/blog/500-books/fromreadingchair2019.jpeg',
	},
	{
		id: '2022-reading',
		title: '2022 - A Year in Books',
		date: new Date('2023-01-01'),
		path: '2022-reading-roundup',
		socialImage: 'https://simon-rose.co.uk/blog/books2022/yearinbooks.png',
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
