<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<Slide data_background_gradient="linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))">
		<h2>Rappels</h2>
		<p class="text-2xl text-gray-400">Un mois plus tard...</p>
		<aside class="notes">
			On reprend après un mois de pause. L'objectif de ce bloc est de vérifier rapidement ce qui est acquis
			avant d'avancer. On ne va pas re-expliquer, juste tester et corriger si besoin.
		</aside>
	</Slide>

	<Slide>
		<h3>Héritage, Composition ou Interface ?</h3>
		<table class="text-xl mt-6">
			<tbody>
				<tr class="fragment">
					<td class="p-3">Un <code>Etudiant</code> <b>est une</b> <code>Personne</code></td>
					<td class="p-3 text-green-400">Héritage</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Un <code>Ordinateur</code> <b>a un</b> <code>Processeur</code></td>
					<td class="p-3 text-blue-400">Composition</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Un <code>Robot</code> <b>peut</b> <code>Nager</code></td>
					<td class="p-3 text-purple-400">Interface</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Un <code>Livre</code> <b>a des</b> <code>Chapitres</code></td>
					<td class="p-3 text-blue-400">Composition</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Un <code>CompteCourant</code> <b>est un</b> <code>CompteBancaire</code></td>
					<td class="p-3 text-green-400">Héritage</td>
				</tr>
			</tbody>
		</table>
		<aside class="notes">
			Faites voter les étudiants à main levée avant de révéler. C'est un bon indicateur de ce qui a été retenu.
		</aside>
	</Slide>

	<Slide>
		<h3>Ce code compile-t-il ?</h3>
		<div class="grid grid-cols-2 gap-6">
			<div>
				<Code>{`
abstract class Forme {
    abstract double surface();
}

Forme f = new Forme();
`}</Code>
				<p class="fragment text-red-400 mt-2">Non : on ne peut pas instancier une classe abstraite</p>
			</div>
			<div>
				<Code>{`
class Canard extends Animal, Oiseau {
}
`}</Code>
				<p class="fragment text-red-400 mt-2">Non : héritage multiple interdit en Java</p>
			</div>
		</div>
		<aside class="notes">
			Ce sont les deux pièges les plus classiques. Insister sur le fait que les interfaces sont
			la solution au second cas.
		</aside>
	</Slide>

	<Slide>
		<h3>Que produit ce code ?</h3>
		<Code>{`
abstract class Animal {
    abstract void crier();
}
class Chien extends Animal {
    void crier() { System.out.println("Wouaf"); }
}
class Chat extends Animal {
    void crier() { System.out.println("Miaou"); }
}

class Maitre {
    private Animal animal;
    Maitre(Animal a) { this.animal = a; }
    void presenter() { animal.crier(); }
}

new Maitre(new Chat()).presenter();
`}</Code>
		<p class="fragment text-accent-200 text-3xl mt-4">Affiche : <code>Miaou</code></p>
		<aside class="notes">
			On a vu ça à la fin de la séance 1 dans le chapitre Composition. C'est un teaser du polymorphisme.
			Si les étudiants répondent bien, on peut enchaîner directement.
		</aside>
	</Slide>

	<Slide>
		<h3>Aujourd'hui</h3>
		<ol class="text-2xl">
			<li>Polymorphisme</li>
			<li>Casting et conversions de types</li>
			<li>Records</li>
			<li>Exceptions</li>
			<li>Principes SOLID</li>
			<li>Refactoring en services</li>
			<li>Membres statiques</li>
		</ol>
		<aside class="notes">
			Programme chargé. On va construire sur les acquis de la séance 1.
			Le fil rouge : écrire du code qui est non seulement correct, mais bien structuré.
		</aside>
	</Slide>
</Slide>
