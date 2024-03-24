/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'1000': '1000px',
			},
			height: {
				'600': '600px',
			}
		},
	},
	plugins: [],
}
