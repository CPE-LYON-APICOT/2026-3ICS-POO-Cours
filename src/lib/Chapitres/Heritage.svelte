<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>
<Slide>
	<h3>L'héritage</h3>
	<Slide>
		<p>
			En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.
		</p>
	</Slide>
	<Slide>
		<p>
			La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.
		</p>
	</Slide>
	<Slide>
		<p>
			La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.
		</p>
		<p>La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.</p>
	</Slide>

	<Slide>
		<h3>Visualisons l'héritage</h3>
		<PlantUml>
{`
@startuml
class Animal {
  + crier()
}

class Chien extends Animal {
  + inscritLOF: boolean
  + crier()
}

class Chat extends Animal {
  + crier()
}
@enduml
`}
		</PlantUml>
		<p class="fragment">
			La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.
		</p>
		<aside class="notes">
			C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.
			Chien et Chat sont des spécialisations d'Animal.
		</aside>
	</Slide>

	<Slide>
		<h3>En code Java</h3>
		<Code>
{`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`}
		</Code>
		<p>
			On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d'une classe.
		</p>
		<aside class="notes">
			Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.
		</aside>
	</Slide>

	<Slide>
		<p>
			La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi
			redéfinir les méthodes de la classe mère.
		</p>
		<p>Redéfinir une méthode s'appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).</p>
	</Slide>

	<Slide>
		<h3>Pourquoi redéfinir une méthode ?</h3>
		<ul>
			<li class="fragment">Adapter le comportement de la méthode à la classe fille</li>
			<li class="fragment">Spécialiser un comportement générique</li>
		</ul>
		<div class="fragment mt-8">
			<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>
		</div>
	</Slide>

	<Slide>
		<h3>La redéfinition en pratique</h3>
		<Code lines="1-5|7-11">
{`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    @Override
    void crier() {
        System.out.println("Wouaf wouaf");
    }
}
`}
		</Code>
		<aside class="notes">
			Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.
		</aside>
	</Slide>

	<Slide>
		<h3>L'annotation @Override</h3>
		<p>Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d'une redéfinition.</p>
		<div class="grid grid-cols-2 gap-8 mt-6">
			<div>
				<h4 class="text-red-400">❌ Sans @Override</h4>
				<Code class="language-java">
{`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`}
				</Code>
			</div>
			<div>
				<h4 class="text-green-400">✅ Avec @Override</h4>
				<Code class="language-java">
{`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`}
				</Code>
			</div>
		</div>
		<aside class="notes">
			Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.
		</aside>
	</Slide>

	<Slide>
		<h3>Appeler la méthode du parent : super</h3>
		<p>On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.</p>
		<Code lines="7-11">
{`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    @Override
    void crier() {
        super.crier();  // Appelle Animal.crier()
        System.out.println("Wouaf wouaf");
    }
}
// Affiche : "Je suis un animal" puis "Wouaf wouaf"
`}
		</Code>
		<aside class="notes">
			Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.
		</aside>
	</Slide>

	<Slide>
		<h3>Le constructeur et super()</h3>
		<p>Le constructeur de la classe fille doit appeler celui de la classe mère.</p>
		<Code lines="1-6|8-13">
{`
class Animal {
    String nom;
    
    Animal(String nom) {
        this.nom = nom;
    }
}

class Chien extends Animal {
    boolean inscritLOF;
    
    Chien(String nom, boolean inscritLOF) {
        super(nom);  // Appelle Animal(nom)
        this.inscritLOF = inscritLOF;
    }
}
`}
		</Code>
		<p class="fragment text-accent-200">
			<code>super()</code> doit être la <b>première instruction</b> du constructeur !
		</p>
		<aside class="notes">
			C'est obligatoire. Le parent doit être construit avant l'enfant.
			Si vous oubliez super(), Java appelle super() sans argument par défaut.
		</aside>
	</Slide>

	<!-- CLASSES ABSTRAITES -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Les classes abstraites</h2>
		<p class="text-2xl text-gray-400">Quand on ne peut pas tout définir...</p>
	</Slide>

	<Slide>
		<h3>Qu'est-ce qu'une classe abstraite ?</h3>
		<p>
			Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.
		</p>
		<p class="fragment">
			Elle est destinée à être héritée par d'autres classes.
		</p>
		<Code class="fragment">
{`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`}
		</Code>
	</Slide>

	<Slide>
		<h3>Pourquoi utiliser des classes abstraites ?</h3>
		<ul>
			<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li>
			<li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li>
			<li class="fragment">Parce qu'il n'a parfois <b>aucun sens</b> d'instancier une classe</li>
		</ul>
		<p class="fragment mt-8 text-accent-200">
			🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !
		</p>
	</Slide>

	<Slide>
		<h3>Exemple : les formes géométriques</h3>
		<PlantUml>
{`
@startuml
abstract class Forme {
  {abstract} + calculerSurface(): double
}

class Cercle extends Forme {
  - rayon: double
  + calculerSurface(): double
}

class Rectangle extends Forme {
  - largeur: double
  - hauteur: double
  + calculerSurface(): double
}
@enduml
`}
		</PlantUml>
		<aside class="notes">
			Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.
		</aside>
	</Slide>

	<Slide>
		<h3>En code Java</h3>
		<Code>
{`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`}
		</Code>
		<div class="flex flex-row gap-4 mt-4">
			<Code class="language-java">
{`
class Cercle extends Forme {
    double rayon;

    Cercle(double rayon) {
        this.rayon = rayon;
    }

    @Override
    double calculerSurface() {
        return Math.PI * rayon * rayon;
    }
}
`}
			</Code>
			<Code class="language-java">
{`
class Rectangle extends Forme {
    double largeur, hauteur;

    Rectangle(double l, double h) {
        this.largeur = l;
        this.hauteur = h;
    }

    @Override
    double calculerSurface() {
        return largeur * hauteur;
    }
}
`}
			</Code>
		</div>
	</Slide>

	<Slide>
		<h3>Ce qu'il faut retenir</h3>
		<p>
			La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d'une forme générique.
		</p>
		<p class="fragment">
			Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c'est le contrat.
		</p>
		<p class="fragment mt-8 text-red-400">
			❌ <code>new Forme()</code> → Erreur !
		</p>
		<p class="fragment text-green-400">
			✅ <code>new Cercle(5.0)</code> → OK
		</p>
	</Slide>

	<!-- ANTI-PATTERN -->
	<Slide data_background_color="#3d1a1a">
		<h2 class="text-5xl">⚠️ Quand NE PAS hériter</h2>
		<p class="text-2xl text-gray-400">L'erreur classique du débutant</p>
	</Slide>

	<Slide>
		<h3>Le piège de l'héritage abusif</h3>
		<p>L'héritage n'est pas toujours la bonne solution !</p>
		<Code class="language-java">
{`
// ❌ MAUVAISE IDÉE !
class Pile extends ArrayList {
    void empiler(Object o) { add(o); }
    Object depiler() { return remove(size() - 1); }
}

// Problème : on hérite de TOUT ArrayList !
Pile p = new Pile();
p.empiler("A");
p.add(0, "B");  // 😱 On peut ajouter n'importe où !
p.clear();      // 😱 On peut tout supprimer !
`}
		</Code>
		<p class="fragment text-red-400 font-bold">
			Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !
		</p>
	</Slide>

	<Slide>
		<h3>La bonne approche : composition</h3>
		<Code class="language-java">
{`
// ✅ BONNE IDÉE : composition
class Pile {
    private ArrayList elements = new ArrayList();
    
    void empiler(Object o) { 
        elements.add(o); 
    }
    
    Object depiler() { 
        return elements.remove(elements.size() - 1); 
    }
    
    // Pas d'accès direct à elements !
}
`}
		</Code>
		<p class="fragment text-green-400 font-bold">
			On expose uniquement ce qui a du sens pour une Pile.
		</p>
	</Slide>

	<Slide>
		<h3>Comment choisir ?</h3>
		<div class="text-2xl mt-8">
			<p class="fragment">🤔 Posez-vous la question :</p>
			<p class="fragment mt-4 text-3xl">
				"Est-ce qu'un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?"
			</p>
			<div class="fragment mt-8">
				<p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p>
				<p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p>
				<p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p>
				<p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p>
			</div>
		</div>
		<aside class="notes">
			C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.
			On verra la composition dans le prochain chapitre.
		</aside>
	</Slide>

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif : les mots-clés</h3>
		<table class="text-xl">
			<tr>
				<td class="p-4"><code class="text-important">extends</code></td>
				<td class="p-4">Hériter d'une classe</td>
			</tr>
			<tr>
				<td class="p-4"><code class="text-important">super</code></td>
				<td class="p-4">Accéder à la classe mère</td>
			</tr>
			<tr>
				<td class="p-4"><code class="text-important">super()</code></td>
				<td class="p-4">Appeler le constructeur parent</td>
			</tr>
			<tr>
				<td class="p-4"><code class="text-important">@Override</code></td>
				<td class="p-4">Redéfinir une méthode (annotation)</td>
			</tr>
			<tr>
				<td class="p-4"><code class="text-important">abstract</code></td>
				<td class="p-4">Classe/méthode non instanciable</td>
			</tr>
		</table>
	</Slide>
</Slide>