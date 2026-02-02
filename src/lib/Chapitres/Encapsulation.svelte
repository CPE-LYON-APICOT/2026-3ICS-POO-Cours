<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import Composition from './Composition.svelte'
	import PlantUml from '$lib/deck/plantuml.svelte'
</script>

<Slide>
	<h3>Encapsulation</h3>
	<Slide>
		<p>
			L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour interagir avec cette classe.
		</p>
	</Slide>
	<Slide>
		<p>
			L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également le code plus modulaire et plus facile à maintenir.
		</p>
	</Slide>
	<Slide>
		<p>
			Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la visibilité des attributs et des méthodes d'une classe.
		</p>
		<ul>
			<li><code>public</code> : accessible depuis n'importe où</li>
			<li><code>private</code> : accessible uniquement depuis la classe elle-même</li>
			<li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>
		</ul>
	</Slide>
	<Slide>
		<p>Voici un exemple d'encapsulation en Java :</p>
		<Code>
			{`
    class Personne {
        private String nom;
        private int age;

        public String getNom() {
            return nom;
        }

        public void setNom(String nom) {
            this.nom = nom;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
    `}
		</Code>
	</Slide>
	<Slide>
		<p>
			Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent pas être accédés directement depuis l'extérieur.
			On utilise des méthodes publiques, <code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y accéder et les modifier.
		</p>
		<p class="text-important">
			Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.
		</p>
	</Slide>
	<Slide>
		<p>
			L'encapsulation permet de contrôler l'accès aux données et de s'assurer qu'elles sont manipulées de manière cohérente.
			Par exemple, on peut ajouter des vérifications dans les méthodes <code>set</code> pour s'assurer que les valeurs sont valides.
		</p>
		<Code>
			{`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `}
		</Code>
	</Slide>
	<Slide>
		<p>
			L'utilisation du modificateur <code>protected</code> permet aux classes dérivées d'accéder aux attributs et méthodes de la classe parente.
			Cela est utile lorsque l'on souhaite permettre à des sous-classes d'utiliser ou de modifier des données tout en les protégeant de l'accès direct extérieur.
		</p>
		</Slide>
		<Slide>
		<Code>
			{`
    class Animal {
        protected String nom;

        public Animal(String nom) {
            this.nom = nom;
        }
    }

    class Chien extends Animal {
        public Chien(String nom) {
            super(nom);
        }

        public void aboyer() {
            System.out.println(nom + " aboie !");
        }
    }
    `}
		</Code>
		<p>
			Dans cet exemple, l'attribut <code>nom</code> est protégé, ce qui permet à la classe <code>Chien</code> d'y accéder dans sa méthode <code>aboyer</code>.
		</p>
	</Slide>
	<Slide>
		<p>
			Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou critiques,
			garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.
		</p>
		<Code>
			{`
    class CompteBancaire {
        private double solde;
        public double getSolde() {
            return solde;
        }
        public void deposer(double montant) {
            if (montant > 0) {
                solde += montant;
            }
        }
        public void retirer(double montant) {
            if (montant > 0 && montant <= solde) {
                solde -= montant;
            }
        }
    }
    `}
		</Code>
		<p class="smaller">
			Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code> et <code>retirer</code>, lesquelles effectuent des vérifications.
		</p>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3>Verbosité</h3>
		<p>
			Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long et plus complexe que d'autres langages.
		</p>
		<p>
			Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et mutateurs.
		</p>
	</Slide>
	<Slide data_background_color="#00353F">
		<p>
			D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :
		</p>
		<div class="flex flex-row">
			<Code>
				{`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `}
			</Code>
			<Code>
				{`
        // Kotlin
        class Personne {
            var nom: String = ""
                private set
            var age: Int = 0
            var taille: Int = 0
                set(value) {
                    field = value
                }
        }
                `}
			</Code>
		</div>
        <p>
			En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il faut le faire.
		</p>
	</Slide>
    <Slide>
        <h3>Maintenance</h3>
        <p>
			En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre code.
			Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50 endroits différents.
			Si vous souhaitez désormais enregistrer chaque modification, vous devrez intervenir à ces 50 endroits.
		</p>
    <Code>
        {`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `}
    </Code>
    </Slide>

	<!-- TRANSITION VERS L'HÉRITAGE -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Et maintenant ?</h2>
		<p class="text-2xl text-gray-400">Vers la généralisation et l'héritage</p>
	</Slide>

	<Slide>
		<h3>Le problème de la duplication</h3>
		<p>Imaginez que vous devez modéliser plusieurs types de comptes bancaires :</p>
		<div class="grid grid-cols-2 gap-4 mt-6">
			<Code class="language-java">
{`
class CompteCourant {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`}
			</Code>
			<Code class="language-java">
{`
class CompteEpargne {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`}
			</Code>
		</div>
		<p class="fragment text-red-400 mt-4 font-bold">
			😱 Beaucoup de code dupliqué !
		</p>
	</Slide>

	<Slide>
		<h3>Généraliser les concepts</h3>
		<p>En observant les classes, on remarque des <span class="text-important">points communs</span> :</p>
		<ul class="text-xl mt-6">
			<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li>
			<li class="fragment">Tous peuvent déposer et retirer de l'argent</li>
			<li class="fragment">Seul le calcul des intérêts diffère</li>
		</ul>
		<p class="fragment mt-8 text-accent-200 font-bold">
			💡 On peut extraire un concept <span class="text-important">plus général</span> : <code>CompteBancaire</code>
		</p>
		<p class="fragment text-important">
			C'est la <b>généralisation</b> qui mène naturellement à l'<b>héritage</b> !
		</p>
	</Slide>

	<Slide>
		<h3>Visualiser la généralisation</h3>
		<PlantUml>
{`
@startuml
class CompteBancaire {
  - numero: String
  - solde: double
  - titulaire: String
  + deposer(montant)
  + retirer(montant)
  {abstract} + calculerInterets()
}

class CompteCourant extends CompteBancaire {
  + calculerInterets()
}

class CompteEpargne extends CompteBancaire {
  - tauxInteret: double
  + calculerInterets()
}
@enduml
`}
		</PlantUml>
		<p class="fragment mt-4">
			Les éléments <span class="text-important">communs</span> sont dans la classe générale,<br/>
			les <span class="text-important">spécificités</span> dans les classes dérivées.
		</p>
	</Slide>

	<Slide>
		<h3>Récapitulatif</h3>
		<div class="text-xl">
			<p class="fragment">✅ L'<span class="text-important">encapsulation</span> protège vos données</p>
			<p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p>
			<p class="fragment mt-4">✅ L'<span class="text-important">héritage</span> structure votre code</p>
		</div>
		<p class="fragment mt-8 text-accent-200 text-2xl font-bold">
			🔮 Voyons maintenant comment implémenter cela en Java !
		</p>
	</Slide>
</Slide>
