<script lang="ts">
	import Slide from '$lib/deck/slide.svelte'
	import Heritage from '$lib/Chapitres/Heritage.svelte'
	import Introduction from '$lib/Chapitres/Introduction.svelte'
	import Composition from '$lib/Chapitres/Composition.svelte'
	import Interfaces from '$lib/Chapitres/Interfaces.svelte'
	import Encapsulation from '$lib/Chapitres/Encapsulation.svelte'
	import Gnralits from './Chapitres/Généralités.svelte'
	import LangageJava from './Chapitres/LangageJava.svelte'
	import Polymorphisme from './Chapitres/Polymorphisme.svelte'
	import Code from './deck/code.svelte'
	import Statique from './Chapitres/Statique.svelte'
	import Gnricit from './Chapitres/Généricité.svelte'
	import Lambda from './Chapitres/Lambda.svelte'
	import Collections from './Chapitres/Collections.svelte'
	import Annotations from './Chapitres/Annotations.svelte'
	import DP from './Chapitres/DP.svelte'
	import AI from '$lib/UsageIA.svelte'
	import Mo from '$lib/Module.svelte'
	import ExercicesSeance1 from '$lib/Exercices/Seance1.svelte'
	import Exceptions from '$lib/Chapitres/Exceptions.svelte'
	import Seance2Revisions from '$lib/Chapitres/Seance2Revisions.svelte'
	import Autoboxing from '$lib/Chapitres/Autoboxing.svelte'
	import Records from '$lib/Chapitres/Records.svelte'
	import SOLID from '$lib/Chapitres/SOLID.svelte'
	import Refactoring from '$lib/Chapitres/Refactoring.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">{import.meta.env.VITE_PAGE_TITLE}</h1>
	<!-- <a class="print:hidden" href="/?print-pdf" target="_blank">Version imprimable 🖨</a><br /> -->
	<!-- <a class="print:hidden" href="/?view=scroll" target="_blank">Version défilable</a><br /> -->
	<!-- <a class="print:hidden" href="#/exercices">Lien vers les TP/TD</a><br /> -->
	<!-- <a class="print:hidden" href="#/annexes">Annexes</a>
	<br />
	<a class="print:hidden  !text-red-600 m-2 "  href="#feedback">Feedback</a>
	
	<br />
	<a class="print:hidden  !text-red-600 m-2 " target="_blank" href="/revisions">Révisions</a> -->

	<aside class="notes">
		- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')
	</aside>
</Slide>

<Mo />

<AI />

<Introduction />
<Slide>
	<h3>Les concepts de la POO</h3>
	<ol>
		<li>Généralités</li>
		<li>L'encapsulation</li>
		<li>L'héritage</li>
		<li>La composition</li>
		<li>Les interfaces</li>
		<li>Le polymorphisme</li>
	</ol>
	<aside class="notes">
		Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.
	</aside>
</Slide>
<Gnralits />
<Encapsulation />
<Heritage />
<Composition />
<Interfaces />
<ExercicesSeance1 />

<Slide id="seance2">
	<h3>Séance 2</h3>
</Slide>

<Seance2Revisions />
<Polymorphisme />
<Autoboxing />
<Records />
<Exceptions />
<SOLID />
<Refactoring />
<Statique />
<section class="idle-bg"></section>
<!-- Séance 3 : Collections, Généricité, Lambda -->
<!--
<Slide id="seance3">
	<h3>Séance 3</h3>
</Slide>
<Gnricit />
<Collections />
<Lambda />
<DP />
<Annotations />
<Slide>
	<h1>Fin du cours</h1>
</Slide>
<Slide id="feedback">
	<p>Merci de formuler un feedback sur le cours :</p>
	<a href={import.meta.env.VITE_FEEDBACK_URL} title="Feedback" data-preview-link
		>Repondre au questionnaire</a
	>
</Slide>
<Slide id="annexes">
	<Slide><h1>Annexes</h1></Slide>
	<LangageJava />
</Slide>
-->
