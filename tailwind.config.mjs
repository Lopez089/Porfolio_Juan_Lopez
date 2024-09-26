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
				'sans': ["Overpass", "system-ui"],
				'display': ["Dosis", "sans-serif"]
			},
			fontSize: {
				"h1": ['3.815rem', { lineHeight: '1.4' }],
				"h2": ['3.052rem', { lineHeight: '1.4' }],
				"h3": ['2.441rem', { lineHeight: '1.4' }],
				"h1mobile": ['2.027rem', { lineHeight: '1.4' }],
				"h2mobile": ['1.802rem', { lineHeight: '1.4' }],
				"h3mobile": ['1.602rem', { lineHeight: '1.4' }],
				lg: ['24px', { lineHeight: '1.6' }],
				md: ['20px', { lineHeight: '1.6' }],
				r: ['1rem', { lineHeight: '1.6' }],
				sm: ['0.833rem', { lineHeight: '1.6' }],
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
			animation: {
				fadeIn05: 'fadeIn 1s forwards 0.5s',
				fadeIn1: 'fadeIn 1s forwards 1s',
				slideIn: 'slideIn 1s forwards 1.5s',
				fadeInLeft: 'fadeInLeft 3s forwards 0.5s',
				fadeInRight: 'fadeInRight 3s forwards 0.5s',
				greeting: 'greeting 3s forwards 0.5s 5',
				openNav: 'openNav 3s forwars 0.5s '
			},
			keyframes: {
				fadeIn: {
					to: {
						opacity: 1,
						transform: 'translateY(0)'
					}
				},
				slideIn: {
					to: {
						opacity: 1,
						transform: 'translateY(0)'
					}
				},
				fadeInLeft: {
					to: {
						opacity: 1,
						transform: 'translateX(0)'
					}
				},
				fadeInRight: {
					to: {
						opacity: 1,
						transform: ' translateX(0)'
					}
				},
				greeting: {
					'0%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(35deg)' },
					'100%': { transform: 'rotate(0deg)' },

				},
				openNav: {
					from: {
						height: '0'
					},
					to: {
						height: '100%'
					}

				}
			}
		}
	},
	plugins: [],
}
