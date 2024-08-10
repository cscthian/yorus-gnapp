/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        colorBg: '#f5f5f5',
        colorBgCard: '#e9e9ee',
        colorBgFront: '#c5d5dd',
        colorAction: '#e17012',
        colorAlert: '#e32e53',
        colorText: '#2d3436',
      },
			fontFamily: {
        ffPrimary: ['Roboto Flex Variable', 'sans-serif'],
        ffText: ['Ubuntu', 'sans-serif'],
      },
		},
	},
	plugins: [],
}
