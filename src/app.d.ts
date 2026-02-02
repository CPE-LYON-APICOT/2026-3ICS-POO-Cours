// See https://kit.svelte.dev/docs/types#app

import type Reveal from 'reveal.js'
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare interface Window {
		deck: Reveal.Api
	}
	declare interface UserProps {
		repoUrl: string
	}
}

export {}
