/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azul-marino': '#273746',
        'gris': '#5A5B5E',
      },
      fontFamily: {
				Lato: ['Lato'],
				Poppins: ['Poppins'],
        Inter: ['Inter']
			},
    },
  },
  plugins: [],
};