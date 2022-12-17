/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});
		return config;
	},
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
