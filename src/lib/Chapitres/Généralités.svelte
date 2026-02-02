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

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif</h3>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">📐 Classes et Objets</h4>
				<ul class="text-sm mt-2">
					<li>Une classe = un plan</li>
					<li>Un objet = une instance</li>
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
		</div>
		<p class="fragment mt-8 text-accent-200 text-xl">
			🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l'encapsulation !
		</p>
	</Slide>
</Slide>