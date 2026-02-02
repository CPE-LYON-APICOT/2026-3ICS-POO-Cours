<script>
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les lambdas</h3>
	<Slide>
		<h3>Présentation</h3>
		<p>
			Les lambdas sont des fonctions anonymes qui permettent de simplifier le code en évitant de
			créer des classes ou des méthodes supplémentaires. Pensez à elles comme à des raccourcis pour
			écrire des fonctions.
		</p>
		<p>
			Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles, c'est-à-dire des
			interfaces qui ne contiennent qu'une seule méthode abstraite.
		</p>
		<aside class="notes">
			Les lambdas sont arrivées en Java 8 (2014). C'est la plus grosse évolution du langage depuis
			les génériques. Elles viennent de la programmation fonctionnelle (Haskell, Scala,
			JavaScript...). Aujourd'hui, impossible de coder en Java moderne sans connaître les lambdas.
			C'est partout.
		</aside>
	</Slide>
	<Slide>
		<h3>Syntaxe des lambdas</h3>
		<p>La syntaxe des lambdas en Java est la suivante :</p>
		<Code>
			{`
            (paramètres) -> expression
            (paramètres) -> { instructions }
            `}
		</Code>
		<p>Exemple :</p>
		<Code>
			{`
            (int a, int b) -> a + b
            () -> System.out.println("Hello, world!")
            (String s) -> { System.out.println(s); }
            `}
		</Code>
		<aside class="notes">
			La flèche -> est le symbole clé. À gauche les paramètres, à droite le corps. Si une seule
			expression, pas besoin d'accolades ni de return. Java le fait pour vous. Si plusieurs
			instructions, accolades obligatoires et return explicite si nécessaire.
		</aside>
	</Slide>
	<Slide>
		<h3>Utilisation de la notation ::</h3>
		<p>
			La notation <code>::</code> en Java est utilisée pour faire référence à une méthode ou à un constructeur.
			Elle est souvent utilisée avec les lambdas pour simplifier le code.
		</p>
		<p>Exemple :</p>
		<Code>
			{`
                import java.util.Arrays;
                import java.util.List;

                public class Lambda {
                    public static void main(String[] args) {
                        List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
                        // Utilisation de la notation ::
                        noms.forEach(System.out::println);
                        // Affiche Alice, Bob, Charlie
                    }
                }
            `}
		</Code>
		<aside class="notes">
			C'est une "method reference". System.out::println est équivalent à x -> System.out.println(x).
			Plus court, plus lisible. L'IDE vous proposera souvent de convertir une lambda en method
			reference. On peut aussi référencer des constructeurs : ArrayList::new crée une nouvelle
			instance.
		</aside>
	</Slide>
	<Slide>
		<h3>Exemple d'utilisation</h3>
		<p>Voici un exemple d'utilisation des lambdas avec une interface fonctionnelle :</p>
		<Code>
			{`
            @FunctionalInterface
            public interface Operation {
                int calculer(int a, int b);
            }

            public class Lambda {
                public static void main(String[] args) {
                Operation addition = (a, b) -> a + b;
                System.out.println(addition.calculer(5, 3)); // Affiche 8
                }
            }
            `}
		</Code>
	</Slide>

	<Slide>
		<h3>La bibliothèque Stream</h3>
		<p>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle.</p>
		<Code>
			{`
            public class Lambda {
                public static void main(String[] args) {
                    List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
                    // Utilisation de la bibliothèque Stream
                    nombres.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
                    // Affiche 2 et 4
                }
            }
            `}
		</Code>
		<aside class="notes">
			Les Streams changent complètement la façon de traiter les données en Java. Plus de boucles for
			explicites, on décrit CE qu'on veut, pas COMMENT le faire. Bonus : avec parallelStream(), Java
			peut paralléliser automatiquement le traitement !
		</aside>
	</Slide>
	<Slide>
		<h3>La bibliothèque Stream</h3>
		<h4>Exemples de fonctions de <code>stream</code></h4>
		<ul>
			<li><code>filter</code> : filtre les éléments d'un <code>stream</code></li>
			<li><code>map</code> : transforme les éléments d'un <code>stream</code></li>
			<li><code>reduce</code> : réduit les éléments d'un <code>stream</code></li>
			<li><code>collect</code> : collecte les éléments d'un <code>stream</code></li>
		</ul>
		<aside class="notes">
			Retenez filter-map-reduce, c'est le trio magique. Vient de la programmation fonctionnelle.
			Google MapReduce pour le Big Data est basé sur ces concepts. Très utile pour traiter des
			listes d'objets métier en entreprise.
		</aside>
	</Slide>
	<Slide>
		<h3>La bibliothèque Stream</h3>
		<h4>Exemples complet</h4>
		<div class="flex justify-center">
			<div class="flex-1">
				<h6>Utilisation de boucles</h6>
				<Code>
					{`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        int somme = 0;
                        for (int n : nombres) {
                            if (n % 2 == 0) {
                                somme += n * 2;
                            }
                        }
                        // Affiche 12
                    }
                }
                `}
				</Code>
			</div>
			<div class="flex-1">
				<h6>Utilisation de Stream</h6>
				<Code>
					{`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        // Utilisation de la bibliothèque Stream
                        nombres.stream()
                            .filter(n -> n % 2 == 0)
                            .map(n -> n * 2)
                            .reduce(0, (a, b) -> a + b);
                        // Affiche 12
                    }
                }
                `}
				</Code>
			</div>
		</div>
		<aside class="notes">
			Montrez bien la différence : à gauche on dit COMMENT faire, à droite CE QU'ON VEUT. Le code
			Stream est plus déclaratif, plus facile à lire une fois qu'on maîtrise. En entretien
			d'embauche, savoir écrire ce type de code est souvent demandé.
		</aside>
	</Slide>
	<Slide>
		<h3>Généralitées sur les Lambda</h3>
		<ul>
			<li>Les lambdas sont des fonctions anonymes</li>
			<li>Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles</li>
			<li>
				Une interface fonctionnelle est une interface qui ne contient qu'une seule méthode abstraite
			</li>
			<li>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle</li>
		</ul>
		<aside class="notes">
			Résumé important. Les interfaces fonctionnelles : Runnable, Comparator, Consumer, Function...
			Java fournit plein d'interfaces dans java.util.function prêtes à l'emploi. C'est le bridge
			entre la POO classique et la programmation fonctionnelle.
		</aside>
	</Slide>
	<Slide>
		<h3>Portée des variables</h3>
		<p>
			Les lambdas peuvent accéder aux variables locales et aux paramètres des méthodes dans
			lesquelles elles sont déclarées.
		</p>
		<Code>
			{`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a + b;
                        System.out.println(addition.calculer(3)); // Affiche 8
                    }
                }
                `}
		</Code>
		<p>
			En revanche, elles ne peuvent pas modifier les variables locales et les paramètres des
			méthodes dans lesquelles elles sont déclarées.
		</p>
		<Code>
			{`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a = a + b; // Erreur de compilation
                    }
                }
                `}
		</Code>
		<aside class="notes">
			C'est la règle "effectively final". La variable doit être comme si elle était déclarée final.
			Pourquoi ? Pour éviter les problèmes de concurrence. La lambda peut s'exécuter plus tard. Si
			on veut modifier une valeur, utiliser un AtomicInteger ou un tableau d'un élément.
		</aside>
	</Slide>
	<Slide>
		<h3>Les collecteurs</h3>
		<p>
			Les collecteurs sont utilisés pour accumuler les éléments d'un stream dans une collection, une
			chaîne de caractères, ou une autre structure de données.
		</p>
		<p>Exemples de collecteurs :</p>
		<ul>
			<li><code>toList</code> : collecte les éléments dans une liste</li>
			<li><code>toSet</code> : collecte les éléments dans un ensemble</li>
			<li><code>joining</code> : concatène les éléments en une chaîne de caractères</li>
			<li><code>groupingBy</code> : groupe les éléments par une clé</li>
			<li><code>partitioningBy</code> : partitionne les éléments en deux groupes</li>
		</ul>
		<aside class="notes">
			Les Collectors sont le bout de la chaîne Stream. Ils transforment le stream en résultat
			concret. groupingBy est très puissant pour faire des analyses : grouper des commandes par
			client, des employés par département... En entreprise, c'est souvent utilisé pour préparer des
			données pour des rapports.
		</aside>
	</Slide>
	<Slide>
		<h3>Exemples de collecteurs</h3>
		<p>Voici quelques exemples d'utilisation des collecteurs :</p>
		<Code>
			{`
                // Exemples
                var noms = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.toList());
                var nomsSet = Stream.of("Alice", "Bob", "Charlie", "Alice").collect(Collectors.toSet());
                // [Alice, Bob, Charlie] (sans doublons)

                var nomsConcat = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.joining(", "));
                // "Alice, Bob, Charlie"

                var nomsGroupes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.groupingBy(String::length));
                // [{3=[Bob], 5=[Alice, Charlie]}
                
                var nomsPartitionnes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.partitioningBy(s -> s.length() > 3));
                // {false=[Bob], true=[Alice, Charlie]}
            `}
		</Code>
	</Slide>
	<Slide>
		<!-- Les intérêts des lambda -->
		<h3>Les intérêts des lambdas</h3>
		<ul>
			<li>Les lambdas permettent de simplifier le code</li>
			<li>Elles permettent de rendre le code plus lisible</li>
			<li>Elles permettent de rendre le code plus concis</li>
			<li>Elles permettent de rendre le code plus maintenable</li>
		</ul>
	</Slide>
</Slide>
