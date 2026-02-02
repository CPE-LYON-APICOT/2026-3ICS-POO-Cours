<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>
<Slide>
	<h3>La composition</h3>

	<!-- TRANSITION DEPUIS L'HÉRITAGE -->
	<Slide>
		<h3>Et si on ne veut pas hériter ?</h3>
		<p>L'héritage, c'est puissant... mais pas toujours adapté.</p>
		<div class="fragment mt-8">
			<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p>
			<p class="text-red-400 text-3xl fragment">❌ Non !</p>
		</div>
		<div class="fragment mt-4">
			<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p>
			<p class="text-green-400 text-3xl fragment">✅ Oui !</p>
		</div>
		<p class="fragment mt-8 text-accent-200 font-bold">
			C'est la <span class="text-important">composition</span> !
		</p>
	</Slide>

	<Slide>
		<h3>Qu'est-ce que la composition ?</h3>
		<p>
			La composition permet de créer des objets complexes en combinant des objets plus simples.
		</p>
		<p class="fragment mt-4">
			C'est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.
		</p>
		<p class="fragment mt-4">
			En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu'attributs</span> d'une autre classe.
		</p>
		<aside class="notes">
			Si vous connaissez les bases de données, c'est comme une clé étrangère.
			Un objet "possède" un autre objet.
		</aside>
	</Slide>

	<!-- ARBRE DE DÉCISION -->
	<Slide>
		<h3>Comment choisir : Héritage ou Composition ?</h3>
		<div class="text-2xl mt-8">
			<div class="p-6 bg-accent-950 rounded-lg">
				<p class="fragment">🤔 "Est-ce qu'un X <b class="text-important">est un</b> Y ?"</p>
				<p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p>
				<p class="fragment text-red-400 ml-8">→ NON : ↓</p>
				<p class="fragment mt-4">🤔 "Est-ce qu'un X <b class="text-important">a un</b> Y ?"</p>
				<p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p>
			</div>
		</div>
		<aside class="notes">
			C'est LA règle d'or. Apprenez-la par cœur. 
			Si "X est un Y" sonne faux, n'héritez pas, composez.
		</aside>
	</Slide>

	<Slide>
		<h3>Exemples concrets</h3>
		<table class="text-xl mt-6">
			<thead>
				<tr>
					<th class="p-3">Question</th>
					<th class="p-3">Réponse</th>
					<th class="p-3">Relation</th>
				</tr>
			</thead>
			<tbody>
				<tr class="fragment">
					<td class="p-3">Un Chien <b>est un</b> Animal ?</td>
					<td class="p-3 text-green-400">✅ Oui</td>
					<td class="p-3">Héritage</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Une Voiture <b>est un</b> Moteur ?</td>
					<td class="p-3 text-red-400">❌ Non</td>
					<td class="p-3">-</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Une Voiture <b>a un</b> Moteur ?</td>
					<td class="p-3 text-green-400">✅ Oui</td>
					<td class="p-3">Composition</td>
				</tr>
				<tr class="fragment">
					<td class="p-3">Un Maître <b>a un</b> Animal ?</td>
					<td class="p-3 text-green-400">✅ Oui</td>
					<td class="p-3">Composition</td>
				</tr>
			</tbody>
		</table>
		<aside class="notes">
			Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec l'expérience.
			En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi héritage ou composition ici ?"
			Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas de sens."
		</aside>
	</Slide>

	<!-- EXEMPLE VOITURE/MOTEUR -->
	<Slide>
		<h3>Exemple : Voiture et Moteur</h3>
		<PlantUml>
{`
@startuml
class Moteur {
  - puissance: int
  + demarrer()
  + arreter()
}

class Roue {
  - taille: int
  + tourner()
}

class Voiture {
  - moteur: Moteur
  - roues: Roue[4]
  + conduire()
}

Voiture *-- Moteur
Voiture *-- "4" Roue
@enduml
`}
		</PlantUml>
		<p class="fragment">
			Le losange plein (◆) indique une <span class="text-important">composition</span> : 
			la Voiture <b>possède</b> le Moteur.
		</p>
	</Slide>

	<Slide>
		<h3>En code Java</h3>
		<Code lines="1-8|10-20|22-25">
{`
class Moteur {
    private int puissance;
    
    void demarrer() {
        System.out.println("Vrooom !");
    }
}

class Voiture {
    private Moteur moteur;      // Composition !
    private Roue[] roues;
    
    Voiture() {
        this.moteur = new Moteur();  // La Voiture CRÉE son Moteur
        this.roues = new Roue[4];
    }
    
    void conduire() {
        moteur.demarrer();  // Délègue au moteur
        System.out.println("La voiture roule");
    }
}

// Utilisation
Voiture maVoiture = new Voiture();
maVoiture.conduire();  // "Vrooom !" puis "La voiture roule"
`}
		</Code>
	</Slide>

	<Slide>
		<h3>Avantage : flexibilité</h3>
		<p>La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.</p>
		<Code>
{`
class MoteurElectrique extends Moteur {
    @Override
    void demarrer() {
        System.out.println("... (silence)");
    }
}

class VoitureElectrique {
    private Moteur moteur = new MoteurElectrique();
    // Le reste est identique !
}
`}
		</Code>
		<p class="fragment text-accent-200">
			On peut changer le moteur sans modifier la classe Voiture !
		</p>
		<aside class="notes">
			C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt qu'hériter.
			L'héritage crée un couplage fort. La composition permet de changer de stratégie à l'exécution.
			C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...
		</aside>
	</Slide>

	<!-- LES DEUX RELATIONS -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Les deux relations fondamentales</h2>
		<p class="text-2xl text-gray-400">Le cœur de l'architecture objet</p>
		<aside class="notes">
			Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de l'architecture objet.
			Quand vous lisez du code, cherchez ces relations. Quand vous concevez, posez-vous ces questions.
		</aside>
	</Slide>

	<Slide>
		<div class="">
			<p>
				L'un des intérêts de la POO réside dans les <b>relations</b> entre les objets.
				Ces relations constituent l'<span class="text-important">architecture</span> de votre application.
			</p>
			<dl class="mt-6 text-xl"> 
				<dt class="fragment"><strong class="text-important">"est un"</strong> (<em>is-a</em>)</dt>
				<dd class="fragment ml-8">
					<p>
						Une classe peut être assimilée à une autre, plus générale.
						→ <span class="text-important">Héritage</span>
					</p>
				</dd>
				<dt class="fragment mt-4"><strong class="text-important">"a un"</strong> (<em>has-a</em>)</dt>
				<dd class="fragment ml-8">
					<p>
						Une classe dépend des services d'une autre.
						→ <span class="text-important">Composition</span>
					</p>
				</dd>
			</dl>
		</div>
		<aside class="notes">
			Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y ?"
			La réponse vous dit quelle relation utiliser. C'est mécanique.
		</aside>
	</Slide>

	<!-- EXEMPLE MAÎTRE/ANIMAL -->
	<Slide>
		<h3>Exemple : Maître et Animal</h3>
		<p>Un Maître <b>a un</b> Animal (composition), et l'Animal peut être un Chien ou un Chat (héritage).</p>
		<PlantUml>
{`
@startuml
abstract class Animal {
  + crier()
}

class Chien extends Animal {
  + crier()
}

class Chat extends Animal {
  + crier()
}

class Maitre {
  - animal: Animal
  + presenterAnimal()
}

Maitre *-- Animal : possède
@enduml
`}
		</PlantUml>
		<aside class="notes">
			Cet exemple combine les deux concepts. C'est typique d'une architecture réelle.
			Le Maître ne connaît pas le type exact de son animal. Il sait juste que c'est un Animal.
			C'est de l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.
		</aside>
	</Slide>

	<Slide>
		<h3>En code Java</h3>
		<div class="flex flex-row items-start gap-4">
			<Code class="language-java">
{`
abstract class Animal {
    abstract void crier();
}

class Chien extends Animal {
    @Override
    void crier() {
        System.out.println("Wouaf !");
    }
}

class Chat extends Animal {
    @Override
    void crier() {
        System.out.println("Miaou !");
    }
}
`}
			</Code>
			<Code class="language-java">
{`
class Maitre {
    private Animal animal;  // Composition
    
    Maitre(Animal animal) {
        this.animal = animal;
    }
    
    void presenterAnimal() {
        System.out.println("Mon animal fait :");
        animal.crier();
    }
}

// Utilisation
Maitre jean = new Maitre(new Chien());
jean.presenterAnimal();
// "Mon animal fait :" puis "Wouaf !"
`}
			</Code>
		</div>
	</Slide>

	<Slide>
		<h3>La puissance de la combinaison</h3>
		<p>Le Maître ne sait pas quel type d'animal il a... et c'est <b>voulu</b> !</p>
		<Code>
{`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`}
		</Code>
		<p class="fragment text-accent-200 font-bold">
			C'est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)
		</p>
		<aside class="notes">
			C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture flexible.
			Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro modification.
			C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la modification.
		</aside>
	</Slide>

	<!-- COMPOSITION VS AGRÉGATION -->
	<Slide>
		<h3>Composition vs Agrégation</h3>
		<p>Il existe une nuance importante :</p>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">◆ Composition</h4>
				<p class="text-xl mt-2">L'objet contenu <b>appartient</b> à l'objet conteneur.</p>
				<p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">◇ Agrégation</h4>
				<p class="text-xl mt-2">L'objet contenu <b>existe indépendamment</b>.</p>
				<p class="text-sm text-gray-400 mt-2">Si l'Équipe est dissoute, les Joueurs existent toujours.</p>
			</div>
		</div>
		<aside class="notes">
			En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave.
			L'important c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens ?"
			Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).
		</aside>
	</Slide>

	<Slide>
		<h3>En UML</h3>
		<PlantUml>
{`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`}
		</PlantUml>
		<p class="mt-4">
			◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)
		</p>
		<aside class="notes">
			En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi.
			En composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.
		</aside>
	</Slide>

	<Slide>
		<h3>En code : qui crée quoi ?</h3>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h4 class="text-important">◆ Composition</h4>
				<Code class="language-java">
{`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`}
				</Code>
			</div>
			<div>
				<h4 class="text-important">◇ Agrégation</h4>
				<Code class="language-java">
{`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`}
				</Code>
			</div>
		</div>
	</Slide>

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif</h3>
		<table class="text-xl">
			<thead>
				<tr>
					<th class="p-3">Relation</th>
					<th class="p-3">Question</th>
					<th class="p-3">Implémentation</th>
					<th class="p-3">UML</th>
				</tr>
			</thead>
			<tbody>
				<tr class="fragment">
					<td class="p-3 text-important">Héritage</td>
					<td class="p-3">"X est un Y"</td>
					<td class="p-3"><code>extends</code></td>
					<td class="p-3">Flèche △</td>
				</tr>
				<tr class="fragment">
					<td class="p-3 text-important">Composition</td>
					<td class="p-3">"X a un Y" (possède)</td>
					<td class="p-3">Attribut (créé)</td>
					<td class="p-3">Losange ◆</td>
				</tr>
				<tr class="fragment">
					<td class="p-3 text-important">Agrégation</td>
					<td class="p-3">"X a un Y" (référence)</td>
					<td class="p-3">Attribut (reçu)</td>
					<td class="p-3">Losange ◇</td>
				</tr>
			</tbody>
		</table>
		<aside class="notes">
			Gardez ce tableau en tête. C'est la base de toute modélisation objet.
			En UML, on utilise ces symboles. En entretien, on vous demandera de dessiner ces diagrammes.
			Prochaine étape : les interfaces, pour aller encore plus loin dans l'abstraction.
		</aside>
	</Slide>
</Slide>
