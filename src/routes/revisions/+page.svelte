<!-- svelte-ignore missing-declaration -->
<script context="module" lang="ts">
	declare const __BUILD_TIMESTAMP__: string // @ts-ignore
</script>

<script lang="ts">
	import { browser } from '$app/environment'
	import Revisions from '$lib/deck/Revisions/Revisions.svelte'
	import Slides from '$lib/deck/slides.svelte'
	import '$src/app.postcss'

	import 'reveal.js/dist/theme/sky.css'

	if (browser) {
		//history.replaceState(null, '', '/');
	}
</script>

<svelte:head>
	<title>Révisions - {import.meta.env.VITE_AUTHOR}</title>
	<link rel="icon" href="https://fav.farm/💻" />
	<meta name="timestamp" content={new Date(Number(__BUILD_TIMESTAMP__)).toLocaleString()} />
</svelte:head>

<Slides>
	<Revisions />
</Slides>

<style>
	div.slides {
		width: 90vw !important;
		height: 90vh !important;
	}
</style>
