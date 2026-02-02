<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import td1corrige from '$corriges/TD/TD1.pdf?url'
	import td2corrige from '$corriges/TD/TD2.pdf?url'
	import td3corrige from '$corriges/TD/TD3.pdf?url'
	import td3biscorrige from '$corriges/TD/TD3Bis.pdf?url'
	import td4corrige from '$corriges/TD/TDParc.pdf?url'
	import tp1 from '$enonces/TP/Fallout/docs/TP1.html?url'
	import tp2 from '$enonces/TP/Snake/docs/TP2.html?url'

	import projet from '$enonces/TP/Projet/README.html?url'
	import configEnv from '$enonces/TUTO/Mise-en-place-env.html?url'
	import TD1 from '$enonces/TD/TD1.html?url'
	import TD2 from '$enonces/TD/TD2.html?url'
	import plantumlTuto from '$enonces/TUTO/PlantUML.html?url'
	import { writable } from 'svelte/store'
	import { browser } from '$app/environment'
	export const repoUrl = writable((browser && localStorage.getItem('repoUrl')) || null)
	repoUrl.subscribe((val) => {
		if (browser) return (localStorage.repoUrl = val)
	})
</script>

<Slide id="exercices">
	<Slide>
		<h3>Configuration TD</h3>
		<a target="_blank" href="https://classroom.github.com/a/FKWh2cOe">Clonez le dépôt</a> <br />
		<p>Puis collez l'URL de votre répo Git</p>
		<input
			class="w-full text-accent-950 text-lg z-50 mb-16"
			type="text"
			placeholder="URL du dépôt git"
			on:input={(e) =>
				repoUrl.set((e.currentTarget.value.trimEnd() + '/').replace('github.com', 'github.dev'))}
			bind:value={$repoUrl}
		/>
	</Slide>
	<Slide id="TD">
		<h2>TD</h2>
		<ul>
			<li>
				<a target="_blank" href={$repoUrl + 'blob/main/TD/TD1.md'}>TD1</a>
				<span>/ <a href={td1corrige}>Corrigé</a></span>
			</li>
			<li>
				<a target="_blank" href={$repoUrl + 'blob/main/TD/TD2.md'}>TD2</a>
				<span>/ <a href={td2corrige}>Corrigé</a></span>
			</li>

			<li>
				<a target="_blank" href={$repoUrl + 'blob/main/TD/TD3.md'}>TD3</a>
				<span>/ <a href={td3corrige}>Corrigé</a></span>
			</li>

			<li>
				<a target="_blank" href={$repoUrl + 'blob/main/TD/TD3Bis.md'}>TD3 Bis (Optionnel)</a>
				<span>/ <a href={td3biscorrige}>Corrigé</a></span>
			</li>

			<li>
				<a target="_blank" href={$repoUrl + 'blob/main/TD/TDParc.md'}>TD4</a>
				<span>/ <a href={td4corrige}>Corrigé</a></span>
			</li>

			<li><a target="_blank" href={plantumlTuto}>Tuto PlantUML</a></li>
		</ul>
	</Slide>
	<Slide>
		<h3>Configuration TP</h3>
		<a target="_blank" href={configEnv}>Configurez votre poste</a> <br />
	</Slide>
	<Slide id="TP">
		<h2>TP</h2>
		<ul>
			<li>
				<a target="_blank" href={tp1}>TP1</a>
				<span
					>/ <a target="_blank" href="https://classroom.github.com/a/3pWZu8yR">Clonez le dépot</a
					></span
				>
			</li>
			<li>
				<a target="_blank" href={tp2}>TP2</a>
				<span
					>/ <a target="_blank" href="https://classroom.github.com/a/y58GAhhp">Clonez le dépot</a
					></span
				>
			</li>
			<li>
				<a target="_blank" href={projet}>Projet</a>
				<span
					>/ <a target="_blank" href="https://classroom.github.com/a/mllsoaOR">Clonez le dépot</a
					></span
				>
			</li>
		</ul>
	</Slide>
</Slide>
