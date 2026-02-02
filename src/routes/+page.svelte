<!-- svelte-ignore missing-declaration -->
<script context="module" lang="ts">
	declare const __BUILD_TIMESTAMP__: string // @ts-ignore
</script>

<script lang="ts">
	import Slides from '$lib/deck/slides.svelte'

	import '$src/app.postcss'
	import TD1 from '$enonces/TD/TD1.html?url'
	import TD2 from '$enonces/TD/TD2.html?url'
	import TP1 from '$enonces/TP/Fallout/docs/TP1.html?url'
	import TP2 from '$enonces/TP/Snake/docs/TP2.html?url'
	import Projet from '$enonces/TP/Projet/README.html?url'
	import Presentation from '$lib/presentation.svelte'

	switch (new URLSearchParams(window.location.search).get('r')) {
		case 'TD1':
			window.location.href = TD1
			break
		case 'TD2':
			window.location.href = TD2
			break
		case 'TP1':
			window.location.href = TP1
			break
		case 'TP2':
			window.location.href = TP2
			break
		case 'Projet':
			window.location.href = Projet
			break
	}
</script>

<svelte:head>
	<title>{import.meta.env.VITE_PAGE_TITLE} - {import.meta.env.VITE_AUTHOR}</title>
	<link rel="icon" href="https://fav.farm/💻" />
	<meta name="timestamp" content={new Date(Number(__BUILD_TIMESTAMP__)).toLocaleString()} />
</svelte:head>

<Slides>
	<Presentation />
</Slides>
