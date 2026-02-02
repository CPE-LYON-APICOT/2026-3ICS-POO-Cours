<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les Exceptions</h3>

	<!-- INTRODUCTION -->
	<Slide data_background_color="#1a1a2e">
		<h2 class="text-5xl">Gestion des erreurs</h2>
		<p class="text-2xl text-gray-400">Les exceptions en Java</p>
	</Slide>

	<Slide>
		<h3>Qu'est-ce qu'une exception ?</h3>
		<p>
			Une <span class="text-important">exception</span> est une erreur qui survient pendant l'exécution
			du programme.
		</p>
		<Code>
			{`
int a = 10 / 0;  // ArithmeticException !

String s = null;
s.length();      // NullPointerException !

int[] tab = new int[5];
tab[10] = 42;    // ArrayIndexOutOfBoundsException !
`}
		</Code>
		<p class="fragment mt-4 text-red-400 font-bold">
			😱 Sans gestion, ces erreurs <b>crashent</b> votre programme !
		</p>
		<aside class="notes">
			Les exceptions sont fondamentales en production. Un programme qui crashe = utilisateurs
			mécontents. L'idée : prévoir les problèmes et y réagir proprement au lieu de planter.
			Différence avec les erreurs de compilation : les exceptions arrivent à l'exécution.
		</aside>
	</Slide>

	<Slide>
		<h3>Le problème en entreprise</h3>
		<div class="text-xl">
			<p>Imaginez un système bancaire :</p>
			<Code class="fragment">
				{`
public void virer(CompteBancaire source, CompteBancaire dest, double montant) {
    source.retirer(montant);
    dest.deposer(montant);    // 💥 Crash ici si dest est null !
}
// Le montant est débité mais jamais crédité !
`}
			</Code>
			<p class="fragment mt-6 text-red-400">
				❌ Résultat : argent perdu, clients furieux, responsabilités légales !
			</p>
			<p class="fragment mt-4 text-accent-200">
				✅ Solution : gérer les erreurs avec des <span class="text-important">exceptions</span>
			</p>
		</div>
		<aside class="notes">
			Exemple réel : en 2012, Knight Capital a perdu 440 millions de dollars en 45 minutes à cause
			d'un bug. Les exceptions + transactions permettent le rollback : si ça échoue, on annule tout.
			C'est le principe ACID des bases de données.
		</aside>
	</Slide>

	<!-- TRY / CATCH / FINALLY -->
	<Slide>
		<h3>try / catch / finally</h3>
		<p>On utilise des blocs pour <b>capturer</b> et <b>gérer</b> les exceptions.</p>
		<Code lines="1-4|5-8|9-12">
			{`
try {
    // Code qui peut générer une exception
    int resultat = 10 / 0;
    System.out.println(resultat);
} catch (ArithmeticException e) {
    // Code exécuté SI une exception se produit
    System.out.println("Erreur : division par zéro !");
}
finally {
    // Code exécuté TOUJOURS (avec ou sans exception)
    System.out.println("Nettoyage des ressources");
}
`}
		</Code>
		<aside class="notes">
			Le try délimite la zone de code surveillée. Le catch attrape l'exception. Le finally s'exécute
			MÊME si on fait un return dans le try ou le catch ! C'est la garantie que le nettoyage sera
			fait. Très important pour éviter les fuites mémoire.
		</aside>
	</Slide>

	<Slide>
		<h3>Exemple : virement sécurisé</h3>
		<Code>
			{`
public void virer(CompteBancaire source, CompteBancaire dest, double montant) {
    try {
        if (source == null || dest == null) {
            throw new IllegalArgumentException("Compte null");
        }
        
        source.retirer(montant);
        dest.deposer(montant);
        
        System.out.println("Virement réussi");
    } catch (IllegalArgumentException e) {
        System.err.println("Erreur : " + e.getMessage());
        // On peut logger, alerter, annuler la transaction...
    } catch (Exception e) {
        System.err.println("Erreur inattendue : " + e.getMessage());
        // Rollback, notification admin...
    } finally {
        // Fermer connexions, libérer ressources...
    }
}
`}
		</Code>
	</Slide>

	<!-- LANCER DES EXCEPTIONS -->
	<Slide>
		<h3>Lancer une exception avec throw</h3>
		<p>On peut <b>créer</b> et <b>lancer</b> nos propres exceptions.</p>
		<Code>
			{`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("L'âge ne peut pas être négatif !");
    }
    if (age > 150) {
        throw new IllegalArgumentException("L'âge est irréaliste !");
    }
    this.age = age;
}
`}
		</Code>
		<p class="fragment mt-4 text-accent-200">
			💡 Cela permet de <b>valider les données</b> et d'arrêter l'exécution proprement.
		</p>
		<aside class="notes">
			throw crée et lance l'exception. C'est vous qui décidez quand une situation est anormale.
			C'est le pattern "Fail Fast" : mieux vaut échouer tôt que propager des données invalides. Très
			utile pour valider les entrées utilisateur ou les paramètres de méthodes.
		</aside>
	</Slide>

	<Slide>
		<h3>Utilisation</h3>
		<Code>
			{`
Personne p = new Personne("Jean");

try {
    p.setAge(-5);  // Lance une exception
} catch (IllegalArgumentException e) {
    System.out.println("Erreur : " + e.getMessage());
    // Affiche : "Erreur : L'âge ne peut pas être négatif !"
}

System.out.println("Programme continue...");
`}
		</Code>
		<p class="fragment mt-4">
			Sans le <code>try/catch</code>, le programme crasherait immédiatement.
		</p>
	</Slide>

	<!-- TYPES D'EXCEPTIONS -->
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
			<tr class="fragment">
				<td class="p-3"><code>SQLException</code></td>
				<td class="p-3">Erreur base de données</td>
			</tr>
		</table>
		<aside class="notes">
			NullPointerException est la plus fréquente ! Tony Hoare l'appelle son "erreur à un milliard de
			dollars". Java 14+ a amélioré les messages d'erreur NPE pour mieux identifier le problème. En
			entretien, on vous demandera souvent de citer des exceptions courantes.
		</aside>
	</Slide>

	<!-- CHECKED VS UNCHECKED -->
	<Slide>
		<h3>Exceptions vérifiées vs non-vérifiées</h3>
		<div class="grid grid-cols-2 gap-6 mt-6">
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">🔍 Checked (vérifiées)</h4>
				<p class="text-sm mt-2">Le compilateur <b>oblige</b> à les gérer</p>
				<Code>
					{`
// IOException DOIT être gérée
public void lireFichier() 
    throws IOException {
    FileReader fr = 
        new FileReader("test.txt");
}
`}
				</Code>
				<p class="text-sm mt-2">Exemples : <code>IOException</code>, <code>SQLException</code></p>
			</div>
			<div class="fragment p-4 bg-accent-950 rounded-lg">
				<h4 class="text-important">⚡ Unchecked (non-vérifiées)</h4>
				<p class="text-sm mt-2">Gestion <b>optionnelle</b></p>
				<Code>
					{`
// Pas d'obligation
public void diviser(int a, int b) {
    return a / b;
    // Peut lancer ArithmeticException
}
`}
				</Code>
				<p class="text-sm mt-2">
					Exemples : <code>NullPointerException</code>, <code>ArithmeticException</code>
				</p>
			</div>
		</div>
		<aside class="notes">
			C'est un débat classique en Java. Certains pensent que les checked exceptions sont trop
			verbeuses. Les unchecked héritent de RuntimeException. Les checked héritent directement de
			Exception. En pratique moderne, on préfère souvent les unchecked pour moins de boilerplate.
		</aside>
	</Slide>

	<Slide>
		<h3>Le mot-clé throws</h3>
		<p>Déclare qu'une méthode <b>peut</b> lancer une exception (mais ne la gère pas).</p>
		<Code>
			{`
public void lireFichier(String chemin) throws IOException {
    FileReader fr = new FileReader(chemin);
    // ... lecture ...
    fr.close();
}

// L'appelant DOIT gérer l'exception
public void main() {
    try {
        lireFichier("data.txt");
    } catch (IOException e) {
        System.err.println("Impossible de lire le fichier");
    }
}
`}
		</Code>
		<aside class="notes">
			throws délègue la responsabilité. "Je sais que ça peut foirer, mais c'est à toi de gérer."
			Attention : throw (sans s) lance l'exception, throws (avec s) déclare la possibilité. On peut
			déclarer plusieurs exceptions : throws IOException, SQLException.
		</aside>
	</Slide>

	<!-- CRÉER SES PROPRES EXCEPTIONS -->
	<Slide>
		<h3>Créer ses propres exceptions</h3>
		<p>Pour des cas métier spécifiques, on peut créer nos propres exceptions.</p>
		<Code>
			{`
public class SoldeInsuffisantException extends Exception {
    private double solde;
    private double montantDemande;
    
    public SoldeInsuffisantException(double solde, double montant) {
        super("Solde insuffisant : " + solde + " € disponible, " + montant + " € demandé");
        this.solde = solde;
        this.montantDemande = montant;
    }
    
    public double getSoldeManquant() {
        return montantDemande - solde;
    }
}
`}
		</Code>
		<aside class="notes">
			Les exceptions métier améliorent la lisibilité du code. SoldeInsuffisantException dit
			exactement ce qui se passe. On peut stocker des infos supplémentaires (solde, montant) pour
			mieux gérer l'erreur. Convention : le nom se termine par Exception.
		</aside>
	</Slide>

	<Slide>
		<h3>Utilisation de l'exception personnalisée</h3>
		<Code>
			{`
public class CompteBancaire {
    private double solde;
    
    public void retirer(double montant) throws SoldeInsuffisantException {
        if (montant > solde) {
            throw new SoldeInsuffisantException(solde, montant);
        }
        solde -= montant;
    }
}

// Utilisation
try {
    compte.retirer(500);
} catch (SoldeInsuffisantException e) {
    System.out.println(e.getMessage());
    System.out.println("Il manque " + e.getSoldeManquant() + " €");
    // On peut proposer un crédit, envoyer une alerte...
}
`}
		</Code>
	</Slide>

	<!-- BONNES PRATIQUES -->
	<Slide>
		<h3>Bonnes pratiques</h3>
		<ul class="text-xl">
			<li class="fragment">
				✅ Attraper des exceptions <b>spécifiques</b> plutôt que <code>Exception</code>
			</li>
			<li class="fragment">✅ Ne jamais laisser un <code>catch</code> vide</li>
			<li class="fragment">✅ Utiliser <code>finally</code> pour libérer les ressources</li>
			<li class="fragment">✅ Logger les exceptions pour le debug</li>
			<li class="fragment">✅ Créer des exceptions métier personnalisées</li>
			<li class="fragment">❌ Ne pas utiliser les exceptions pour le contrôle de flux normal</li>
		</ul>
		<aside class="notes">
			Le catch vide est le pire anti-pattern : on avale l'erreur et on ne sait jamais ce qui s'est
			passé. Pour le logging, utilisez un framework comme SLF4J/Logback en entreprise. Les
			exceptions sont coûteuses en performance, ne les utilisez pas pour le flux normal.
		</aside>
	</Slide>

	<Slide>
		<h3>❌ Mauvais exemple</h3>
		<Code>
			{`
try {
    // Un gros bloc de code
    compte.retirer(100);
    compte.deposer(50);
    compte.calculerInterets();
} catch (Exception e) {
    // Ne rien faire... 😱
}
`}
		</Code>
		<p class="fragment text-red-400 mt-4">
			Problèmes : catch trop large, pas de gestion, on masque les erreurs !
		</p>
	</Slide>

	<Slide>
		<h3>✅ Bon exemple</h3>
		<Code>
			{`
try {
    compte.retirer(100);
} catch (SoldeInsuffisantException e) {
    logger.error("Retrait impossible", e);
    notifierClient(e.getMessage());
} catch (CompteBloque e) {
    logger.warn("Compte bloqué", e);
    redirigerVersSupport();
} finally {
    connexionBD.close();
}
`}
		</Code>
		<p class="fragment text-green-400 mt-4">
			✅ Exceptions spécifiques, gestion appropriée, logging, cleanup
		</p>
	</Slide>

	<!-- TRY-WITH-RESOURCES -->
	<Slide>
		<h3>Try-with-resources (Java 7+)</h3>
		<p>Gestion automatique des ressources (fichiers, connexions...).</p>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h4 class="text-red-400">❌ Avant</h4>
				<Code>
					{`
FileReader fr = null;
try {
    fr = new FileReader("test.txt");
    // ... lecture ...
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) {
        try {
            fr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`}
				</Code>
			</div>
			<div>
				<h4 class="text-green-400">✅ Maintenant</h4>
				<Code>
					{`
try (FileReader fr = 
        new FileReader("test.txt")) {
    // ... lecture ...
    // fr.close() automatique !
} catch (IOException e) {
    e.printStackTrace();
}
`}
				</Code>
			</div>
		</div>
		<aside class="notes">
			try-with-resources est arrivé en Java 7. Plus jamais de finally pour fermer un fichier !
			L'objet doit implémenter AutoCloseable. close() est appelé automatiquement. On peut déclarer
			plusieurs ressources séparées par des points-virgules.
		</aside>
	</Slide>

	<!-- CAS D'USAGE ENTREPRISE -->
	<Slide>
		<h3>💼 Cas d'usage entreprise</h3>
		<div class="text-xl">
			<p class="font-bold text-accent-200">API REST</p>
			<Code>
				{`
@PostMapping("/comptes/{id}/retrait")
public ResponseEntity<?> retirer(@PathVariable Long id, @RequestBody double montant) {
    try {
        compteService.retirer(id, montant);
        return ResponseEntity.ok("Retrait effectué");
    } catch (SoldeInsuffisantException e) {
        return ResponseEntity.status(400).body(e.getMessage());
    } catch (CompteIntrouvableException e) {
        return ResponseEntity.status(404).body(e.getMessage());
    } catch (Exception e) {
        logger.error("Erreur serveur", e);
        return ResponseEntity.status(500).body("Erreur interne");
    }
}
`}
			</Code>
			<p class="fragment mt-4">
				Les exceptions permettent de renvoyer les <b>bons codes HTTP</b> !
			</p>
		</div>
	</Slide>

	<!-- RÉCAPITULATIF -->
	<Slide>
		<h3>Récapitulatif</h3>
		<table class="text-xl mt-4">
			<tr>
				<td class="p-3"><code class="text-important">try/catch</code></td>
				<td class="p-3">Gérer les exceptions</td>
			</tr>
			<tr>
				<td class="p-3"><code class="text-important">throw</code></td>
				<td class="p-3">Lancer une exception</td>
			</tr>
			<tr>
				<td class="p-3"><code class="text-important">throws</code></td>
				<td class="p-3">Déclarer qu'une méthode peut lancer</td>
			</tr>
			<tr>
				<td class="p-3"><code class="text-important">finally</code></td>
				<td class="p-3">Code exécuté dans tous les cas</td>
			</tr>
			<tr>
				<td class="p-3"><code class="text-important">try-with-resources</code></td>
				<td class="p-3">Gestion automatique des ressources</td>
			</tr>
		</table>
		<p class="fragment mt-8 text-accent-200 font-bold">
			💼 Les exceptions sont essentielles pour la robustesse des applications en production !
		</p>
		<aside class="notes">
			Résumé à connaître par cœur pour l'examen. throw vs throws est une question classique. En
			entreprise, la gestion des exceptions fait partie du quotidien du développeur. Un code sans
			gestion d'erreur n'est pas un code professionnel.
		</aside>
	</Slide>
</Slide>
