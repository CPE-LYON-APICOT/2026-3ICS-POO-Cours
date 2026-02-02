import preprocess from 'svelte-preprocess'
//import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltekit(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$src: './src',
			$stores: './src/stores',
			$utils: './src/utils',
			$styles: './src/styles',
			$assets: './src/assets',
			$routes: './src/routes',
			$corriges: './exercices/corriges',
			$enonces: './exercices/html'
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
}

export default config
