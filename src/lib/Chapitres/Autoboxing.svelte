<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Types primitifs et objets</h3>

	<Slide>
		<h3>Le problème</h3>
		<p><code>int</code>, <code>double</code>, <code>boolean</code> ne sont pas des objets.</p>
		<Code>{`
List<int> nombres = new ArrayList<>();  // Erreur de compilation !
`}</Code>
		<p class="fragment mt-4">
			Les collections et les génériques ne fonctionnent qu'avec des <span class="text-important">objets</span>.
		</p>
		<p class="fragment">
			Java fournit des <span class="text-important">classes enveloppes</span> (wrapper classes) pour chaque type primitif.
		</p>
		<aside class="notes">
			Les types primitifs existent pour des raisons de performance : un int prend 4 octets,
			un Integer en prend 16. Mais les frameworks modernes travaillent avec des objets.
			D'où le besoin de "wrapper" les primitifs.
		</aside>
	</Slide>

	<Slide>
		<h3>Correspondances</h3>
		<table class="text-xl mt-4">
			<thead>
				<tr>
					<th class="p-3">Primitif</th>
					<th class="p-3">Wrapper</th>
				</tr>
			</thead>
			<tbody>
				<tr><td class="p-3"><code>int</code></td><td class="p-3"><code>Integer</code></td></tr>
				<tr><td class="p-3"><code>double</code></td><td class="p-3"><code>Double</code></td></tr>
				<tr><td class="p-3"><code>boolean</code></td><td class="p-3"><code>Boolean</code></td></tr>
				<tr><td class="p-3"><code>char</code></td><td class="p-3"><code>Character</code></td></tr>
				<tr><td class="p-3"><code>long</code></td><td class="p-3"><code>Long</code></td></tr>
				<tr><td class="p-3"><code>float</code></td><td class="p-3"><code>Float</code></td></tr>
			</tbody>
		</table>
		<aside class="notes">
			Les noms sont intuitifs sauf Integer et Character. Les Wrappers sont dans le package java.lang,
			pas besoin d'import.
		</aside>
	</Slide>

	<Slide>
		<h3>Autoboxing</h3>
		<p>Conversion <span class="text-important">automatique</span> d'un primitif vers son wrapper.</p>
		<Code>{`
Integer a = 42;               // int → Integer (autoboxing)
Double d = 3.14;              // double → Double (autoboxing)

List<Integer> nombres = new ArrayList<>();
nombres.add(10);              // int 10 → Integer.valueOf(10)
nombres.add(20);
`}</Code>
		<p class="fragment mt-4">
			Java insère l'appel à <code>Integer.valueOf()</code> pour vous.
		</p>
		<aside class="notes">
			Avant Java 5, il fallait écrire Integer.valueOf(42) explicitement partout.
			L'autoboxing a énormément simplifié le code. Mais il faut savoir que ça reste
			une conversion avec un coût.
		</aside>
	</Slide>

	<Slide>
		<h3>Unboxing</h3>
		<p>Conversion <span class="text-important">automatique</span> d'un wrapper vers son primitif.</p>
		<Code>{`
Integer wrapped = 42;
int value = wrapped;           // Integer → int (unboxing)

List<Integer> nombres = List.of(10, 20, 30);
int premier = nombres.get(0);  // Integer → int (unboxing)
`}</Code>
		<p class="fragment mt-4">
			Java insère l'appel à <code>intValue()</code> pour vous.
		</p>
		<aside class="notes">
			L'unboxing est transparent mais pas gratuit : c'est un appel de méthode à chaque conversion.
			Dans une boucle de millions d'itérations, ça peut peser.
		</aside>
	</Slide>

	<Slide>
		<h3>Le piège du cache Integer</h3>
		<Code>{`
Integer a = 127;
Integer b = 127;
System.out.println(a == b);    // true

Integer c = 128;
Integer d = 128;
System.out.println(c == d);    // false !
`}</Code>
		<p class="fragment mt-4">
			Java met en cache les <code>Integer</code> de <b>-128 à 127</b>.
			Au-delà, ce sont des objets différents.
		</p>
		<p class="fragment text-accent-200">
			Toujours utiliser <code>.equals()</code> pour comparer des wrappers.
		</p>
		<aside class="notes">
			C'est un piège classique en entretien d'embauche. == compare les références, pas les valeurs.
			Pour les Integer entre -128 et 127, valueOf() retourne le même objet (cache).
			Au-delà, c'est un new à chaque fois. Conclusion : toujours .equals() pour les objets.
		</aside>
	</Slide>

	<Slide>
		<h3>Le piège du null</h3>
		<Code>{`
Integer valeur = null;
int n = valeur;  // NullPointerException à l'unboxing !
`}</Code>
		<div class="fragment mt-6">
			<p>Protection :</p>
			<Code>{`
Integer valeur = obtenirValeur();  // peut retourner null

if (valeur != null) {
    int n = valeur;  // unboxing sûr
}
`}</Code>
		</div>
		<aside class="notes">
			Un Integer peut être null, un int ne peut pas. L'unboxing d'un null lance un NPE.
			C'est un piège fréquent quand on récupère des données d'une base ou d'une API.
		</aside>
	</Slide>

	<Slide>
		<h3>Performance</h3>
		<Code>{`
// Lent : autoboxing à chaque itération
Long somme = 0L;
for (int i = 0; i < 1_000_000; i++) {
    somme += i;  // unboxing + addition + autoboxing
}

// Rapide : type primitif
long somme = 0L;
for (int i = 0; i < 1_000_000; i++) {
    somme += i;  // addition simple
}
`}</Code>
		<p class="fragment mt-4">
			Utilisez les <b>primitifs</b> dans les boucles intensives, les <b>wrappers</b> dans les collections et API.
		</p>
		<aside class="notes">
			La différence de performance peut être d'un facteur 5 à 10 dans les boucles.
			Règle : primitifs pour le calcul, wrappers quand on est obligé (collections, génériques).
		</aside>
	</Slide>

	<Slide>
		<h3>Récapitulatif</h3>
		<table class="text-xl">
			<tr>
				<td class="p-3"><span class="text-important">Autoboxing</span></td>
				<td class="p-3"><code>int</code> → <code>Integer</code> (automatique)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">Unboxing</span></td>
				<td class="p-3"><code>Integer</code> → <code>int</code> (automatique)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">==</span></td>
				<td class="p-3">Compare les références (piège avec les wrappers !)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">.equals()</span></td>
				<td class="p-3">Compare les valeurs (toujours l'utiliser)</td>
			</tr>
		</table>
		<aside class="notes">
			L'autoboxing est pratique mais pas magique. Connaître ses limites évite des bugs subtils.
		</aside>
	</Slide>
</Slide>
