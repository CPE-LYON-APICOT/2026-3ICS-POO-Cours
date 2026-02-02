<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Généricité</h3>
	<Slide>
		<p>
			La généricité permet de créer des classes, des interfaces et des méthodes avec des types
			paramétrés.
		</p>
		<p>Cela permet de réutiliser du code avec différents types sans le dupliquer.</p>
		<aside class="notes">
			La généricité est arrivée en Java 5 (2004). Avant, on utilisait Object partout avec des casts.
			C'est ce qui rend les Collections type-safe. ArrayList&lt;String&gt; au lieu de ArrayList. Les
			langages modernes ont tous des génériques : C# templates, TypeScript generics, etc.
		</aside>
	</Slide>
	<Slide>
		<h3>Classes génériques</h3>
		<Code>
			{`
	class Boite<T> {
		private T contenu;

		public void setContenu(T contenu) {
			this.contenu = contenu;
		}

		public T getContenu() {
			return contenu;
		}
	}

	Boite<String> boiteDeTextes = new Boite<>();
	boiteDeTextes.setContenu("Bonjour");
	System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"
	`}
		</Code>
		<aside class="notes">
			T est une convention : T pour Type, E pour Element (dans les collections), K/V pour Key/Value
			(dans les maps). Le diamond operator &lt;&gt; (Java 7+) évite de répéter le type : new
			Boite&lt;&gt;() au lieu de new Boite&lt;String&gt;(). Exemple concret : Optional&lt;T&gt; pour
			éviter les NullPointerException.
		</aside>
	</Slide>
	<Slide>
		<h3>Méthodes génériques</h3>
		<Code>
			{`
	class Util {
		public static <T> void afficher(T element) {
			if (element instanceof String) {
				System.out.println("\"" + element + "\"");
			} else if (element instanceof Double || element instanceof Float) {
				System.out.printf("%.2f%n", element);
			} else {
				System.out.println(element);
			}
		}
	}

	Util.afficher("Hello"); // Affiche "Hello"
	Util.afficher(123.5); // Affiche 123.50
	`}
		</Code>
		<aside class="notes">
			Le &lt;T&gt; avant le type de retour déclare que c'est une méthode générique. Java infère le
			type automatiquement à l'appel. Pas besoin d'écrire Util.&lt;String&gt;afficher("Hello").
			Exemple réel : Collections.sort() est une méthode générique.
		</aside>
	</Slide>
	<Slide>
		<h3>Interfaces génériques</h3>
		<Code>
			{`
	interface Comparable<T> {
		int comparer(T autre);
	}

	class Personne implements Comparable<Personne> {
		private String nom;

		public Personne(String nom) {
			this.nom = nom;
		}

		public int comparer(Personne autre) {
			return this.nom.compareTo(autre.nom);
		}
	}
	`}
		</Code>
		<aside class="notes">
			Comparable&lt;T&gt; est l'une des interfaces les plus utilisées en Java. Elle permet le tri
			naturel des objets. Collections.sort() l'utilise. C'est un exemple parfait de type-safety : on
			compare des Personne avec des Personne, pas avec des Object.
		</aside>
	</Slide>

	<Slide>
		<h3>Contrôle de type sur les types génériques</h3>
		<Code>
			{`
		class Boite<T> {
			private T contenu;

			public void setContenu(T contenu) {
				this.contenu = contenu;
			}

			public T getContenu() {
				return contenu;
			}
		}

		Boite<String> boiteDeTextes = new Boite<>();
		boiteDeTextes.setContenu("Bonjour");
		System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"

		// Erreur de compilation
		Boite<Integer> boiteDeNombres = new Boite<>();
		boiteDeNombres.setContenu("Bonjour"); // Erreur: incompatible types: String cannot be converted to Integer
		`}
		</Code>
		<p class="smaller">
			Le contrôle de type permet de s'assurer que les types utilisés avec les classes et méthodes
			génériques sont compatibles, évitant ainsi les erreurs de type à l'exécution.
		</p>
		<aside class="notes">
			Le contrôle se fait à la compilation, pas à l'exécution (type erasure). C'est une sécurité :
			on détecte les erreurs avant de lancer le programme. Sans génériques, on aurait un
			ClassCastException à l'exécution.
		</aside>
	</Slide>
	<Slide>
		<h3>Restriction des types génériques</h3>
		<p>Il est possible de "filtrer" les types génériques en utilisant des contraintes.</p>
		<div>
			<PlantUml
				>{`
    abstract class Animal 
    abstract class Oiseau extends Animal
    class Chien extends Animal
    class Colibri extends Oiseau
    class CageOiseau<T extends Oiseau>{
        T contenu
        void setContenu(T contenu)
    }
    `}
			</PlantUml>
			<Code>
				{`
    public class CageOiseau<T extends Oiseau> {}

    CageOiseau<Oiseau> cageOiseau = new CageOiseau<>();
    cageOiseau.setContenu(new Oiseau());
    cageOiseau.setContenu(new Colibri());
    CageOiseau<Chien> cageChien = new CageOiseau<>(); // Erreur de compilation
    cageChien.setContenu(new Chien()); // Erreur de compilation
    `}
			</Code>
		</div>
		<aside class="notes">
			extends pour les génériques fonctionne aussi pour les interfaces (extends, pas implements). On
			appelle ça une "borne supérieure" (upper bound). T doit être Oiseau ou un sous-type. Exemple
			réel : &lt;T extends Comparable&lt;T&gt;&gt; pour imposer que T soit comparable.
		</aside>
	</Slide>
	<Slide>
		<h3>Restriction des types génériques</h3>
		<div class="flex items-start">
			<PlantUml>
				{`
        class Cage<T extends IVolant & Animal>
        class Oiseau extends Animal implements IVolant
        class Avion extends Vehicule implements IVolant 
        Cage --down[hidden]> IVolant
        
`}
			</PlantUml>
			<Code>
				{`
        interface IVolant {}
        class Cage<T extends IVolant & Animal> {
            T contenu;
            void setContenu(T contenu) {
                this.contenu = contenu;
            }
        }
        class Oiseau extends Animal implements IVolant {}
        class Avion extends Vehicule implements IVolant {}

        Cage<Oiseau> cageOiseau = new Cage<>();
        Cage<Avion> cageAvion = new Cage<>(); // Erreur de compilation
            
        
                
        `}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h3>Classes génériques avec plusieurs types</h3>
		<Code>
			{`
        class Paire<T, U> {
            private T premier;
            private U second;

            public Paire(T premier, U second) {
                this.premier = premier;
                this.second = second;
            }

            public T getPremier() {
                return premier;
            }

            public U getSecond() {
                return second;
            }
        }

        Paire<String, Integer> paire = new Paire<>("Age", 30);
        System.out.println(paire.getPremier()); // Affiche "Age"
        System.out.println(paire.getSecond()); // Affiche 30
        `}
		</Code>
		<aside class="notes">
			On peut avoir autant de paramètres de type qu'on veut : Triplet&lt;A, B, C&gt;. Exemple
			célèbre : Map&lt;K, V&gt; avec K pour les clés et V pour les valeurs. En entreprise, très
			utile pour les DTOs (Data Transfer Objects) et les réponses API.
		</aside>
	</Slide>
	<Slide>
		<h3>Méthodes génériques avec plusieurs types</h3>
		<Code>
			{`
        class Util {
            public static <T, U> void afficherDeux(T premier, U second) {
                System.out.println("Premier: " + premier);
                System.out.println("Second: " + second);
            }
        }

        Util.afficherDeux("Hello", 123);    // Affiche "Premier: Hello" et "Second: 123"
        Util.afficherDeux(3.14, true);      // Affiche "Premier: 3.14" et "Second: true"
        `}
		</Code>
	</Slide>
</Slide>
