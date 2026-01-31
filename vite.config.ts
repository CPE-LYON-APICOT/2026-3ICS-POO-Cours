import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	define: {
		__BUILD_TIMESTAMP__: JSON.stringify(Date.now()), // Génère un timestamp au moment du build
	  },
	plugins: [sveltekit()], 
	assetsInclude:["**/*.puml","**/*.pdf"],
	server: {
		allowedHosts: true,
		fs: {
			allow: ['public']
		}
	}
})
