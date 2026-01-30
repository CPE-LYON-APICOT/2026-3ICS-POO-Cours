<script lang="ts">
	import { onMount } from 'svelte'

	import '$lib/plugin/revealjs-fullscreen-code.css'
	import plantumlEncoder from 'plantuml-encoder'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import 'reveal.js/plugin/highlight/monokai.css'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'
	import ExternalCode from '@edc4it/reveal.js-external-code'
	onMount(() => {
		const deck = new Reveal({})
		// expose the initialized Reveal instance globally so action strings like "Reveal.toggleOverview()" resolve

		window.addEventListener('resize', () => {
			deck.layout() // recalcul des dimensions
		})
		registerPlantUml(deck)
		deck
			.initialize({
				plugins: [ExternalCode, Markdown, Highlight, Notes, RevealChalkboard, RevealCustomControls],
				customcontrols: {
					controls: [
						{
							icon: '<i class="fa fa-question-circle"></i>',
							title: 'Toggle help (O)',
							action: 'deck.toggleHelp();'
						},
						{
							icon: '<i class="fa fa-pen-square"></i>',
							title: 'Toggle chalkboard (B)',
							action: 'RevealChalkboard.toggleChalkboard();'
						},
						{
							icon: '<i class="fa fa-pen"></i>',
							title: 'Toggle notes canvas (C)',
							action: 'RevealChalkboard.toggleNotesCanvas();'
						}
					]
				},
				chalkboard: {
					boardmarkerWidth: 15,
					chalkWidth: 15,
					chalkEffect: 1.0,
					storage: null,
					src: null,
					readOnly: undefined,
					transition: 800,
					theme: 'chalkboard'
				},
				autoAnimateEasing: 'ease',
				autoAnimateDuration: 1,
				autoAnimateUnmatched: true,
				controlsTutorial: true,
				slideNumber: 'c/t',
				disableLayout: false,
				hash: true,
				showNotes: false,
				mouseWheel: false,
				// transition: 'zoom',
				highlight: {
					highlightOnLoad: true
				},
				minScale: 0.1,
				maxScale: 1.0,
				width: 1920,
				height: 1080,
				pdfSeparateFragments: false,
				controls: true,
				progress: true,
				viewDistance: 2,
				transition: 'none',
				autoSlide: 0,
				dependencies: [
					// ...
					{ src: new URL('$lib/plugin/jquery-3.1.1.min.js', import.meta.url).href },
					{ src: new URL('$lib/plugin/revealjs-fullscreen-code.js', import.meta.url).href }
				]
			})
			.then(() => {
				if (window.location.search.includes('print-pdf')) {
					setTimeout(() => {
						window.print()
					}, 2000)
				}
			})
		window.deck = deck
	})
	function registerPlantUml(deck: Reveal.Api) {
		deck.registerPlugin({
			id: 'plantuml',
			init(reveal) {
				reveal.addEventListener('ready', () => {
					const elements = document.querySelectorAll('pre code.language-plantuml')
					elements.forEach((element) => {
						const plantuml = element.textContent
						const img = document.createElement('img')
						img.dataset['previewImage'] = 'true'
						img.src = ('http://img.plantuml.biz/plantuml/svg/' +
							plantumlEncoder.encode(plantuml!)) as string
						var oldElem = (element.parentElement as HTMLElement).closest('div.uml') as HTMLElement
						img.className = oldElem.className
						oldElem.outerHTML = img.outerHTML
					})
				})
			}
		})
	}
</script>

<div class="reveal">
	<div class="slides">
		<slot></slot>
	</div>
</div>
