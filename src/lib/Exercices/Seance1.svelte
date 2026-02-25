<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>🏋️ Exercices pratiques - Séance 1</h3>

	<!-- EXERCICE 1 : ENCAPSULATION -->
	<Slide data_background_color="#1a3a1a">
		<h2 class="text-5xl">Exercice 1</h2>
		<p class="text-2xl text-gray-400">Encapsulation et validation</p>
		<p class="text-xl mt-8">⏱️ 10-15 minutes</p>
	</Slide>

	<Slide>
		<h3>📝 Exercice 1 : Compte bancaire sécurisé</h3>
		<div class="text-left text-xl">
			<p class="font-bold text-accent-200">Objectif :</p>
			<p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p>

			<p class="font-bold text-accent-200 mt-6">Consignes :</p>
			<ol class="space-y-2">
				<li>
					Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code>
				</li>
				<li>Tous les attributs doivent être <code>private</code></li>
				<li>Créer un constructeur pour initialiser le compte</li>
				<li>Créer des getters pour tous les attributs</li>
				<li>
					Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6">
						<li>Vérifie que le montant est positif</li>
						<li>Ajoute le montant au solde</li>
					</ul>
				</li>
				<li>
					Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6">
						<li>Vérifie que le montant est positif</li>
						<li>Vérifie que le solde est suffisant</li>
						<li>Retire le montant du solde</li>
					</ul>
				</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<h3>💡 Indice</h3>
		<Code>
			{`
public class CompteBancaire {
    private String numero;
    private double solde;
    private String titulaire;

    public CompteBancaire(String numero, String titulaire) {
        // À compléter
    }

    public void deposer(double montant) {
        // À compléter : vérification + ajout
    }

    public void retirer(double montant) {
        // À compléter : vérifications + retrait
    }

    // Ajouter les getters
}
`}
		</Code>
	</Slide>

	 <Slide  >
		<h3>✅ Solution</h3>
		<Code class="language-java h-[70vh]">
			{`
public class CompteBancaire {
    private String numero;
    private double solde;
    private String titulaire;

    public CompteBancaire(String numero, String titulaire) {
        this.numero = numero;
        this.titulaire = titulaire;
        this.solde = 0.0;
    }

    public String getNumero() {
        return numero;
    }

    public double getSolde() {
        return solde;
    }

    public String getTitulaire() {
        return titulaire;
    }

    public void deposer(double montant) {
        if (montant <= 0) {
            throw new IllegalArgumentException("Le montant doit être positif");
        }
        solde += montant;
    }

    public void retirer(double montant) {
        if (montant <= 0) {
            throw new IllegalArgumentException("Le montant doit être positif");
        }
        if (montant > solde) {
            throw new IllegalArgumentException("Solde insuffisant");
        }
        solde -= montant;
    }
}
`}
		</Code>
	</Slide> 	

	<Slide>
		<h3>🎯 Points clés</h3>
		<ul class="text-xl">
			<li class="fragment">✅ Attributs <code>private</code> → protection des données</li>
			<li class="fragment">✅ Getters → lecture contrôlée</li>
			<li class="fragment">✅ Méthodes de modification → validation systématique</li>
			<li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li>
			<li class="fragment">✅ Exceptions claires → facilite le debug</li>
		</ul>
		<p class="fragment mt-8 text-accent-200 font-bold">
			💼 En entreprise, cette protection évite les bugs coûteux !
		</p>
	</Slide>

	<!-- EXERCICE 2 : HÉRITAGE -->
	<Slide data_background_color="#1a1a3a">
		<h2 class="text-5xl">Exercice 2</h2>
		<p class="text-2xl text-gray-400">Héritage et généralisation</p>
		<p class="text-xl mt-8">⏱️ 15-20 minutes</p>
	</Slide>

	<Slide>
		<h3>📝 Exercice 2 : Système de véhicules</h3>
		<div class="text-left text-xl">
			<p class="font-bold text-accent-200">Objectif :</p>
			<p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p>

			<p class="font-bold text-accent-200 mt-6">Consignes :</p>
			<ol class="space-y-2">
				<li>
					Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6">
						<li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li>
						<li>Constructeur</li>
						<li>Méthode concrète : <code>demarrer()</code></li>
						<li>Méthode abstraite : <code>klaxonner()</code></li>
					</ul>
				</li>
				<li>
					Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6">
						<li>Attribut supplémentaire : <code>nbPortes</code></li>
						<li>Implémenter <code>klaxonner()</code> → affiche "Tuuut tuuut !"</li>
					</ul>
				</li>
				<li>
					Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6">
						<li>Attribut supplémentaire : <code>avecSidecar</code></li>
						<li>Implémenter <code>klaxonner()</code> → affiche "Beep beep !"</li>
					</ul>
				</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<h3>🎨 Diagramme UML cible</h3>
		<PlantUml>
			{`
@startuml
abstract class Vehicule {
  - marque: String
  - modele: String
  - vitesseMax: int
  + Vehicule(marque, modele, vitesseMax)
  + demarrer()
  {abstract} + klaxonner()
}

class Voiture extends Vehicule {
  - nbPortes: int
  + Voiture(marque, modele, vitesseMax, nbPortes)
  + klaxonner()
}

class Moto extends Vehicule {
  - avecSidecar: boolean
  + Moto(marque, modele, vitesseMax, avecSidecar)
  + klaxonner()
}
@enduml
`}
		</PlantUml>
	</Slide>

	<Slide>
		<h3>💡 Indice</h3>
		<Code>
			{`
public abstract class Vehicule {
    private String marque;
    private String modele;
    private int vitesseMax;

    public Vehicule(String marque, String modele, int vitesseMax) {
        // À compléter
    }

    public void demarrer() {
        System.out.println("Le véhicule démarre...");
    }

    // Méthode abstraite à déclarer
}
`}
		</Code>
	</Slide>

	<Slide>
		<h3>✅ Solution : Vehicule</h3>
		<Code class="language-java">
			{`
public abstract class Vehicule {
    private String marque;
    private String modele;
    private int vitesseMax;

    public Vehicule(String marque, String modele, int vitesseMax) {
        this.marque = marque;
        this.modele = modele;
        this.vitesseMax = vitesseMax;
    }

    public void demarrer() {
        System.out.println(marque + " " + modele + " démarre...");
    }

    public abstract void klaxonner();

    // Getters
    public String getMarque() { return marque; }
    public String getModele() { return modele; }
    public int getVitesseMax() { return vitesseMax; }
}
`}
		</Code>
	</Slide> 

	<Slide>
		<h3>✅ Solution : Voiture et Moto</h3>
		<div class="flex flex-row gap-4">
			<Code class="language-java">
				{`
public class Voiture extends Vehicule {
    private int nbPortes;

    public Voiture(String marque,
                   String modele,
                   int vitesseMax,
                   int nbPortes) {
        super(marque, modele, vitesseMax);
        this.nbPortes = nbPortes;
    }

    @Override
    public void klaxonner() {
        System.out.println("Tuuut tuuut !");
    }

    public int getNbPortes() {
        return nbPortes;
    }
}
`}
			</Code>
			<Code class="language-java">
				{`
public class Moto extends Vehicule {
    private boolean avecSidecar;

    public Moto(String marque,
                String modele,
                int vitesseMax,
                boolean avecSidecar) {
        super(marque, modele, vitesseMax);
        this.avecSidecar = avecSidecar;
    }

    @Override
    public void klaxonner() {
        System.out.println("Beep beep !");
    }

    public boolean hasAvecSidecar() {
        return avecSidecar;
    }
}
`}
			</Code>
		</div>
	</Slide>

	<Slide>
		<h3>🧪 Test de votre code</h3>
		<Code>
			{`
public class Main {
    public static void main(String[] args) {
        Voiture v = new Voiture("Peugeot", "208", 180, 5);
        Moto m = new Moto("Harley-Davidson", "Road King", 160, true);

        v.demarrer();      // "Peugeot 208 démarre..."
        v.klaxonner();     // "Tuuut tuuut !"

        m.demarrer();      // "Harley-Davidson Road King démarre..."
        m.klaxonner();     // "Beep beep !"

        // On ne peut PAS instancier Vehicule directement
        // Vehicule x = new Vehicule("Test", "Test", 100); // ❌ Erreur !
    }
}
`}
		</Code>
	</Slide>

	<Slide>
		<h3>🎯 Points clés</h3>
		<ul class="text-xl">
			<li class="fragment">✅ <code>abstract class</code> → empêche l'instanciation directe</li>
			<li class="fragment">
				✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes
			</li>
			<li class="fragment">
				✅ <code>super(...)</code> → appel du constructeur parent obligatoire
			</li>
			<li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li>
			<li class="fragment">✅ Code commun dans le parent → évite duplication</li>
		</ul>
		<p class="fragment mt-8 text-accent-200 font-bold">
			💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.
		</p>
	</Slide>

	<!-- EXERCICE 3 : COMPOSITION + INTERFACES -->
	<Slide data_background_color="#3a1a1a">
		<h2 class="text-5xl">Exercice 3</h2>
		<p class="text-2xl text-gray-400">Composition et Interfaces</p>
		<p class="text-xl mt-8">⏱️ 20-25 minutes</p>
	</Slide>

	<Slide>
		<h3>📝 Exercice 3 : Système de location</h3>
		<div class="text-left text-xl">
			<p class="font-bold text-accent-200">Objectif :</p>
			<p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p>

			<p class="font-bold text-accent-200 mt-6">Consignes :</p>
			<ol class="space-y-2">
				<li>
					Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6">
						<li><code>double calculerPrixLocation(int nbJours)</code></li>
					</ul>
				</li>
				<li>
					Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code>
				</li>
				<li>
					Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6">
						<li>Voiture : 50€/jour</li>
						<li>Moto : 30€/jour</li>
					</ul>
				</li>
				<li>
					Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6">
						<li>Liste de véhicules louables</li>
						<li>Méthode <code>ajouterVehicule(ILouable v)</code></li>
						<li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li>
					</ul>
				</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<h3>🎨 Diagramme UML cible</h3>
		<PlantUml>
			{`
@startuml
interface ILouable {
  + calculerPrixLocation(nbJours): double
}

abstract class Vehicule {
  - marque: String
  - modele: String
  + demarrer()
  {abstract} + klaxonner()
}

class Voiture extends Vehicule implements ILouable {
  + calculerPrixLocation(nbJours): double
}

class Moto extends Vehicule implements ILouable {
  + calculerPrixLocation(nbJours): double
}

class AgenceLocation {
  - vehicules: List<ILouable>
  + ajouterVehicule(v: ILouable)
  + calculerRevenuTotal(nbJours): double
}

AgenceLocation o-- "0..*" ILouable
@enduml
`}
		</PlantUml>
	</Slide>

	 <Slide >
		<h3>✅ Solution : Interface et implémentations</h3>
		<Code class="language-java h-[65vh]">
			{`
public interface ILouable {
    double calculerPrixLocation(int nbJours);
}

public class Voiture extends Vehicule implements ILouable {
    private int nbPortes;
    private static final double PRIX_JOUR = 50.0;

    // ... constructeur, klaxonner(), etc.

    @Override
    public double calculerPrixLocation(int nbJours) {
        return nbJours * PRIX_JOUR;
    }
}

public class Moto extends Vehicule implements ILouable {
    private boolean avecSidecar;
    private static final double PRIX_JOUR = 30.0;

    // ... constructeur, klaxonner(), etc.

    @Override
    public double calculerPrixLocation(int nbJours) {
        return nbJours * PRIX_JOUR;
    }
}
`}
		</Code>
	</Slide> <Slide>
		<h3>✅ Solution : AgenceLocation</h3>
		<Code class="language-java">
			{`
import java.util.ArrayList;
import java.util.List;

public class AgenceLocation {
    private List<ILouable> vehicules;

    public AgenceLocation() {
        this.vehicules = new ArrayList<>();
    }

    public void ajouterVehicule(ILouable vehicule) {
        vehicules.add(vehicule);
    }

    public double calculerRevenuTotal(int nbJours) {
        double total = 0;
        for (ILouable vehicule : vehicules) {
            total += vehicule.calculerPrixLocation(nbJours);
        }
        return total;
    }

    public int getNombreVehicules() {
        return vehicules.size();
    }
}
`}
		</Code>
	</Slide> 

	<Slide>
		<h3>🧪 Test complet</h3>
		<Code>
			{`
public class Main {
    public static void main(String[] args) {
        AgenceLocation agence = new AgenceLocation();

        Voiture v1 = new Voiture("Peugeot", "208", 180, 5);
        Voiture v2 = new Voiture("Renault", "Clio", 170, 5);
        Moto m1 = new Moto("Yamaha", "MT-07", 200, false);

        agence.ajouterVehicule(v1);
        agence.ajouterVehicule(v2);
        agence.ajouterVehicule(m1);

        System.out.println("Nombre de véhicules : " + agence.getNombreVehicules());
        // Affiche : 3

        System.out.println("Revenu pour 7 jours : " + agence.calculerRevenuTotal(7) + "€");
        // Affiche : 910.0€ (50*7 + 50*7 + 30*7)
    }
}
`}
		</Code>
	</Slide>

	<Slide>
		<h3>🎯 Points clés</h3>
		<ul class="text-xl">
			<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li>
			<li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li>
			<li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li>
			<li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li>
			<li class="fragment">✅ <code>static final</code> → constante de classe</li>
		</ul>
		<p class="fragment mt-8 text-accent-200 font-bold">
			💼 Architecture typique en entreprise : services, DAO, entités métier
		</p>
	</Slide>

	<!-- CHALLENGE BONUS -->
	<Slide data_background_color="#2a2a1a">
		<h2 class="text-5xl">🏆 Challenge Bonus</h2>
		<p class="text-2xl text-gray-400">Pour aller plus loin</p>
	</Slide>

	<Slide>
		<h3>💪 Challenge : Système de réduction</h3>
		<div class="text-left text-xl">
			<p class="font-bold text-accent-200">Améliorez votre système de location :</p>
			<ol class="space-y-3 mt-4">
				<li>
					Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6">
						<li><code>double appliquerReduction(double prix)</code></li>
					</ul>
				</li>
				<li>
					Créer des classes de réduction :
					<ul class="ml-6">
						<li><code>ReductionPourcentage</code> (ex: -20%)</li>
						<li><code>ReductionMontant</code> (ex: -50€)</li>
					</ul>
				</li>
				<li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li>
				<li>Tester avec plusieurs scénarios</li>
			</ol>
		</div>
		<p class="fragment mt-6 text-accent-200">
			💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)
		</p>
	</Slide>

	 <Slide >
		<h3>✅ Solution Challenge : Interfaces</h3>
		<Code class="language-java">
			{`
public interface IReductible {
    double appliquerReduction(double prix);
}

public class ReductionPourcentage implements IReductible {
    private double pourcentage;

    public ReductionPourcentage(double pourcentage) {
        this.pourcentage = pourcentage;
    }

    @Override
    public double appliquerReduction(double prix) {
        return prix * (1 - pourcentage / 100);
    }
}

public class ReductionMontant implements IReductible {
    private double montant;

    public ReductionMontant(double montant) {
        this.montant = montant;
    }

    @Override
    public double appliquerReduction(double prix) {
        return Math.max(0, prix - montant);
    }
}
`}
		</Code>
	</Slide>
	 <Slide >
		<h3>✅ Solution Challenge : AgenceLocation améliorée</h3>
		<Code class="language-java">
			{`
public class AgenceLocation {
    private List<ILouable> vehicules;
    private IReductible reduction;

    public AgenceLocation() {
        this.vehicules = new ArrayList<>();
        this.reduction = null;
    }

    public void setReduction(IReductible reduction) {
        this.reduction = reduction;
    }

    public double calculerRevenuTotal(int nbJours) {
        double total = 0;
        for (ILouable vehicule : vehicules) {
            double prix = vehicule.calculerPrixLocation(nbJours);
            if (reduction != null) {
                prix = reduction.appliquerReduction(prix);
            }
            total += prix;
        }
        return total;
    }
}
`}
		</Code>
	</Slide> 

	<Slide>
		<h3>🧪 Test du challenge</h3>
		<Code>
			{`
public class Main {
    public static void main(String[] args) {
        AgenceLocation agence = new AgenceLocation();

        agence.ajouterVehicule(new Voiture("Peugeot", "208", 180, 5));
        agence.ajouterVehicule(new Moto("Yamaha", "MT-07", 200, false));

        // Sans réduction
        System.out.println("Prix normal : " + agence.calculerRevenuTotal(7) + "€");
        // 560€ (50*7 + 30*7)

        // Avec réduction de 20%
        agence.setReduction(new ReductionPourcentage(20));
        System.out.println("Avec -20% : " + agence.calculerRevenuTotal(7) + "€");
        // 448€ (560 * 0.8)

        // Avec réduction de 100€
        agence.setReduction(new ReductionMontant(100));
        System.out.println("Avec -100€ : " + agence.calculerRevenuTotal(7) + "€");
        // 460€ (560 - 100)
    }
}
`}
		</Code>
	</Slide>


</Slide>
