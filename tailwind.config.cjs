/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif'],
				patua: ['Patua One', 'cursive'],
			},
		},
	},
	plugins: [],
};
