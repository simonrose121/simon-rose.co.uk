/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#FEE5DF',
					200: '#FEC7C0',
					300: '#FDA1A1',
					400: '#FB8992',
					500: '#F9627D',
					600: '#D6476E',
					700: '#B33161',
					800: '#901F53',
					900: '#77124A',
				},
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1024px',
				'2xl': '1024px',
			},
		},
	},
	plugins: [],
};
