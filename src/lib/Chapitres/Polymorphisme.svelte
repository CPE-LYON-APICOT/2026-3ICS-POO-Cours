<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Polymorphisme</h3>

	<Slide>
		<p>
			Le polymorphisme permet à des objets de types différents d'être traités
			de manière uniforme via un type commun.
		</p>
		<p class="fragment">
			Du grec <i>poly</i> (plusieurs) et <i>morphê</i> (formes) :
			un même appel de méthode peut produire des <span class="text-important">comportements différents</span>.
		</p>
		<aside class="notes">
			On en a eu un aperçu en séance 1 avec le BassinAquatique et le Maître/Animal.
			Maintenant on formalise. Le polymorphisme est ce qui rend la POO vraiment puissante.
			Sans lui, on écrirait des cascades de if/else partout.
		</aside>
	</Slide>

	<Slide>
		<h3>Polymorphisme statique</h3>
		<p>Résolu à la <span class="text-important">compilation</span> : la surcharge de méthodes.</p>
		<Code>{`
class MathUtils {
    int additionner(int a, int b) {
        return a + b;
    }
    double additionner(double a, double b) {
        return a + b;
    }
}
`}</Code>
		<p class="fragment">
			Le compilateur choisit la méthode selon le <b>nombre</b> et le <b>type</b> des paramètres.
		</p>
		<aside class="notes">
			Attention : la surcharge ne se base PAS sur le type de retour. Deux méthodes avec la même
			signature mais un retour différent = erreur de compilation. C'est différent de @Override.
		</aside>
	</Slide>

	<Slide>
		<h3>Polymorphisme dynamique</h3>
		<p>Résolu à l'<span class="text-important">exécution</span> : la redéfinition de méthodes.</p>
		<Code lines="1-5|7-12|14-19">{`
class Animal {
    void faireDuBruit() {
        System.out.println("...");
    }
}

class Chien extends Animal {
    @Override
    void faireDuBruit() {
        System.out.println("Wouaf");
    }
}

class Chat extends Animal {
    @Override
    void faireDuBruit() {
        System.out.println("Miaou");
    }
}
`}</Code>
		<aside class="notes">
			C'est la JVM qui décide à l'exécution quelle version appeler.
			C'est ce qu'on appelle la liaison tardive (late binding).
		</aside>
	</Slide>

	<Slide>
		<h3>Type statique vs type dynamique</h3>
		<Code>{`
Animal a = new Chien();
`}</Code>
		<div class="grid grid-cols-2 gap-8 mt-8">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">Type statique</h4>
				<p class="text-xl mt-2">Le type de la <b>variable</b> : <code>Animal</code></p>
				<p class="text-sm text-gray-400">Connu à la compilation</p>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">Type dynamique</h4>
				<p class="text-xl mt-2">Le type de l'<b>objet</b> : <code>Chien</code></p>
				<p class="text-sm text-gray-400">Connu à l'exécution</p>
			</div>
		</div>
		<p class="fragment mt-6">
			<code>a.faireDuBruit()</code> appelle la version de <code>Chien</code>, pas celle d'<code>Animal</code>.
		</p>
		<aside class="notes">
			C'est LA distinction fondamentale du polymorphisme. Le compilateur voit Animal, la JVM voit Chien.
			Le compilateur vérifie que la méthode existe dans Animal, la JVM exécute celle de Chien.
		</aside>
	</Slide>

	<Slide>
		<h3>Upcasting</h3>
		<p>Affecter un objet d'une classe fille à une variable du type parent.</p>
		<Code>{`
Animal a = new Chien();       // Upcasting implicite
Animal b = new Chat();        // Upcasting implicite

List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien());     // Upcasting implicite
animaux.add(new Chat());      // Upcasting implicite
`}</Code>
		<p class="fragment mt-4">
			L'upcasting est <span class="text-important">toujours sûr</span> et <b>implicite</b> :
			un <code>Chien</code> est forcément un <code>Animal</code>.
		</p>
		<aside class="notes">
			C'est ce qu'on fait depuis la séance 1 sans le nommer. Maintenant on met un mot dessus.
			L'upcasting ne perd pas d'information : l'objet reste un Chien, on le voit juste
			"à travers les lunettes" Animal.
		</aside>
	</Slide>

	<Slide>
		<h3>Downcasting</h3>
		<p>Affecter une variable du type parent à un type enfant : cast <span class="text-important">explicite</span>.</p>
		<Code>{`
Animal a = new Chien();

Chien c = (Chien) a;          // OK : a est bien un Chien
c.faireDuBruit();              // Wouaf

Chat chat = (Chat) a;          // ClassCastException !
`}</Code>
		<p class="fragment mt-4 text-red-400">
			Le downcasting peut échouer si le type réel ne correspond pas.
		</p>
		<aside class="notes">
			Le compilateur ne vérifie pas le cast, c'est à l'exécution que ça plante.
			ClassCastException est une RuntimeException. On doit toujours vérifier avant de downcaster.
		</aside>
	</Slide>

	<Slide>
		<h3>Vérifier avant de caster</h3>
		<Code>{`
Animal a = getAnimal();

if (a instanceof Chien) {
    Chien c = (Chien) a;
    c.rapporterBalle();
}
`}</Code>
		<div class="fragment mt-6">
			<p>Depuis Java 16, le <span class="text-important">pattern matching</span> simplifie :</p>
			<Code>{`
if (a instanceof Chien c) {
    c.rapporterBalle();  // c est déjà casté
}
`}</Code>
		</div>
		<aside class="notes">
			Le pattern matching évite le cast redondant. Le compilateur crée la variable
			directement dans le bon type. C'est la syntaxe moderne à privilégier.
		</aside>
	</Slide>

	<Slide>
		<h3>Polymorphisme en action</h3>
		<Code lines="1-2|4-6|8">{`
List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien()); animaux.add(new Chat());

for (Animal a : animaux) {
    a.faireDuBruit();  // Chaque animal fait SON bruit
}

// Wouaf  puis  Miaou
`}</Code>
		<p class="fragment mt-4">
			Le code ne connaît pas les types concrets. <br />
			Ajouter un <code>Perroquet</code> demain ? <span class="text-important">Aucune ligne à modifier.</span>
		</p>
		<aside class="notes">
			C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la modification.
			On verra SOLID en détail plus tard dans cette séance.
		</aside>
	</Slide>

	<Slide>
		<h3>Exemple : formes géométriques</h3>
		<div class="flex flex-row gap-4">
			<Code>{`
abstract class Forme {
    abstract double surface();
}

class Cercle extends Forme {
    double rayon;
    Cercle(double r) { this.rayon = r; }
    double surface() {
        return Math.PI * rayon * rayon;
    }
}

class Rectangle extends Forme {
    double l, h;
    Rectangle(double l, double h) {
        this.l = l; this.h = h;
    }
    double surface() {
        return l * h;
    }
}
`}</Code>
			<Code>{`
List<Forme> formes = List.of(
    new Cercle(5),
    new Rectangle(4, 6),
    new Cercle(2)
);

double total = 0;
for (Forme f : formes) {
    total += f.surface();
}
// Pas besoin de savoir ce qu'on
// calcule : cercle ou rectangle
`}</Code>
		</div>
		<aside class="notes">
			C'est un classique mais c'est exactement ce qu'on trouve dans un logiciel de dessin.
			Le rendu graphique parcourt la liste de formes et appelle draw() sur chacune.
		</aside>
	</Slide>

	<Slide>
		<h3>Utiliser le type le plus générique</h3>
		<PlantUml>{`
@startuml
!theme crt-green
skinparam backgroundColor transparent

interface Volant {
  + voler(): void
}

class Oiseau implements Volant
class Avion implements Volant
class Drone implements Volant

class TourDeControle {
  + autoriserDecollage(v: Volant)
}

TourDeControle ..> Volant : utilise
@enduml
`}</PlantUml>
		<p class="fragment mt-4">
			<code>autoriserDecollage</code> prend un <code>Volant</code>, pas un <code>Avion</code>.
			Demain, un <code>Drone</code> pourra décoller sans modifier la tour.
		</p>
		<aside class="notes">
			Le principe de substitution de Liskov : si votre code fonctionne avec le type parent,
			il doit fonctionner avec n'importe quel sous-type. Préférez toujours le type le plus
			générique possible dans les signatures de méthodes.
		</aside>
	</Slide>

	<Slide>
		<h3>Récapitulatif</h3>
		<table class="text-xl">
			<tr>
				<td class="p-3"><span class="text-important">Surcharge</span></td>
				<td class="p-3">Même nom, paramètres différents (compilation)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">Redéfinition</span></td>
				<td class="p-3">Même signature dans la classe fille (exécution)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">Upcasting</span></td>
				<td class="p-3">Enfant → Parent (implicite, sûr)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">Downcasting</span></td>
				<td class="p-3">Parent → Enfant (explicite, risqué)</td>
			</tr>
			<tr>
				<td class="p-3"><span class="text-important">instanceof</span></td>
				<td class="p-3">Vérifier le type avant de caster</td>
			</tr>
		</table>
		<aside class="notes">
			Ce tableau est à connaître par coeur pour l'examen. Upcasting/downcasting sont des termes
			qu'on retrouve dans tous les langages typés.
		</aside>
	</Slide>
</Slide>


