<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>
<Slide>
	<h3>Généralités sur la POO</h3>

	<!-- INTRODUCTION -->
	<Slide>
		<h3>Représenter le monde réel</h3>
		<p>La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.</p>
		<div class="grid grid-cols-2 gap-6 mt-8">
			<div class="fragment">
				<h4 class="text-accent-200">🏢 En entreprise</h4>
				<ul class="text-xl">
					<li>Un <b>Client</b></li>
					<li>Une <b>Facture</b></li>
					<li>Une <b>Transaction</b></li>
					<li>Un <b>Produit</b></li>
				</ul>
			</div>
			<div class="fragment">
				<h4 class="text-accent-200">🎮 Dans un jeu</h4>
				<ul class="text-xl">
					<li>Un <b>Joueur</b></li>
					<li>Un <b>Ennemi</b></li>
					<li>Une <b>Arme</b></li>
					<li>Un <b>Niveau</b></li>
				</ul>
			</div>
		</div>
		<p class="fragment mt-8 text-important font-bold">
			Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.
		</p>
		<aside class="notes">
			La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.
		</aside>
	</Slide>

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
		<h3>Exemple concret : un Client</h3>
		<div class="flex flex-row gap-8 items-center">
			<div class="flex-1">
				<h4 class="text-accent-200">Dans le monde réel</h4>
				<ul class="text-xl">
					<li>Nom, prénom</li>
					<li>Email, téléphone</li>
					<li>Historique d'achats</li>
					<li>Peut passer commande</li>
					<li>Peut consulter ses factures</li>
				</ul>
			</div>
			<div class="flex-1 fragment">
				<h4 class="text-accent-200">En POO</h4>
				<Code>
{`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`}
				</Code>
			</div>
		</div>
		<p class="fragment mt-6 text-important">
			💡 La classe modélise le <b>concept</b>, l'objet représente une <b>instance concrète</b>.
		</p>
		<aside class="notes">
			C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.
			C'est là toute la puissance de la POO : on parle le même langage que le métier.
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.
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
		<aside class="notes">
			Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.
		</aside>
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
		<aside class="notes">
			En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.
		</aside>
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
		<aside class="notes">
			C'est une convention très courante : donner le même nom au paramètre et à l'attribut.
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.
		</aside>
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
		<aside class="notes">
			C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.
		</aside>
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
		<aside class="notes">
			C'est le "constructor chaining". Très utile pour éviter la duplication de code.
			Le this() doit être la première instruction du constructeur, comme super().
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.
		</aside>
	</Slide>

	<!-- RÉFÉRENCES ET NULL -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Les références en Java</h2>
		<p class="text-2xl text-gray-400">Comprendre ce que contient vraiment une variable</p>
		<aside class="notes">
			Avant de continuer, il faut comprendre un concept fondamental.
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.
			C'est comme une adresse postale vs la maison elle-même.
		</aside>
	</Slide>

	<Slide>
		<h3>Une variable = une référence</h3>
		<p>Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?</p>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="fragment">
				<h4 class="text-accent-200">📍 La variable</h4>
				<p class="text-xl">Contient une <b>adresse mémoire</b></p>
				<p class="text-sm text-gray-400">(comme un numéro de casier)</p>
			</div>
			<div class="fragment">
				<h4 class="text-accent-200">📦 L'objet</h4>
				<p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p>
				<p class="text-sm text-gray-400">(le contenu du casier)</p>
			</div>
		</div>
		<Code class="fragment mt-6">
{`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 😱
`}
		</Code>
		<aside class="notes">
			C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.
		</aside>
	</Slide>

	<Slide>
		<h3>La valeur spéciale : null</h3>
		<p>Une variable peut ne pointer vers <b>rien</b>. C'est la valeur <code class="text-important">null</code>.</p>
		<Code>
{`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`}
		</Code>
		<p class="fragment mt-6 text-red-400 font-bold">
			⚠️ <code>null</code> signifie "absence d'objet". Ce n'est pas un objet vide !
		</p>
		<aside class="notes">
			Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.
		</aside>
	</Slide>

	<Slide>
		<h3>Le bug le plus fréquent : NullPointerException</h3>
		<p>Si vous appelez une méthode sur <code>null</code>... 💥</p>
		<Code>
{`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`}
		</Code>
		<div class="fragment mt-6">
			<p class="text-green-400 font-bold">✅ Toujours vérifier avant d'utiliser :</p>
			<Code>
{`
if (personne != null) {
    System.out.println(personne.getNom());
}
`}
			</Code>
		</div>
		<aside class="notes">
			C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.
		</aside>
	</Slide>

	<Slide>
		<h3>Bonne pratique : programmation défensive</h3>
		<Code>
{`
public void afficherClient(Client client) {
    // ❌ Risqué
    System.out.println(client.getNom());
    
    // ✅ Défensif
    if (client == null) {
        System.out.println("Aucun client");
        return;
    }
    System.out.println(client.getNom());
}
`}
		</Code>
		<p class="fragment mt-4 text-accent-200">
			💡 En entreprise, beaucoup d'erreurs viennent de <code>null</code> non géré.
		</p>
		<aside class="notes">
			C'est la base de la "programmation défensive". Ne faites jamais confiance aux données entrantes.
			Les frameworks modernes (Spring) peuvent injecter @NonNull pour éviter ça.
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.
		</aside>
	</Slide>

	<!-- COMPARAISON D'OBJETS -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Comparer des objets</h2>
		<p class="text-2xl text-gray-400">== vs equals() : le piège classique</p>
		<aside class="notes">
			Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.
		</aside>
	</Slide>

	<Slide>
		<h3>Le piège de ==</h3>
		<Code>
{`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a == b);  // false ! 😱
`}
		</Code>
		<p class="fragment mt-6">
			<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !
		</p>
		<PlantUml className="fragment">
{`
@startuml
object "a" as a
object "b" as b
object "String: Bonjour" as s1
object "String: Bonjour" as s2

a --> s1 : référence
b --> s2 : référence
@enduml
`}
		</PlantUml>
		<aside class="notes">
			a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.
		</aside>
	</Slide>

	<Slide>
		<h3>La solution : equals()</h3>
		<p>Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.</p>
		<Code>
{`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`}
		</Code>
		<div class="fragment mt-6 grid grid-cols-2 gap-4">
			<div class="p-4 bg-red-900/30 rounded-lg">
				<h4 class="text-red-400">== (double égal)</h4>
				<p class="text-sm">Compare les <b>références</b></p>
				<p class="text-xs text-gray-400">"Est-ce le même objet ?"</p>
			</div>
			<div class="p-4 bg-green-900/30 rounded-lg">
				<h4 class="text-green-400">equals()</h4>
				<p class="text-sm">Compare le <b>contenu</b></p>
				<p class="text-xs text-gray-400">"Ont-ils la même valeur ?"</p>
			</div>
		</div>
		<aside class="notes">
			C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.
		</aside>
	</Slide>

	<Slide>
		<h3>⚠️ Attention à null avec equals()</h3>
		<Code>
{`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`}
		</Code>
		<p class="fragment mt-6 text-accent-200 font-bold">
			💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !
		</p>
		<Code class="fragment">
{`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`}
		</Code>
		<aside class="notes">
			C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.
		</aside>
	</Slide>

	<Slide>
		<h3>Récapitulatif : comparaisons</h3>
		<table class="text-xl">
			<thead>
				<tr>
					<th class="p-3">Type</th>
					<th class="p-3">Opérateur</th>
					<th class="p-3">Exemple</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="p-3">Primitifs (int, double...)</td>
					<td class="p-3"><code>==</code></td>
					<td class="p-3"><code>age == 25</code></td>
				</tr>
				<tr>
					<td class="p-3">Objets (contenu)</td>
					<td class="p-3"><code>equals()</code></td>
					<td class="p-3"><code>nom.equals("Jean")</code></td>
				</tr>
				<tr>
					<td class="p-3">Objets (même instance)</td>
					<td class="p-3"><code>==</code></td>
					<td class="p-3"><code>obj1 == obj2</code></td>
				</tr>
				<tr>
					<td class="p-3">Vérifier null</td>
					<td class="p-3"><code>==</code></td>
					<td class="p-3"><code>obj == null</code></td>
				</tr>
			</tbody>
		</table>
		<aside class="notes">
			Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.
			On verra plus tard comment redéfinir equals() pour vos propres classes.
		</aside>
	</Slide>

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif</h3>
		<div class="grid grid-cols-3 gap-4 mt-6">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">📐 Classes</h4>
				<ul class="text-sm mt-2">
					<li>Classe = plan</li>
					<li>Objet = instance</li>
					<li>Attributs + méthodes</li>
				</ul>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🏗️ Création</h4>
				<ul class="text-sm mt-2">
					<li><code>new</code> crée un objet</li>
					<li>Constructeur initialise</li>
					<li><code>this</code> = objet courant</li>
				</ul>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🔗 Références</h4>
				<ul class="text-sm mt-2">
					<li>Variable = référence</li>
					<li><code>null</code> = rien</li>
					<li><code>equals()</code> pour comparer</li>
				</ul>
			</div>
		</div>
		<p class="fragment mt-8 text-accent-200 text-xl">
			🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l'encapsulation !
		</p>
		<aside class="notes">
			Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.
			On passe à l'encapsulation pour apprendre à protéger nos données.
		</aside>
	</Slide>
</Slide>