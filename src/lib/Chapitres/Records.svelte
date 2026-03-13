<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les Records</h3>

	<Slide>
		<h3>Le problème de la verbosité</h3>
		<p>Pour stocker 2 données, combien de lignes faut-il ?</p>
		<Code>{`
public class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() { return Objects.hash(x, y); }

    @Override
    public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }
}
`}</Code>
		<p class="fragment text-red-400 mt-2">25 lignes pour 2 attributs...</p>
		<aside class="notes">
			On a vu la verbosité de Java en séance 1 avec l'encapsulation. C'est un problème réel :
			80% du code est du boilerplate. Les IDE le génèrent, mais il faut le maintenir.
			Java 14 introduit une solution élégante.
		</aside>
	</Slide>

	<Slide>
		<h3>La solution : record</h3>
		<Code>{`
public record Point(int x, int y) {}
`}</Code>
		<p class="fragment mt-6 text-3xl">Une seule ligne.</p>
		<div class="fragment mt-6">
			<p>Le compilateur génère automatiquement :</p>
			<ul class="text-xl">
				<li>Le constructeur <code>Point(int x, int y)</code></li>
				<li>Les accesseurs <code>x()</code> et <code>y()</code></li>
				<li><code>equals()</code>, <code>hashCode()</code>, <code>toString()</code></li>
			</ul>
		</div>
		<aside class="notes">
			Introduit en Java 14 (preview), stable en Java 16. Attention : les accesseurs s'appellent
			x() et y(), pas getX() et getY(). C'est une convention différente des JavaBeans.
		</aside>
	</Slide>

	<Slide>
		<h3>Utilisation</h3>
		<Code>{`
record Point(int x, int y) {}

Point p = new Point(3, 4);

System.out.println(p.x());        // 3
System.out.println(p.y());        // 4
System.out.println(p);            // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2)); // true
`}</Code>
		<aside class="notes">
			Notez que equals compare les valeurs automatiquement. C'est exactement ce qu'on veut
			pour des objets "données". Plus besoin de générer manuellement.
		</aside>
	</Slide>

	<Slide>
		<h3>Records et immutabilité</h3>
		<p>Les composants d'un record sont <span class="text-important">final</span> par définition.</p>
		<Code>{`
record Point(int x, int y) {}

Point p = new Point(3, 4);
// p.x = 10;  // Erreur de compilation : pas de setter !

// Pour "modifier", on crée un nouvel objet
Point p2 = new Point(10, p.y());
`}</Code>
		<p class="fragment mt-4">
			Un record est <b>immuable</b> : une fois créé, il ne change plus.
		</p>
		<aside class="notes">
			L'immutabilité est une bonne pratique : pas d'effets de bord, pas de bugs liés à des
			modifications inattendues. C'est aussi thread-safe par construction.
		</aside>
	</Slide>

	<Slide>
		<h3>Personnaliser un record</h3>
		<p>On peut ajouter de la validation dans le constructeur :</p>
		<Code>{`
record Age(int valeur) {
    Age {  // "compact constructor"
        if (valeur < 0 || valeur > 150) {
            throw new IllegalArgumentException(
                "Age invalide : " + valeur);
        }
    }
}

new Age(25);   // OK
new Age(-5);   // IllegalArgumentException !
`}</Code>
		<p class="fragment mt-4">
			On peut aussi ajouter des méthodes, mais pas d'attributs d'instance supplémentaires.
		</p>
		<aside class="notes">
			Le "compact constructor" n'a pas besoin de répéter les affectations this.valeur = valeur.
			Java le fait automatiquement après le bloc. On ne peut que valider ou transformer.
		</aside>
	</Slide>

	<Slide>
		<h3>Records et interfaces</h3>
		<Code>{`
interface Mesurable {
    double mesurer();
}

record Cercle(double rayon) implements Mesurable {
    public double mesurer() {
        return Math.PI * rayon * rayon;
    }
}

record Rectangle(double l, double h) implements Mesurable {
    public double mesurer() {
        return l * h;
    }
}
`}</Code>
		<p class="fragment mt-2">
			Un record peut implémenter des interfaces, mais <span class="text-important">ne peut pas hériter</span> d'une classe.
		</p>
		<aside class="notes">
			Les records étendent implicitement java.lang.Record. Comme Java n'a pas d'héritage multiple,
			ils ne peuvent pas extends autre chose. Mais implements fonctionne normalement.
			Utile pour les DTOs dans les API REST.
		</aside>
	</Slide>

	<Slide>
		<h3>Quand utiliser un record ?</h3>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="p-4 bg-accent-950 rounded-lg">
				<h4 class="text-green-400">Record</h4>
				<ul class="text-xl mt-2">
					<li>Données immuables</li>
					<li>DTOs, valeurs de retour</li>
					<li>Clés de Map</li>
					<li>Paramètres groupés</li>
				</ul>
			</div>
			<div class="p-4 bg-accent-950 rounded-lg">
				<h4 class="text-blue-400">Classe</h4>
				<ul class="text-xl mt-2">
					<li>Données modifiables</li>
					<li>Héritage nécessaire</li>
					<li>Logique métier complexe</li>
					<li>Entités JPA/Hibernate</li>
				</ul>
			</div>
		</div>
		<aside class="notes">
			En pratique, les records sont parfaits pour les objets "valeur" : coordonnées, montants,
			résultats de requêtes. Pour les entités métier avec état mutable et comportement riche,
			gardez les classes classiques.
		</aside>
	</Slide>
</Slide>
