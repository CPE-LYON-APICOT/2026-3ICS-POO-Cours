<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les principes SOLID</h3>

	<Slide>
		<p>
			SOLID est un ensemble de 5 principes de conception formulés par Robert C. Martin.
		</p>
		<p class="fragment mt-4">
			Ils guident la création de code <span class="text-important">maintenable</span>,
			<span class="text-important">extensible</span> et <span class="text-important">testable</span>.
		</p>
		<div class="fragment mt-8 text-3xl">
			<span class="text-important">S</span> &middot;
			<span class="text-important">O</span> &middot;
			<span class="text-important">L</span> &middot;
			<span class="text-important">I</span> &middot;
			<span class="text-important">D</span>
		</div>
		<aside class="notes">
			Robert C. Martin, alias "Uncle Bob", a formalisé ces principes dans les années 2000.
			Ce n'est pas de la théorie abstraite : ces principes sont appliqués quotidiennement
			dans les entreprises qui font du code de qualité. Connaitre SOLID vous distingue
			d'un développeur junior.
		</aside>
	</Slide>

	<!-- S -->
	<Slide>
		<h3>S — Single Responsibility</h3>
		<p>Une classe ne doit avoir qu'<span class="text-important">une seule raison de changer</span>.</p>
		<Code>{`
// Violation : cette classe fait tout
class Commande {
    void calculerTotal() { ... }
    void envoyerEmailConfirmation() { ... }
    void sauvegarderEnBase() { ... }
    void genererFacturePDF() { ... }
}
`}</Code>
		<p class="fragment mt-4 text-red-400">
			4 responsabilités = 4 raisons de changer.
		</p>
		<aside class="notes">
			Si le format de l'email change, on modifie Commande. Si le format PDF change aussi.
			Si le schéma de la base change, encore Commande. C'est un noeud de dépendances.
			Risque : changer l'email peut casser le calcul du total.
		</aside>
	</Slide>

	<Slide>
		<h3>S — Correction</h3>
		<PlantUml>{`
@startuml
!theme crt-green
skinparam backgroundColor transparent

class Commande {
  + calculerTotal(): double
}

class EmailService {
  + envoyerConfirmation(c: Commande)
}

class CommandeRepository {
  + sauvegarder(c: Commande)
}

class FactureService {
  + genererPDF(c: Commande)
}

EmailService ..> Commande
CommandeRepository ..> Commande
FactureService ..> Commande
@enduml
`}</PlantUml>
		<p class="fragment mt-4">
			Chaque classe a <b>une seule responsabilité</b> et donc <b>une seule raison de changer</b>.
		</p>
		<aside class="notes">
			On verra dans le bloc Refactoring comment extraire ces services concrètement.
			L'IDE peut le faire semi-automatiquement.
		</aside>
	</Slide>

	<!-- O -->
	<Slide>
		<h3>O — Open/Closed</h3>
		<p>
			Ouvert à l'<span class="text-important">extension</span>,
			fermé à la <span class="text-important">modification</span>.
		</p>
		<div class="grid grid-cols-2 gap-4 mt-6">
			<div>
				<h4 class="text-red-400">Avant</h4>
				<Code>{`
class Calculateur {
    double surface(Object forme) {
        if (forme instanceof Cercle c)
            return Math.PI * c.r * c.r;
        if (forme instanceof Rectangle r)
            return r.l * r.h;
        // Ajouter Triangle ici ?
        // Puis Losange ?
        // Puis Pentagone ?...
        return 0;
    }
}
`}</Code>
			</div>
			<div>
				<h4 class="text-green-400">Après</h4>
				<Code>{`
abstract class Forme {
    abstract double surface();
}

class Calculateur {
    double surfaceTotale(
            List<Forme> formes) {
        double total = 0;
        for (Forme f : formes)
            total += f.surface();
        return total;
    }
}
// Ajouter Triangle ? 
// 0 modification ici.
`}</Code>
			</div>
		</div>
		<aside class="notes">
			Le code de gauche doit être modifié à chaque nouveau type. Celui de droite ne change jamais.
			C'est exactement le polymorphisme qu'on vient de voir. OCP est le principe formel derrière.
		</aside>
	</Slide>

	<!-- L -->
	<Slide>
		<h3>L — Liskov Substitution</h3>
		<p>
			Un objet de type enfant doit pouvoir <span class="text-important">remplacer</span> un objet
			du type parent sans casser le programme.
		</p>
		<div class="fragment mt-6">
			<h4 class="text-red-400">Le piège classique</h4>
			<Code>{`
class Rectangle {
    int largeur, hauteur;
    void setLargeur(int l) { this.largeur = l; }
    void setHauteur(int h) { this.hauteur = h; }
    int surface() { return largeur * hauteur; }
}

class Carre extends Rectangle {
    void setLargeur(int l) { largeur = l; hauteur = l; }
    void setHauteur(int h) { largeur = h; hauteur = h; }
}
`}</Code>
		</div>
		<aside class="notes">
			Si on passe un Carré là où on attend un Rectangle, setLargeur modifie aussi la hauteur.
			Le code qui fait r.setLargeur(5); r.setHauteur(3); s'attend à surface() == 15.
			Avec un Carré, surface() == 9. Le comportement est changé : Liskov est violé.
		</aside>
	</Slide>

	<Slide>
		<h3>L — Le problème</h3>
		<Code>{`
void testerRectangle(Rectangle r) {
    r.setLargeur(5);
    r.setHauteur(3);
    assert r.surface() == 15;  // Échoue avec un Carré !
}

testerRectangle(new Rectangle());  // OK
testerRectangle(new Carre());      // Assertion error !
`}</Code>
		<p class="fragment mt-4">
			Un <code>Carre</code> n'est <b>pas substituable</b> à un <code>Rectangle</code>
			→ l'héritage est <span class="text-important">mal choisi</span>.
		</p>
		<aside class="notes">
			Solution : ne pas faire hériter Carré de Rectangle. Utiliser une interface Forme commune,
			ou un record. Mathématiquement un carré est un rectangle, mais en POO la relation "est un"
			doit préserver le comportement, pas juste les propriétés mathématiques.
		</aside>
	</Slide>

	<!-- I -->
	<Slide>
		<h3>I — Interface Segregation</h3>
		<p>
			Mieux vaut plusieurs <span class="text-important">petites interfaces</span>
			qu'une grosse interface fourre-tout.
		</p>
		<PlantUml>{`
@startuml
!theme crt-green
skinparam backgroundColor transparent

interface Imprimable {
  + imprimer()
}
interface Scannable {
  + scanner()
}
interface Faxable {
  + faxer()
}

class ImprimanteSimple implements Imprimable
class ImprimanteMulti implements Imprimable, Scannable, Faxable

@enduml
`}</PlantUml>
		<p class="fragment mt-2">
			L'<code>ImprimanteSimple</code> n'est pas forcée d'implémenter <code>scanner()</code> et <code>faxer()</code>.
		</p>
		<aside class="notes">
			Si on avait une seule interface MachineDeBureau avec imprimer(), scanner(), faxer(),
			une imprimante simple devrait implémenter scanner() en lançant une exception ou en ne faisant rien.
			C'est un "code smell". ISP rejoint ce qu'on a vu en séance 1 sur les interfaces ciblées.
		</aside>
	</Slide>

	<!-- D -->
	<Slide>
		<h3>D — Dependency Inversion</h3>
		<p>
			Dépendre des <span class="text-important">abstractions</span>, pas des implémentations concrètes.
		</p>
		<div class="grid grid-cols-2 gap-4 mt-6">
			<div>
				<h4 class="text-red-400">Couplé</h4>
				<Code>{`
class NotificationService {
    private EmailSender sender 
        = new EmailSender();
        
    void notifier(String msg) {
        sender.envoyer(msg);
    }
}
// Impossible de changer 
// pour du SMS sans modifier
`}</Code>
			</div>
			<div>
				<h4 class="text-green-400">Découplé</h4>
				<Code>{`
class NotificationService {
    private MessageSender sender;
    
    NotificationService(
            MessageSender s) {
        this.sender = s;
    }
    void notifier(String msg) {
        sender.envoyer(msg);
    }
}
`}</Code>
			</div>
		</div>
		<aside class="notes">
			À gauche, NotificationService est soudé à EmailSender. À droite, on injecte n'importe
			quelle implémentation de MessageSender. Demain SMS, push, Slack, webhook... sans rien modifier.
			C'est le principe qu'on a vu avec BassinAquatique(Nageur) en séance 1, mais formalisé.
		</aside>
	</Slide>

	<Slide>
		<h3>D — En pratique</h3>
		<Code>{`
interface MessageSender {
    void envoyer(String message);
}

class EmailSender implements MessageSender {
    public void envoyer(String msg) { /* envoi email */ }
}
class SmsSender implements MessageSender {
    public void envoyer(String msg) { /* envoi SMS */ }
}

// Injection par le constructeur
var service = new NotificationService(new SmsSender());
service.notifier("Votre colis est prêt");
`}</Code>
		<p class="fragment mt-4">
			C'est le fondement de l'<span class="text-important">injection de dépendances</span>
			utilisée par Spring, Guice, etc.
		</p>
		<aside class="notes">
			En Spring, vous n'écrivez même pas le new : le framework injecte automatiquement
			avec @Autowired. On le verra quand on abordera les annotations/frameworks.
		</aside>
	</Slide>

	<!-- Récap -->
	<Slide>
		<h3>Récapitulatif SOLID</h3>
		<table class="text-lg">
			<tr class="fragment">
				<td class="p-3 text-important font-bold">S</td>
				<td class="p-3">Single Responsibility</td>
				<td class="p-3 text-gray-400">Une classe = une responsabilité</td>
			</tr>
			<tr class="fragment">
				<td class="p-3 text-important font-bold">O</td>
				<td class="p-3">Open/Closed</td>
				<td class="p-3 text-gray-400">Étendre sans modifier</td>
			</tr>
			<tr class="fragment">
				<td class="p-3 text-important font-bold">L</td>
				<td class="p-3">Liskov Substitution</td>
				<td class="p-3 text-gray-400">Sous-type = substituable</td>
			</tr>
			<tr class="fragment">
				<td class="p-3 text-important font-bold">I</td>
				<td class="p-3">Interface Segregation</td>
				<td class="p-3 text-gray-400">Interfaces petites et ciblées</td>
			</tr>
			<tr class="fragment">
				<td class="p-3 text-important font-bold">D</td>
				<td class="p-3">Dependency Inversion</td>
				<td class="p-3 text-gray-400">Dépendre des abstractions</td>
			</tr>
		</table>
		<aside class="notes">
			Ce tableau est une référence à garder. En entretien, on attend que vous connaissiez au moins
			SRP et OCP. Les 5 montrent une vraie maturité en conception logicielle.
		</aside>
	</Slide>

	<Slide>
		<h3>Quel principe est violé ?</h3>
		<Code>{`
class UserService {
    void creerUtilisateur(String nom) {
        // Sauvegarde en base
        Connection conn = DriverManager.getConnection("jdbc:...");
        PreparedStatement ps = conn.prepareStatement("INSERT INTO ...");
        ps.executeUpdate();
        // Envoi d'email
        Transport.send(new MimeMessage(...));
        // Log
        System.out.println("Utilisateur créé : " + nom);
    }
}
`}</Code>
		<p class="fragment mt-4 text-accent-200">
			<b>S</b> — 3 responsabilités : persistance, notification, logging.
		</p>
		<aside class="notes">
			On pourrait aussi argumenter D (dépendances concrètes à JDBC et JavaMail).
			Mais la violation la plus flagrante est SRP.
		</aside>
	</Slide>
</Slide>
