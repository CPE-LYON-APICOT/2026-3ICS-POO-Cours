<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import ProgProceduraleSchema from '$lib/Seance1/ProgProceduraleSchema.svelte'   
	import ProgOOSchema from '$lib/Seance1/ProgOOSchema.svelte'
</script>
	
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-invalid-attribute -->
<Slide>
	<Slide><h1>Introduction</h1></Slide>
	
	<!-- ACCROCHE : La question fondamentale -->
	<Slide>
		<h2>
			La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet
		</h2>
		<p data-fragment-index="1" class="fragment">La programmation, c'est manipuler des données...</p>
		<p data-fragment-index="2" class="fragment">
			<i>Comment structurer ces données et les traitements associés ?</i>
		</p>
		<aside class="notes">
			On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet, 
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?
		</aside>
	</Slide>

	<!-- ANNONCE DU PLAN : Les 3 piliers -->
	<Slide>
		<h2>La POO en 3 mots</h2>
		<div class="flex flex-row justify-around items-center text-3xl mt-10">
			<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg">
				<span class="text-6xl mb-4">📦</span>
				<span class="text-important font-bold">RANGER</span>
				<span class="text-xl mt-2 text-gray-400">Organiser le code</span>
			</div>
			<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg">
				<span class="text-6xl mb-4">🔒</span>
				<span class="text-important font-bold">PROTÉGER</span>
				<span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span>
			</div>
			<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg">
				<span class="text-6xl mb-4">🌳</span>
				<span class="text-important font-bold">GÉNÉRALISER</span>
				<span class="text-xl mt-2 text-gray-400">Réutiliser le code</span>
			</div>
		</div>
		<aside class="notes">
			On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. 
			D'abord on range, ensuite on protège, et enfin on généralise.
			Ces 3 piliers sont la base de tout ce qu'on va voir dans ce module.
		</aside>
	</Slide>

	<!-- ============================================ -->
	<!-- PILIER 1 : RANGER -->
	<!-- ============================================ -->
	
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-6xl">📦 RANGER</h2>
		<p class="text-3xl text-gray-400">Premier pilier de la POO</p>
		<aside class="notes">
			On commence par le premier pilier : ranger. C'est le plus intuitif.
		</aside>
	</Slide>

	<Slide>
		<h3>Le problème du code "en vrac"</h3>
		<Code>
			{`
// Des variables partout...
string nomClient = "Jean";
int ageClient = 25;
string emailClient = "jean@mail.com";

string nomProduit = "Ordinateur";
double prixProduit = 999.99;
int stockProduit = 42;

string nomVendeur = "Marie";
string emailVendeur = "marie@shop.com";

// Et des fonctions qui utilisent tout ça...
envoyerFacture(nomClient, emailClient, nomProduit, prixProduit);
notifierVendeur(emailVendeur, nomClient, nomProduit);
`}
		</Code>
		<aside class="notes">
			Regardez ce code. On a des variables partout, mélangées. 
			Rien ne dit que nomClient va avec ageClient et emailClient.
			Quand le code grossit, c'est le chaos. On ne sait plus quelle variable va avec quelle autre.
		</aside>
	</Slide>

	<Slide>
		<h3>La solution : regrouper dans des objets</h3>
		<Code lines="1-5|7-11|13-16|18-20">
			{`
class Client {
    string nom;
    int age;
    string email;
}

class Produit {
    string nom;
    double prix;
    int stock;
}

class Vendeur {
    string nom;
    string email;
}

Client jean = new Client("Jean", 25, "jean@mail.com");
Produit ordi = new Produit("Ordinateur", 999.99, 42);
Vendeur marie = new Vendeur("Marie", "marie@shop.com");
`}
		</Code>
		<aside class="notes">
			Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email.
			Un Produit a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient.
			C'est déjà plus clair, non ?
		</aside>
	</Slide>

	<Slide>
		<div class="grid-cols-2 grid justify-items-center items-start">
			<h3>Programmation procédurale</h3>
			<h3 data-fragment-index="1" class="fragment">Programmation orientée objet</h3>
			<ProgProceduraleSchema />
			<div data-fragment-index="1" class="fragment">
				<ProgOOSchema />
			</div>
		</div>
		<aside class="notes">
			Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements.
			Les fonctions peuvent accéder à n'importe quelle donnée.
			À droite, chaque objet contient SES données ET SES traitements.
			C'est une vraie boîte autonome.
		</aside>
	</Slide>

	<Slide>
		<div class="grid-cols-2 grid justify-items-center items-start">
			<h3>Programmation procédurale</h3>
			<h3>Programmation orientée objet</h3>
			<ul>
				<li>Les données et les traitements sont séparés</li>
				<li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li>
				<li class="fragment">Difficile de savoir "qui fait quoi"</li>
			</ul>
			<ul>
				<li>Les données et les traitements sont regroupés dans un objet</li>
				<li class="fragment">Les méthodes n'accèdent qu'à <span class="text-green-400">leur objet</span></li>
				<li class="fragment">Chaque objet est responsable de lui-même</li>
			</ul>
		</div>
		<p class="fragment font-bold text-accent-200 mt-8">Premier intérêt : le code est mieux organisé</p>
		<aside class="notes">
			En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient vite le bazar.
			En POO, chaque objet est une entité autonome. Il gère ses propres données avec ses propres méthodes.
			C'est le premier bénéfice : on range, on organise.
		</aside>
	</Slide>

	<!-- ============================================ -->
	<!-- PILIER 2 : PROTÉGER -->
	<!-- ============================================ -->

	<Slide data_background_color="#1a1a2e">
		<h2 class="text-6xl">🔒 PROTÉGER</h2>
		<p class="text-3xl text-gray-400">Deuxième pilier de la POO</p>
		<aside class="notes">
			Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger.
			C'est là que la POO devient vraiment puissante.
		</aside>
	</Slide>

	<Slide>
		<h3>Le problème : les erreurs silencieuses</h3>
		<p>En procédural, rien ne vous empêche de faire n'importe quoi...</p>
		<Code class="java">
			{`
string nomPersonne1 = "Jean";
int agePersonne1 = 25;
string nomPersonne2 = "Marie";
int agePersonne2 = 30;

// La fonction attend (nom, age) mais...
void direBonjour(string nom, int valeur) {
    print("Bonjour " + nom + ", vous avez " + valeur + " ans");
}

direBonjour(nomPersonne1, agePersonne1);  // ✅ OK : "Bonjour Jean, vous avez 25 ans"
direBonjour(nomPersonne1, agePersonne2);  // 🐛 Compile... mais BUG !
// "Bonjour Jean, vous avez 30 ans" → C'est l'âge de Marie !
`}
		</Code>
		<aside class="notes">
			Regardez ce code. La fonction direBonjour attend un nom et un âge.
			Mais rien ne m'empêche de lui passer l'âge de Marie à la place de celui de Jean !
			Le code compile, il s'exécute... mais le résultat est faux.
			C'est un bug silencieux, le pire type de bug.
		</aside>
	</Slide>

	<Slide>
		<h3>Le problème empire avec le temps...</h3>
		<Code class="java" lines="1-8|10-15">
			{`
// 6 mois plus tard, le code a grossi...
string nomClient = "Jean";
string nomProduit = "Ordinateur";
string nomVendeur = "Marie";
int ageClient = 25;
int stockProduit = 42;
int ancienneteVendeur = 5;
double prixProduit = 999.99;

// Quelle variable va avec quelle autre ?
// C'est quoi le 2ème paramètre déjà ?
envoyerFacture(nomClient, /* ??? */, prixProduit);
calculerRemise(ageClient, /* ou ancienneteVendeur ? */, prixProduit);
notifierStock(nomProduit, stockProduit, /* emailClient ou emailVendeur ? */);
`}
		</Code>
		<p class="fragment text-red-400 font-bold">Plus le code grossit, plus on se trompe !</p>
		<aside class="notes">
			6 mois plus tard, vous avez 50 variables, 30 fonctions.
			Vous ne savez plus quelle variable va avec quelle autre.
			Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.
			Vous passez des heures à débugger.
		</aside>
	</Slide>

	<Slide>
		<h3>La solution POO : impossible de se tromper</h3>
		<Code class="java" lines="1-11|13-17">
			{`
class Personne {
    string nom;    // Appartient à Personne
    int age;       // Appartient à Personne
    
    void direBonjour() {
        // Utilise UNIQUEMENT les données de CET objet
        print("Bonjour " + nom + ", vous avez " + age + " ans");
        // Impossible d'utiliser une variable extérieure ici !
        // Elle n'existe pas dans Personne
    }
}

Personne jean = new Personne("Jean", 25);
Personne marie = new Personne("Marie", 30);

jean.direBonjour();   // ✅ Utilise jean.nom et jean.age
marie.direBonjour();  // ✅ Utilise marie.nom et marie.age
`}
		</Code>
		<aside class="notes">
			En POO, la méthode direBonjour est DANS l'objet Personne.
			Elle ne prend pas de paramètres, elle utilise directement les données de l'objet.
			Chaque personne a sa propre méthode qui utilise SES données.
			Impossible de mélanger les données de Jean et Marie.
		</aside>
	</Slide>

	<Slide>
		<h3>Comparaison directe</h3>
		<div class="grid-cols-2 grid justify-items-center items-start gap-4">
			<div>
				<h4 class="text-red-400">❌ Procédural</h4>
				<Code class="java">
					{`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`}
				</Code>
			</div>
			<div>
				<h4 class="text-green-400">✅ POO</h4>
				<Code class="java">
					{`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`}
				</Code>
			</div>
		</div>
		<p class="fragment text-accent-200 font-bold text-3xl mt-8">
			Les méthodes ne manipulent que les données de LEUR objet
		</p>
		<aside class="notes">
			C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes différentes.
			En POO, chaque méthode n'accède qu'aux données de son objet.
			Jean utilise les données de Jean, Marie utilise les données de Marie. Impossible de se tromper.
		</aside>
	</Slide>

	<Slide>
		<h3>Exemple complet : avant / après</h3>
		<div class="grid-cols-2 grid justify-items-center items-start">
			<h4>Procédural</h4>
			<h4 class="fragment" data-fragment-index="1">Orienté Objet</h4>
			<Code class="java">
				{`
string nom = "Jean";
int age = 25;
string nom2 = "Pierre";
int age2 = 30;

void direBonjour(string n, int a){
    print("Bonjour " + n 
        + ", vous avez " + a + " ans");
}

direBonjour(nom, age);
direBonjour(nom2, age2);
// direBonjour(nom, age2); // Bug !
`}
			</Code>
			<Code class="java fragment" data-fragment-index="1" lines="1-9|10-13">
				{`
class Personne {
    string nom;
    int age;
    
    void direBonjour(){
        print("Bonjour " + nom 
            + ", vous avez " + age + " ans");
    }
}
Personne p1 = new Personne("Jean", 25);
Personne p2 = new Personne("Pierre", 30);
p1.direBonjour();  // Utilise p1.nom, p1.age
p2.direBonjour();  // Utilise p2.nom, p2.age
`}
			</Code>
		</div>
		<aside class="notes">
			À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux.
			À droite, chaque Personne est un objet autonome. 
			Quand on appelle p1.direBonjour(), c'est TOUJOURS les données de p1 qui sont utilisées.
			Impossible de mélanger.
		</aside>
	</Slide>

	<Slide>
		<h3>Récapitulatif : Ranger + Protéger</h3>
		<div class="flex flex-row justify-around items-start mt-8">
			<div class="p-6 bg-accent-950 rounded-lg">
				<h4 class="text-important">📦 RANGER</h4>
				<ul class="text-2xl">
					<li>Données regroupées par entité</li>
					<li>Code plus lisible</li>
					<li>Plus facile à maintenir</li>
				</ul>
			</div>
			<div class="p-6 bg-accent-950 rounded-lg">
				<h4 class="text-important">🔒 PROTÉGER</h4>
				<ul class="text-2xl">
					<li>Méthodes liées à leurs données</li>
					<li>Impossible de se tromper de paramètre</li>
					<li>Le compilateur vous aide</li>
				</ul>
			</div>
		</div>
		<p class="fragment text-3xl mt-8">Mais ce n'est pas tout...</p>
		<aside class="notes">
			On a vu les deux premiers piliers. On range le code, on le protège des erreurs.
			Mais la POO offre un troisième bénéfice, peut-être le plus puissant : la généralisation.
		</aside>
	</Slide>

	<!-- ============================================ -->
	<!-- PILIER 3 : GÉNÉRALISER -->
	<!-- ============================================ -->

	<Slide data_background_color="#1a1a2e">
		<h2 class="text-6xl">🌳 GÉNÉRALISER</h2>
		<p class="text-3xl text-gray-400">Troisième pilier de la POO</p>
		<aside class="notes">
			Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage, d'abstraction.
			C'est ce qui rend la POO vraiment unique.
		</aside>
	</Slide>

	<Slide>
		<h2>La programmation orientée objet</h2>
		<h3>Qu'est-ce que c'est ?</h3>
		<p>
			La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, 
			c'est-à-dire une manière de programmer, qui repose sur la notion d'objets.
		</p>
		<p class="fragment">
			Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.
		</p>
		<p class="fragment">Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.</p>
		<p class="fragment text-accent-200 font-bold">Il n'est pas obligatoire de programmer en POO !</p>
		<aside class="notes">
			La POO c'est un paradigme, une façon de penser le code.
			L'idée c'est de modéliser le monde réel : des personnes, des voitures, des produits...
			Ce n'est pas obligatoire, mais c'est très puissant quand on sait s'en servir.
		</aside>
	</Slide>

	<Slide>
		<h3>Représenter le monde réel</h3>
		<p class="font-bold text-accent-200">
			Un objet est censé représenter une entité du monde réel.
		</p>
		<p class="fragment" data-fragment-index="2">
			Par exemple, <span data-fragment-index="3" class="fragment highlight-red"
				>un chien, un chat</span
			>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>
		</p>
		<p class="fragment" data-fragment-index="3">
			Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>,
			un <span class="text-blue-500">personnage</span>
		</p>
		<aside class="notes">
			On modélise le monde réel. Un chien, un chat, ce sont des objets.
			Mais on peut aller plus loin : un chien et un chat, c'est un animal.
			Une moto et une voiture, c'est un véhicule.
			C'est ça la généralisation : trouver le concept commun.
		</aside>
	</Slide>

	<Slide>
		<h3>Pourquoi généraliser ?</h3>
		<p>Imaginons que vous codez un jeu vidéo...</p>
		<div class="grid-cols-2 grid gap-8 mt-8">
			<div class="fragment">
				<h4 class="text-red-400">❌ Sans généralisation</h4>
				<Code class="java">
					{`
class Guerrier { 
    void attaquer() {...}
    void seDeplacer() {...}
}
class Mage { 
    void attaquer() {...}
    void seDeplacer() {...}
}
class Archer { 
    void attaquer() {...}
    void seDeplacer() {...}
}
// Code dupliqué partout !
`}
				</Code>
			</div>
			<div class="fragment">
				<h4 class="text-green-400">✅ Avec généralisation</h4>
				<Code class="java">
					{`
class Personnage {
    void seDeplacer() {...}
    // Code commun une seule fois
}
class Guerrier extends Personnage { 
    void attaquer() {...}
}
class Mage extends Personnage { 
    void attaquer() {...}
}
class Archer extends Personnage { 
    void attaquer() {...}
}
`}
				</Code>
			</div>
		</div>
		<aside class="notes">
			Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si c'est la même.
			Avec la généralisation, on met le code commun dans une classe parente.
			Si on change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">La généricité</h3>
		<p>Généralisez vos concepts !</p>

		<div class="tree scale-150">
			<ul>
				<li>
					<a href="#">Animal</a>
					<ul>
						<li>
							<a>Chien</a>
						</li>
						<li>
							<a>Chat</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Véhicule</a>
					<ul>
						<li>
							<a>Voiture</a>
						</li>
						<li>
							<a>Moto</a>
						</li>
						<li class="fragment" data-fragment-index="1">
							<a>Bateau</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Personnage</a>
					<ul>
						<li>
							<a>Ennemi</a>
							<ul class="fragment" data-fragment-index="1">
								<li><a>Monstre</a></li>
								<li><a>Boss</a></li>
							</ul>
						</li>
						<li>
							<a>PNJ</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<aside class="notes">
			On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat.
			Véhicule se décline en Voiture, Moto, et pourquoi pas Bateau demain.
			Personnage se décline en Ennemi et PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss.
			C'est ce qu'on appelle l'héritage : les enfants héritent des caractéristiques du parent.
		</aside>
	</Slide>

	<Slide>
		<h3>L'héritage : le cœur de la POO</h3>
		<p>Quand <code>Voiture</code> hérite de <code>Véhicule</code> :</p>
		<ul class="text-2xl">
			<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li>
			<li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li>
			<li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li>
			<li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>
		</ul>
		<p class="fragment text-accent-200 font-bold mt-8">
			Écrivez le code une fois, réutilisez-le partout !
		</p>
		<aside class="notes">
			L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en bénéficient.
			Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont automatiquement.
			C'est un gain de temps énorme, et surtout, moins de bugs car moins de code dupliqué.
		</aside>
	</Slide>
	<Slide>
		<h3 class="uppercase">L'abstraction : penser au futur</h3>
		<p>
			En POO, généraliser s'appelle <span class="text-important"
				>abstraire, faire une abstraction</span
			>
		</p>
		<p class="fragment">C'est anticiper les évolutions de votre code.</p>
		<aside class="notes">
			Abstraire, c'est trouver le concept commun entre plusieurs choses.
			Mais c'est aussi penser au futur : qu'est-ce que mon client va me demander demain ?
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Exemple concret : location de voiture</h3>
		<p class="text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg">
			<span class="text-important">Situation :</span> On vous demande de coder un système de location de voiture.<br/><br/>
			<span class="fragment">📅 <b>6 mois plus tard :</b> "On aimerait aussi proposer des motos !"</span><br/>
			<span class="fragment">📅 <b>1 an plus tard :</b> "Et des vélos électriques !"</span><br/>
			<span class="fragment">📅 <b>2 ans plus tard :</b> "Et des accessoires : sièges auto, porte-vélos, chaînes neige..."</span>
		</p>
		<p class="fragment text-accent-200 font-bold mt-6">
			Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !
		</p>
		<aside class="notes">
			C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, 
			ça va évoluer. Motos, vélos, accessoires...
			Si vous codez "Voiture" partout, vous allez devoir tout refaire.
			Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Le piège du code non généralisé</h3>
		<Code class="java">
			{`
// Code naïf : tout est spécifique à Voiture
class Voiture {
    double prixJour;
    boolean disponible;
    int km;
    String immatriculation;
    int nbPortes;      // Spécifique Voiture
    int nbPlaces;      // Spécifique Voiture
}

// Gestion de location
void louerVoiture(Voiture v, Client c) {...}
void retournerVoiture(Voiture v) {...}
double calculerPrixVoiture(Voiture v, int nbJours) {...}
`}
		</Code>
		<p class="fragment text-red-400 font-bold">
			Demain on ajoute les motos... on doit tout dupliquer ? 😱
		</p>
		<aside class="notes">
			Voilà le piège. On a codé tout autour de Voiture.
			Si on veut ajouter Moto, il faut créer louerMoto, retournerMoto, calculerPrixMoto...
			C'est du code dupliqué, c'est des bugs, c'est un cauchemar.
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Étape 1 : Créer la hiérarchie Véhicule</h3>
		<p>On commence par regrouper Voiture et Moto sous Véhicule</p>
		<PlantUml>
			{`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ String immatriculation
				+ void louer()
				+ void retourner()
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto
			@enduml
			`}
		</PlantUml>
		<p class="fragment text-accent-200">
			<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...
		</p>
		<aside class="notes">
			Première étape : on crée Véhicule qui contient tout ce qui est commun.
			Voiture et Moto héritent de Véhicule. 
			Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour, disponible, km, immatriculation.
			Elle a aussi les méthodes louer() et retourner() sans les recoder.
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Étape 2 : Ajouter les Accessoires</h3>
		<p>Les accessoires ont aussi un prix et une disponibilité...</p>
		<div class="flex flex-row justify-center items-start gap-8">
			<PlantUml>
				{`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ String immatriculation
			}
			class Voiture {
				+ int nbPortes
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto
			@enduml
			`}
			</PlantUml>
			<PlantUml>
				{`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Accessoire {
				+ double prixJour
				+ boolean disponible
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			@enduml
			`}
			</PlantUml>
		</div>
		<p class="fragment text-red-400 font-bold mt-4">
			⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !
		</p>
		<aside class="notes">
			On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire.
			Mais attendez... prixJour et disponible sont dans Véhicule ET dans Accessoire.
			C'est de la duplication ! On peut faire mieux.
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Étape 3 : Abstraire encore plus avec Louable</h3>
		<p>Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span></p>
		<PlantUml>
			{`
			@startuml
			!theme crt-green
			skinparam backgroundColor transparent
			abstract class Louable{
				+ double prixJour
				+ boolean disponible
				+ void louer()
				+ void retourner()
				+ double calculerPrix(int nbJours)
			}
			abstract class Vehicule extends Louable{		
				+ int km
				+ String immatriculation
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto

			abstract class Accessoire extends Louable {
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			
			@enduml
			`}
		</PlantUml>
		<aside class="notes">
			On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner, calculerPrix.
			Véhicule hérite de Louable, et Accessoire aussi.
			Du coup Voiture hérite de Véhicule qui hérite de Louable : Voiture a TOUT !
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Visualisons la chaîne d'héritage</h3>
		<p>Une <b>Voiture</b> c'est quoi maintenant ?</p>
		<div class="flex flex-col items-center mt-8 text-2xl">
			<div class="fragment p-4 bg-green-950 rounded-lg mb-2">
				<b>Voiture</b> hérite de <b>Véhicule</b>
			</div>
			<div class="fragment text-4xl">↓</div>
			<div class="fragment p-4 bg-blue-950 rounded-lg mb-2">
				<b>Véhicule</b> hérite de <b>Louable</b>
			</div>
			<div class="fragment text-4xl">↓</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes, nbPlaces
			</div>
		</div>
		<p class="fragment text-accent-200 font-bold mt-6">
			On n'a codé louer() qu'une seule fois, dans Louable !
		</p>
		<aside class="notes">
			Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable.
			Donc Voiture a tout : les attributs de Louable, plus ceux de Véhicule, plus les siens.
			Et surtout, la méthode louer() n'est codée qu'une seule fois, dans Louable.
			Voiture, Moto, SiègeAuto, PorteVelo... tous peuvent être loués avec le même code !
		</aside>
	</Slide>

	<Slide>
		<h3 class="uppercase">Le code devient simple</h3>
		<Code class="java">
			{`
// Une seule méthode pour TOUT louer !
void louer(Louable item, Client c) {
    item.louer();
    // Fonctionne pour Voiture, Moto, SiegeAuto, PorteVelo...
}

// Ajouter un vélo électrique demain ?
class VeloElectrique extends Vehicule {
    int autonomieKm;
}
// C'est tout ! Il hérite automatiquement de louer(), retourner()...
`}
		</Code>
		<p class="fragment text-green-400 font-bold">
			✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code
		</p>
		<aside class="notes">
			Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout.
			Demain on ajoute VeloElectrique ? 3 lignes de code. Il hérite de tout le reste.
			C'est ça la vraie puissance de la POO : écrire moins, faire plus.
		</aside>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3 class="uppercase">Le refactoring</h3>
		<p>
			L'opération que l'on vient de voir s'appelle un <span class="text-important">refactoring</span>
		</p>
		<p class="fragment">C'est réorganiser le code sans changer son comportement.</p>
		<p class="fragment">
			Si vous l'aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c'est une <u>certitude</u> !
		</p>
		<aside class="notes">
			Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait.
			C'est toujours plus facile de bien faire dès le début que de réparer après.
			Un code bien conçu, c'est des heures de debug en moins.
		</aside>
	</Slide>

	<Slide data_background_color="#00353F">
		<h3 class="uppercase">BUILD vs RUN</h3>
		<p class="text-important">
			Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO
		</p>
		<p class="fragment">...mais la maintenance (RUN) coûte moins cher !</p>
		<div class="fragment grid grid-cols-2 gap-8 mt-8">
			<div class="p-4 bg-red-950 rounded-lg">
				<h4 class="text-red-400">❌ Code vite fait</h4>
				<ul class="text-xl">
					<li>Rapide à écrire</li>
					<li>Difficile à maintenir</li>
					<li>Bugs fréquents</li>
					<li>Évolutions coûteuses</li>
				</ul>
			</div>
			<div class="p-4 bg-green-950 rounded-lg">
				<h4 class="text-green-400">✅ Code bien conçu</h4>
				<ul class="text-xl">
					<li>Plus long à écrire</li>
					<li>Facile à maintenir</li>
					<li>Moins de bugs</li>
					<li>Évolutions simples</li>
				</ul>
			</div>
		</div>
		<aside class="notes">
			En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance).
			Un code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN.
			Et le RUN, c'est souvent 80% du coût total d'un projet !
		</aside>
	</Slide>

	<Slide data_background_color="#00353F">
		<h3 class="uppercase">L'équilibre à trouver</h3>
		<p>Un <i>bon</i> ingénieur logiciel sait jusqu'à quel niveau il convient d'abstraire</p>
		<ul class="mt-8">
			<li class="fragment">❌ <b>Pas assez d'abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li>
			<li class="fragment">❌ <b>Trop d'abstraction :</b> votre client paie pour du code qu'il n'utilisera jamais</li>
		</ul>
		<p class="fragment mt-8">
			En entreprise, tout est question d'équilibre et vient avec l'expérience.
		</p>
		<aside class="notes">
			C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles.
			Ça vient avec l'expérience, avec les projets, avec les erreurs qu'on fait.
		</aside>
	</Slide>

	<Slide data_background_color="#00353F">
		<h3 class="uppercase">Dans ce module</h3>
		<p class="text-important text-4xl">
			Faites le plus de zèle possible, exagérez !
		</p>
		<p class="fragment mt-8 text-2xl">
			C'est en allant trop loin qu'on apprend où sont les limites.
		</p>
		<p class="fragment text-2xl">
			Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.
		</p>
		<aside class="notes">
			Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout.
			C'est comme ça qu'on apprend où sont les limites.
			En entreprise, vous aurez des contraintes de temps, de budget. Là, vous apprendrez à doser.
			Ici, c'est le moment d'expérimenter.
		</aside>
	</Slide>

	<!-- ============================================ -->
	<!-- CONCLUSION -->
	<!-- ============================================ -->

	<Slide>
		<h2>Récapitulatif</h2>
		<div class="flex flex-row justify-around items-start mt-8">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">📦 RANGER</h4>
				<p class="text-xl">Données + méthodes<br/>dans un même objet</p>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🔒 PROTÉGER</h4>
				<p class="text-xl">Chaque méthode n'accède<br/>qu'à son objet</p>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🌳 GÉNÉRALISER</h4>
				<p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p>
			</div>
		</div>
		<aside class="notes">
			On récapitule. La POO c'est 3 piliers.
			Ranger : on met ensemble ce qui va ensemble.
			Protéger : chaque méthode ne touche qu'à son objet, le compilateur vous aide.
			Généraliser : on écrit le code une fois, on le réutilise partout grâce à l'héritage.
		</aside>
	</Slide>

	<Slide>
		<h3>La POO, c'est quoi au final ?</h3>
		<p class="fragment">
			Vous venez d'être confronté aux concepts fondamentaux de la POO :
		</p>
		<ul class="fragment text-2xl mt-4">
			<li><span class="text-important">L'encapsulation</span> : ranger et protéger les données</li>
			<li><span class="text-important">L'abstraction</span> : généraliser les concepts</li>
			<li><span class="text-important">L'héritage</span> : réutiliser le code des parents</li>
		</ul>
		<p class="fragment mt-8">Nous allons voir ces concepts en détail dans les chapitres suivants.</p>
		<aside class="notes">
			On a vu les bases. Encapsulation, abstraction, héritage.
			Ce sont les piliers de la POO, et on va les approfondir tout au long du module.
			Chaque chapitre va détailler un de ces concepts.
		</aside>
	</Slide>

	<Slide>
		<h3>Retenez ceci</h3>
		<p>
			La POO est un <span class="text-important">"outil"</span>. 
		</p>
		<p class="fragment">
			Si vous faites du Java, même en codant mal, vous faites de la POO 
			compte tenu de la nature du langage.
		</p>
		<p class="fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg">
			Si la programmation n'est qu'une suite de blocs de code tels des <b>légos</b>, 
			la POO, c'est fabriquer des blocs <span class="text-important">intelligemment</span> 
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.
		</p>
		<aside class="notes">
			La POO c'est un outil, pas une obligation. Mais c'est un outil puissant.
			En Java, vous faites de la POO que vous le vouliez ou non, c'est la nature du langage.
			L'idée c'est de fabriquer des briques réutilisables. Comme des légos bien conçus.
			Une brique "Véhicule" peut servir pour une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.
		</aside>
	</Slide>

	<Slide>
		<h2>À vous de jouer !</h2>
		<p class="text-3xl mt-8">Dans les prochains chapitres, nous allons :</p>
		<ul class="text-2xl mt-4">
			<li class="fragment">📦 Approfondir l'<b>encapsulation</b> et la visibilité</li>
			<li class="fragment">🔗 Maîtriser l'<b>héritage</b> et le polymorphisme</li>
			<li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li>
			<li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>
		</ul>
		<aside class="notes">
			C'est parti pour la suite ! On va approfondir chaque concept.
			L'encapsulation, l'héritage, les interfaces, et même les Design Patterns.
			À la fin du module, vous saurez concevoir du code propre, évolutif, maintenable.
		</aside>
	</Slide>
</Slide>