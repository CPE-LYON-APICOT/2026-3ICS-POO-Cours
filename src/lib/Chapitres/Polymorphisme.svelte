<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Polymorphisme</h3>
	<Slide>
		<p>
			Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différents types de
			être traités comme des objets du même type.
		</p>
		<p>
			Il permet d'utiliser une interface commune pour manipuler des objets de classes différentes.
		</p>
		<aside class="notes">
			Polymorphisme vient du grec : "plusieurs formes". Un même code peut prendre plusieurs formes à l'exécution.
			C'est ce qui rend la POO vraiment puissante. Sans polymorphisme, on devrait écrire des tonnes de if/else.
			Historiquement, c'est Alan Kay (créateur de Smalltalk) qui a popularisé ce concept dans les années 70.
		</aside>
	</Slide>
	<Slide>
		<h3>Polymorphisme à la compilation</h3>
		<p>
			Le polymorphisme à la compilation, ou polymorphisme statique, est réalisé par la surcharge de méthodes.
		</p>
		<Code>
			{`
    class MathUtils {
        int additionner(int a, int b) {
            return a + b;
        }

        double additionner(double a, double b) {
            return a + b;
        }
    }
    `}
		</Code>
		<p>
			Dans cet exemple, la méthode <code>additionner</code> est surchargée pour accepter différents types de paramètres.
		</p>
		<aside class="notes">
			Le compilateur choisit quelle méthode appeler en fonction des types des arguments. C'est résolu à la compilation, pas à l'exécution.
			Attention : la surcharge se base sur le nombre et le TYPE des paramètres, pas sur le type de retour !
			C'est différent de la redéfinition (@Override) qu'on a vue avec l'héritage.
		</aside>
	</Slide>
	<Slide>
		<h3>Polymorphisme à l'exécution</h3>
		<p>
			Le polymorphisme à l'exécution, ou polymorphisme dynamique, est réalisé par la redéfinition de méthodes.
		</p>
		<Code>
			{`
    class Animal {
        void faireDuBruit() {
            System.out.println("L'animal fait du bruit");
        }
    }

    class Chien extends Animal {
        void faireDuBruit() {
            System.out.println("Le chien aboie");
        }
    }

    class Chat extends Animal {
        void faireDuBruit() {
            System.out.println("Le chat miaule");
        }
    }
    `}
		</Code>
		<p class="smaller">
			Dans cet exemple, les classes <code>Chien</code> et <code>Chat</code> redéfinissent la méthode <code>faireDuBruit</code> de la classe <code>Animal</code>.
		</p>
		<aside class="notes">
			Ici, c'est la JVM qui décide à l'exécution quelle méthode appeler. C'est la "liaison tardive" ou "late binding".
			C'est ce qui permet de faire des List&lt;Animal&gt; et d'appeler faireDuBruit() sans savoir si c'est un Chien ou un Chat.
			C'est la magie de la POO : le code appelant ne connaît pas le type concret !
		</aside>
	</Slide>
	<Slide>
		<h3>Utilisation du polymorphisme</h3>
		<p>
			Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme.
		</p>
		<Code>
			{`
    Animal monAnimal = new Chien();
    monAnimal.faireDuBruit(); // Le chien aboie

    monAnimal = new Chat();
    monAnimal.faireDuBruit(); // Le chat miaule
    `}
		</Code>
		<p>
			Dans cet exemple, la variable <code>monAnimal</code> peut référencer des objets de type <code>Chien</code> ou <code>Chat</code> et appeler la méthode <code>faireDuBruit</code>.
		</p>
		<aside class="notes">
			C'est ça le polymorphisme en action ! La variable est de type Animal, mais l'objet est un Chien ou un Chat.
			Le type de la variable (Animal) est le type "statique", le type de l'objet (Chien) est le type "dynamique".
			C'est ultra-utilisé dans les frameworks : Spring injecte des implémentations concrètes dans des interfaces.
		</aside>
	</Slide>
	<Slide>
		<h3>Avantages du polymorphisme</h3>
		<ul>
			<li>Facilite la maintenance et l'évolution du code.</li>
			<li>Permet de créer des systèmes plus flexibles et extensibles.</li>
			<li>Encourage l'utilisation d'interfaces et de classes abstraites.</li>
		</ul>
		<aside class="notes">
			Concrètement : vous pouvez ajouter une nouvelle classe Oiseau sans modifier le code existant.
			C'est le principe Open/Closed : ouvert à l'extension, fermé à la modification.
			Dans les Design Patterns, presque tous reposent sur le polymorphisme : Strategy, Factory, Observer...
			Quiz : combien de if/else aurait-on sans polymorphisme ? La réponse est : beaucoup trop !
		</aside>
	</Slide>
	<Slide className="smaller">
		<h3>Exemple pratique</h3>
		<p>
			Imaginons une application de gestion de formes géométriques. Chaque forme doit pouvoir calculer sa surface.
		</p>
		<Code>
			{`
    abstract class Forme {
        abstract double calculerSurface();
    }

    class Cercle extends Forme {
        double rayon;
        Cercle(double rayon) {
            this.rayon = rayon;
        }
        double calculerSurface() {
            return Math.PI * rayon * rayon;
        }
    }

    class Rectangle extends Forme {
        double largeur, hauteur;
        Rectangle(double largeur, double hauteur) {
            this.largeur = largeur;
            this.hauteur = hauteur;
        }
        double calculerSurface() {
            return largeur * hauteur;
        }
    }
    `}
		</Code>
		<aside class="notes">
			Cet exemple est un classique des cours de POO, mais c'est aussi très concret.
			Dans un logiciel de dessin (type Illustrator), c'est exactement comme ça que c'est fait.
			On peut ajouter Triangle, Losange, Polygone... sans toucher au code existant.
		</aside>
	</Slide>
	<Slide>
		<p>
			On peut maintenant utiliser le polymorphisme pour calculer la surface de différentes formes sans se soucier de leur type spécifique.
		</p>
		<Code>
			{`
    Forme maForme = new Cercle(5);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du cercle

    maForme = new Rectangle(4, 6);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du rectangle
    `}
		</Code>
		<aside class="notes">
			Imaginez une List&lt;Forme&gt; avec 100 formes différentes. Une boucle for et calculerSurface() sur chacune.
			Le code ne sait pas si c'est un Cercle ou un Rectangle. Et c'est BIEN : il n'a pas besoin de le savoir.
			C'est le polymorphisme qui fait tout le travail. C'est la beauté de la POO.
		</aside>
	</Slide>

	<Slide>
		<h3>Utiliser le type le plus générique possible</h3>
		<p>
			Lorsque vous codez des méthodes "polymorphiques", il est recommandé d'utiliser le type le plus générique possible. Cela permet de réutiliser le code plus facilement et de rendre le système plus flexible.
		</p>
		<p>
			Par exemple, si une méthode fonctionne pour un <code>Oiseau</code>, il est pertinent de se demander si elle pourrait s'appliquer à tout <code>Animal</code> ou à une de ses interfaces.
		</p>
		<aside class="notes">
			C'est le principe de substitution de Liskov (le L de SOLID) : si votre code fonctionne avec Animal, il doit fonctionner avec tout sous-type.
			Question à se poser : "Ma méthode a-t-elle vraiment besoin de connaître le type concret ?"
			Si non, remontez dans la hiérarchie. C'est un réflexe de bon développeur POO.
			Exemple : Collection au lieu de ArrayList, Map au lieu de HashMap.
		</aside>
	</Slide>
</Slide>


