/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		},
		colors: {
			light_blue: '#F4F9FD',
			blue: '#3F8CFF',
			white: '#FFF',
			white_200: '#D8E0F0',
			gray: '#7D8592',
			background: '#F2F2F2'
		}
	},
	plugins: []
}
