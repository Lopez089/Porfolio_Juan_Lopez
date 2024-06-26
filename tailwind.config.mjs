/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"black": "#3C414F",
				"primary": '#2563EB',
				"secondary": '#EBAF26',
				"secondary-200": "#F1C45D"
			},
			gradientColorStops: ({ theme }) => ({
				...theme('colors'),
				primary: theme('colors.primary')
			}),
			fontFamily: {
				'sans': ["Source-Sans-3", "sans-serif"],
				'display': ["Dosis", "sans-serif"]
			},
			fontSize: {
				"h1Desktop": ['56px', { lineHeight: '1.2' }],
				"h1Tablet": ['52px', { lineHeight: '1' }],
				"h1Mobile": ['40px', { lineHeight: '1' }],
				"h2Desktop": ['48px', { lineHeight: '1' }],
				"h2Tablet": ['44px', { lineHeight: '1' }],
				"h2Mobile": ['36px', { lineHeight: '1' }],
				"h3Desktop": ['40px', { lineHeight: '1' }],
				"h3Tablet": ['36px', { lineHeight: '1' }],
				"h3Mobile": ['32px', { lineHeight: '1' }],
				lg: ['24px', { lineHeight: '1.75rem' }],
				md: ['20px', { lineHeight: '1.75rem' }],
				r: ['16px', { lineHeight: '1.75rem' }],
				sm: ['14px', { lineHeight: '1.75rem' }],
			},
			borderColor: {
				"primary": '#2563EB',
			},
			textColor: {
				"black": "#3C414F",
				"primary": '#2563EB',
				"secondary": '#20D1E6',
				"secondary-200": "#F1C45D"
			},
			backgroundColor: {
				"bg": "#FFFDFA",
				"primary": '#2563EB',
				"secondary": '#20D1E6'
			},

		}
	},
	plugins: [],
}
