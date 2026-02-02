<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Gpt from '$lib/deck/gpt.svelte'
	import Markdown from '$lib/deck/markdown.svelte'
	import Notes from '$lib/deck/notes.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import Presentation from '$lib/presentation.svelte'
	import ProgOoSchema from '$lib/Seance1/ProgOOSchema.svelte'
	import Page from '$routes/+page.svelte'
	import Composition from './Composition.svelte'
	import Heritage from './Heritage.svelte'
	import Introduction from './Introduction.svelte'
</script>

<Slide>
	<Slide>
		<h3>L'héritage multiple</h3>
		<p>Comment hériter de deux classes ?</p>

		<PlantUml>
			{`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `}
		</PlantUml>
		<p class="fragment">
			En Java, ce n'est pas possible !
			<br /> En revanche, on peut utiliser une interface pour simuler l'héritage multiple.
		</p>
		<aside class="notes">
			L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?
		</aside>
	</Slide>
</Slide>
<Slide>
	<h3>Les interfaces</h3>
	<Slide>
		<p>
			Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.
		</p>
		<p>Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.</p>
		<Code
			>{`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `}</Code
		>
		<aside class="notes">
			Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.
		</aside>
	</Slide>

	<Slide>
		<h3>Implémentation d’une interface</h3>
		<p>
			Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.
		</p>
		<aside class="notes">
			C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.
		</aside>
	</Slide>
	<Slide>
		<h3>Implémentation d’une interface</h3>
		<Code className="h-[70vh]"
			>{`
    public class SiegeAuto extends Accessoire implements ArticleLouable {
    
        @Override
        public float reserver(Date from, Date to) {
        // ...
        }
    
        @Override
        public float rendre(int penalite) {
        // ...
        }
    }
    `}</Code
		>
		<aside class="notes">
			Notez qu'on peut combiner extends ET implements. SiegeAuto hérite d'Accessoire ET implémente
			ArticleLouable. C'est très courant en pratique. Une classe a souvent une hiérarchie ET des
			capacités additionnelles. L'ordre est important : extends AVANT implements !
		</aside>
	</Slide>
	<Slide>
		<h3>Implémentation d’une interface</h3>
		<p>
			Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br />
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.
		</p>
		<aside class="notes">
			C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.
		</aside>
	</Slide>

	<Slide>
		<h3>Comment choisir entre une classe abstraite et une interface ?</h3>
		<ul class=" text-4xl">
			<li>
				<b>Classe abstraite</b> : Si, fondamentalement, on peut dire "Un Dauphin est un Animal",
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br />
			</li>
			<li>
				<b>Interface</b> : S'il est plus juste de dire "Un Dauphin peut nager", alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul>
					<li>
						Si quelque chose qui n'aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br />
						Par exemple, un avion et un oiseau peuvent voler, mais ils n'ont rien à voir l'un avec l'autre.
					</li>
					<li>
						Sinon, prévoyez plutôt une interface si vous pensez qu'une classe fille pourrait avoir
						besoin d'hériter de plusieurs classes.
					</li>
				</ul>
			</li>
		</ul>
		<aside class="notes">
			C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.
		</aside>
	</Slide>
	<Slide>
		<h3>Comment choisir entre une classe abstraite et une interface ?</h3>
		<div class=" flex flex-row justify-center items-center">
			<PlantUml>
				{`
            @startuml
            !theme crt-green
            skinparam backgroundColor transparent
            interface Nager {
                + nager()
            }

            interface Pondre {
                + pondre()
            }

            abstract class Animal
            abstract class Mammifère extends Animal
            abstract class Reptile extends Animal

            class Dauphin extends Mammifère implements Nager
            class Crocodile extends Reptile implements Nager
            class TortueMarine extends Reptile implements Nager, Pondre
            class Lézard extends Reptile implements Pondre
            class Lion extends Mammifère
            @enduml
        `}
			</PlantUml>

			<PlantUml>
				{`
                @startuml
                !theme crt-amber
                skinparam backgroundColor transparent
                abstract class Animal
                abstract class Mammifère extends Animal
                abstract class Reptile extends Animal

                abstract class MammifèreNageur extends Mammifère {
                    + nager()
                }
		<aside class="notes">
			À gauche avec les interfaces : propre, flexible. À droite sans : explosion combinatoire de classes.
			C'est le fameux problème "Mammifère qui nage ET qui pond" → impossible sans interface.
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.
		</aside>

                abstract class ReptileNageur extends Reptile {
                    + nager()
                }

                abstract class ReptilePondeur extends Reptile {
                    + pondre()
                }

                abstract class ReptileNageurPondeur extends Reptile {
                    + nager()
                    + pondre()
                }

                class Dauphin extends MammifèreNageur
                class Crocodile extends ReptileNageur
                class TortueMarine extends ReptileNageurPondeur
                class Lézard extends ReptilePondeur
                class Lion extends Mammifère
                @enduml

                `}
			</PlantUml>
		</div>
	</Slide>

	<Slide>
		<h3>Préambule au polymorphisme</h3>
		<p>
			Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe
			quel objet qui l'implémente.
		</p>
		<Code class=" highlighter language-java"
			>{`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `}</Code
		>
		<aside class="notes">
			C'est ça la vraie puissance des interfaces ! Le code ne sait pas et n'a pas besoin de savoir
			ce qu'est un Nageur. Demain, vous ajoutez une classe Robot qui implémente Nageur → ça marche
			sans changer une ligne ! C'est le principe d'inversion de dépendance (le D de SOLID) :
			dépendez des abstractions, pas des implémentations.
		</aside>
	</Slide>
	<Slide>
		<h3>Héritage d’interface</h3>
		<p>
			Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.
		</p>
		<Code className="highlighter language-java"
			>{`
            interface Herbivore {
                void manger(Plante plante);
            }
            interface Carnivore {
                void manger(Animal animal);
            }
            interface Omnivore extends Herbivore, Carnivore {
                void manger(Plante plante);
                void manger(Animal animal);
            }

            `}</Code
		>
	</Slide>
	<Slide>
		<h3>Héritage d’interface</h3>

		<p>
			Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au
			mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une
			instance compatible avec cette interface.
		</p>
		<Code className="highlighter language-java"
			>{`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `}</Code
		>
	</Slide>
	<Slide>
		<h3>Les interfaces marqueurs</h3>
		<p>
			Une interface sans méthode est appelée une interface marqueur. <br />
			Elle est utilisée pour étiqueter une classe.
		</p>
		<p>On les utilise ainsi</p>
		<Code className="highlighter language-java"
			>{`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `}</Code
		>

		<p>
			Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.
		</p>
		<aside class="notes">
			Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.
		</aside>
	</Slide>
	<Slide>
		<h3>Conventions de nommage</h3>
		<ul>
			<li>Les interfaces sont nommées avec un nom qui commence par "I" suivi d'un nom.</li>
			<li>Le nom est un adjectif ou un nom qui décrit un comportement.</li>
			<li>
				Exemple :
				<ul>
					<li>IVolant</li>
					<li>IConfidentiel</li>
					<li><s>INageur</s></li>
					<li><s>Bateau</s></li>
					<li><s>Vitesse</s></li>
				</ul>
			</li>
		</ul>
		<aside class="notes">
			Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.
		</aside>
	</Slide>
</Slide>
