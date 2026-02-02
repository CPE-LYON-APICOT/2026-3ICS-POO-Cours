/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#eafffe',
					100: '#cbfffe',
					200: '#9effff',
					300: '#5bfcff',
					400: '#00eeff',
					500: '#00d1e5',
					600: '#00a7c0',
					700: '#03849b',
					800: '#0d697d',
					900: '#105769',
					950: '#033a49'
				},
				accent: {
					50: '#f9f8ff',
					100: '#f3f0ff',
					200: '#e3d9ff',
					300: '#cbbcff',
					400: '#a68aff',
					500: '#7b5eff',
					600: '#5a3bbf',
					700: '#3f2b8f',
					800: '#2a1f6f',
					900: '#1c1657',
					950: '#0f0c3a'
				},
				secondary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
					950: '#052e16'
				}
			}
		}
	},

	plugins: []
}

export default config
