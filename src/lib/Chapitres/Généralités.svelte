<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>
<Slide>
	<h3>Généralités sur la POO</h3>

	<!-- INTRODUCTION -->
	<Slide>
		<h3>Qu'est-ce qu'un objet ?</h3>
		<p>
			Un <span class="text-important">objet</span> est une entité qui regroupe :
		</p>
		<ul class="mt-4">
			<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li>
			<li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>
		</ul>
		<p class="fragment mt-6">
			Un objet est une <b>instance</b> d'une <span class="text-important">classe</span>.
		</p>
		<aside class="notes">
			La classe c'est le plan, l'objet c'est la maison construite à partir du plan.
			On peut construire plusieurs maisons à partir du même plan.
		</aside>
	</Slide>

	<Slide>
		<h3>Classe vs Objet</h3>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">📐 Classe</h4>
				<p class="text-xl mt-2">Le <b>plan</b>, le modèle</p>
				<p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p>
			</div>
			<div class="p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🏠 Objet</h4>
				<p class="text-xl mt-2">L'<b>instance</b>, la réalisation</p>
				<p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p>
			</div>
		</div>
		<PlantUml className="mt-6 fragment">
{`
@startuml
class Personne {
  - nom: String
  - age: int
  + sePresenter()
}

object "jean : Personne" as jean {
  nom = "Jean"
  age = 25
}

object "marie : Personne" as marie {
  nom = "Marie"
  age = 30
}

Personne <|.. jean
Personne <|.. marie
@enduml
`}
		</PlantUml>
	</Slide>

	<!-- CRÉATION D'OBJETS -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Créer des objets</h2>
		<p class="text-2xl text-gray-400">Le mot-clé new et les constructeurs</p>
	</Slide>

	<Slide>
		<h3>Créer un objet avec new</h3>
		<p>Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.</p>
		<Code>
{`
Personne jean = new Personne();
`}
		</Code>
		<div class="fragment mt-6">
			<p>Que se passe-t-il ?</p>
			<ol class="text-xl">
				<li class="fragment">Java alloue de la mémoire pour l'objet</li>
				<li class="fragment">Le <b>constructeur</b> de la classe est appelé</li>
				<li class="fragment">L'objet est prêt à être utilisé</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<h3>Le constructeur</h3>
		<p>Le constructeur est une <b>méthode spéciale</b> qui initialise l'objet.</p>
		<Code lines="5-9|12">
{`
public class Personne {
    String nom;
    String prenom;
    int age;

    // Constructeur
    public Personne(String nom, String prenom, int age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

Personne p = new Personne("PICOT", "Alexis", 28);
`}
		</Code>
		<aside class="notes">
			Le constructeur a le même nom que la classe, et pas de type de retour.
			this fait référence à l'objet en cours de création.
		</aside>
	</Slide>

	<Slide>
		<h3>Le mot-clé this</h3>
		<p><code class="text-important">this</code> fait référence à l'objet <b>courant</b>.</p>
		<Code>
{`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`}
		</Code>
		<p class="fragment mt-4 text-accent-200">
			<code>this</code> permet de distinguer l'attribut du paramètre quand ils ont le même nom.
		</p>
	</Slide>

	<Slide>
		<h3>Constructeur par défaut</h3>
		<p>Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).</p>
		<Code>
{`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`}
		</Code>
		<p class="fragment text-red-400 mt-4">
			⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !
		</p>
	</Slide>

	<Slide>
		<h3>Surcharge de constructeurs</h3>
		<p>Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.</p>
		<Code lines="6-10|12-15">
{`
public class Personne {
    String nom;
    String prenom;
    int age;

    // Constructeur complet
    public Personne(String nom, String prenom, int age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    // Constructeur simplifié
    public Personne(String nom) {
        this(nom, "Inconnu", 0);  // Appelle l'autre constructeur
    }
}
`}
		</Code>
		<p class="fragment text-accent-200 mt-4">
			<code>this(...)</code> permet d'appeler un autre constructeur de la même classe.
		</p>
	</Slide>

	<!-- MODIFICATEURS D'ACCÈS -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Modificateurs d'accès</h2>
		<p class="text-2xl text-gray-400">Qui peut voir quoi ?</p>
	</Slide>

	<Slide>
		<h3>Les 4 niveaux de visibilité</h3>
		<p>Les modificateurs d'accès contrôlent la <b>visibilité</b> des attributs et méthodes.</p>
		<table class="text-xl mt-6">
			<thead>
				<tr>
					<th class="p-3">Modificateur</th>
					<th class="p-3">Classe</th>
					<th class="p-3">Package</th>
					<th class="p-3">Sous-classe</th>
					<th class="p-3">Partout</th>
				</tr>
			</thead>
			<tbody>
				<tr class="fragment">
					<td class="p-3"><code class="text-important">public</code></td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
				</tr>
				<tr class="fragment">
					<td class="p-3"><code class="text-important">protected</code></td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-red-400">❌</td>
				</tr>
				<tr class="fragment">
					<td class="p-3"><code class="text-gray-400">(default)</code></td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-red-400">❌</td>
					<td class="p-3 text-red-400">❌</td>
				</tr>
				<tr class="fragment">
					<td class="p-3"><code class="text-important">private</code></td>
					<td class="p-3 text-green-400">✅</td>
					<td class="p-3 text-red-400">❌</td>
					<td class="p-3 text-red-400">❌</td>
					<td class="p-3 text-red-400">❌</td>
				</tr>
			</tbody>
		</table>
	</Slide>

	<Slide>
		<h3>En pratique</h3>
		<Code>
{`
public class Personne {
    public String nom;       // Accessible partout
    protected int age;       // Accessible dans le package et sous-classes
    String prenom;           // (default) Accessible dans le package
    private String motDePasse; // Accessible uniquement dans Personne
}
`}
		</Code>
		<p class="fragment mt-6 text-accent-200 font-bold">
			🔮 Nous verrons l'intérêt de ces modificateurs dans le chapitre sur l'<span class="text-important">encapsulation</span>.
		</p>
		<aside class="notes">
			Pour l'instant, retenez juste que ça existe. On verra pourquoi c'est important quand on parlera d'encapsulation.
		</aside>
	</Slide>

	<Slide>
		<h3>Règle générale</h3>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="fragment p-4 bg-green-950 rounded-lg">
				<h4 class="text-green-400">✅ Bonne pratique</h4>
				<ul class="text-xl mt-2">
					<li>Attributs → <code>private</code></li>
					<li>Méthodes utiles → <code>public</code></li>
					<li>Méthodes internes → <code>private</code></li>
				</ul>
			</div>
			<div class="fragment p-4 bg-red-950 rounded-lg">
				<h4 class="text-red-400">❌ À éviter</h4>
				<ul class="text-xl mt-2">
					<li>Tout mettre en <code>public</code></li>
					<li>Ne pas réfléchir à la visibilité</li>
				</ul>
			</div>
		</div>
		<p class="fragment mt-6 text-xl">
			💡 En cas de doute, commencez par <code>private</code> et élargissez si nécessaire.
		</p>
	</Slide>

	<!-- GESTION DES EXCEPTIONS -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Gestion des erreurs</h2>
		<p class="text-2xl text-gray-400">Les exceptions en Java</p>
	</Slide>

	<Slide>
		<h3>Qu'est-ce qu'une exception ?</h3>
		<p>Une <span class="text-important">exception</span> est une erreur qui survient pendant l'exécution.</p>
		<Code>
{`
int a = 10 / 0;  // ArithmeticException !

String s = null;
s.length();      // NullPointerException !

int[] tab = new int[5];
tab[10] = 42;    // ArrayIndexOutOfBoundsException !
`}
		</Code>
		<p class="fragment mt-4 text-red-400">
			Sans gestion, ces erreurs <b>crashent</b> votre programme !
		</p>
	</Slide>

	<Slide>
		<h3>try / catch / finally</h3>
		<p>On utilise des blocs pour <b>capturer</b> et <b>gérer</b> les exceptions.</p>
		<Code lines="1-4|5-8|9-11">
{`
try {
    // Code qui peut générer une exception
    int resultat = 10 / 0;
    System.out.println(resultat);
} catch (ArithmeticException e) {
    // Code exécuté SI une exception se produit
    System.out.println("Erreur : " + e.getMessage());
}
finally {
    // Code exécuté TOUJOURS (avec ou sans exception)
    System.out.println("Fin du bloc");
}
`}
		</Code>
	</Slide>

	<Slide>
		<h3>Lancer une exception</h3>
		<p>On peut aussi <b>créer</b> et <b>lancer</b> nos propres exceptions.</p>
		<Code>
{`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("L'âge ne peut pas être négatif !");
    }
    this.age = age;
}

// Utilisation
try {
    personne.setAge(-5);
} catch (IllegalArgumentException e) {
    System.out.println("Erreur : " + e.getMessage());
}
`}
		</Code>
		<aside class="notes">
			C'est une bonne pratique de vérifier les paramètres et de lancer des exceptions explicites.
			Ça aide au debug.
		</aside>
	</Slide>

	<Slide>
		<h3>Exceptions courantes</h3>
		<table class="text-xl">
			<tr class="fragment">
				<td class="p-3"><code>NullPointerException</code></td>
				<td class="p-3">Accès à un objet null</td>
			</tr>
			<tr class="fragment">
				<td class="p-3"><code>ArrayIndexOutOfBoundsException</code></td>
				<td class="p-3">Index hors limites d'un tableau</td>
			</tr>
			<tr class="fragment">
				<td class="p-3"><code>ArithmeticException</code></td>
				<td class="p-3">Division par zéro</td>
			</tr>
			<tr class="fragment">
				<td class="p-3"><code>IllegalArgumentException</code></td>
				<td class="p-3">Argument invalide</td>
			</tr>
			<tr class="fragment">
				<td class="p-3"><code>IOException</code></td>
				<td class="p-3">Erreur d'entrée/sortie (fichiers)</td>
			</tr>
		</table>
	</Slide>

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif</h3>
		<div class="grid grid-cols-3 gap-4 mt-6">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🏗️ Création</h4>
				<ul class="text-sm mt-2">
					<li><code>new</code> crée un objet</li>
					<li>Constructeur initialise</li>
					<li><code>this</code> = objet courant</li>
				</ul>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🔒 Visibilité</h4>
				<ul class="text-sm mt-2">
					<li><code>public</code> = partout</li>
					<li><code>private</code> = classe</li>
					<li><code>protected</code> = héritage</li>
				</ul>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">⚠️ Exceptions</h4>
				<ul class="text-sm mt-2">
					<li><code>try/catch</code> = gérer</li>
					<li><code>throw</code> = lancer</li>
					<li><code>finally</code> = toujours</li>
				</ul>
			</div>
		</div>
	</Slide>
</Slide>