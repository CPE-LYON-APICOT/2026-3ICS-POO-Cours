<script lang="ts">
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Refactoring en services</h3>

	<Slide>
		<p>
			Appliquer SOLID concrètement, c'est <span class="text-important">extraire</span> du code
			en classes dédiées : les <b>services</b>.
		</p>
		<p class="fragment mt-4">
			Un service est une classe qui encapsule une responsabilité métier précise.
		</p>
		<aside class="notes">
			Le terme "service" vient de l'architecture en couches. En Spring, les classes annotées @Service
			suivent exactement ce principe. Mais on n'a pas besoin de framework pour structurer son code.
		</aside>
	</Slide>

	<Slide>
		<h3>Avant : le code monolithique</h3>
		<Code className="text-sm">{`
class GestionBibliotheque {
    List<Livre> catalogue = new ArrayList<>();
    Map<String, List<Livre>> emprunts = new HashMap<>();

    Livre rechercherParTitre(String titre) {
        for (Livre l : catalogue)
            if (l.getTitre().contains(titre)) return l;
        return null;
    }

    void emprunter(String adherent, Livre livre) {
        if (!catalogue.contains(livre)) throw new RuntimeException("Livre inconnu");
        emprunts.computeIfAbsent(adherent, k -> new ArrayList<>()).add(livre);
        catalogue.remove(livre);
        System.out.println("Email envoyé à " + adherent);
    }

    void retourner(String adherent, Livre livre) {
        emprunts.getOrDefault(adherent, List.of()).remove(livre);
        catalogue.add(livre);
    }

    void afficherStatistiques() {
        System.out.println("Livres disponibles : " + catalogue.size());
        System.out.println("Emprunts en cours : " + emprunts.values().stream()
            .mapToInt(List::size).sum());
    }
}
`}</Code>
		<aside class="notes">
			Cette classe fait tout : recherche, emprunt, notification, statistiques.
			Elle viole SRP. Voyons comment extraire étape par étape.
		</aside>
	</Slide>

	<Slide>
		<h3>Identifier les responsabilités</h3>
		<div class="grid grid-cols-2 gap-4 mt-6">
			<div class="p-4 bg-accent-950 rounded-lg fragment">
				<h4 class="text-blue-400">Recherche</h4>
				<p class="text-xl"><code>rechercherParTitre()</code></p>
			</div>
			<div class="p-4 bg-accent-950 rounded-lg fragment">
				<h4 class="text-green-400">Emprunt</h4>
				<p class="text-xl"><code>emprunter()</code>, <code>retourner()</code></p>
			</div>
			<div class="p-4 bg-accent-950 rounded-lg fragment">
				<h4 class="text-purple-400">Notification</h4>
				<p class="text-xl"><code>System.out.println("Email...")</code></p>
			</div>
			<div class="p-4 bg-accent-950 rounded-lg fragment">
				<h4 class="text-orange-400">Statistiques</h4>
				<p class="text-xl"><code>afficherStatistiques()</code></p>
			</div>
		</div>
		<p class="fragment mt-6">4 responsabilités = 4 raisons de changer = 4 services potentiels.</p>
		<aside class="notes">
			En pratique, on ne crée pas toujours un service par méthode. L'idée est de regrouper ce qui
			change ensemble. Recherche et catalogue pourraient être dans le même service.
		</aside>
	</Slide>

	<Slide>
		<h3>Extraire les services</h3>
		<Code>{`
class RechercheService {
    private final List<Livre> catalogue;

    RechercheService(List<Livre> catalogue) {
        this.catalogue = catalogue;
    }

    Livre rechercherParTitre(String titre) {
        for (Livre l : catalogue)
            if (l.getTitre().contains(titre)) return l;
        return null;
    }
}
`}</Code>
		<aside class="notes">
			Le service reçoit ses dépendances par constructeur (Dependency Inversion).
			Il ne s'occupe que de la recherche. Il est facile à tester unitairement.
		</aside>
	</Slide>

	<Slide>
		<h3>Extraire les services</h3>
		<Code>{`
interface NotificationService {
    void notifier(String destinataire, String message);
}

class EmailNotificationService implements NotificationService {
    public void notifier(String destinataire, String message) {
        System.out.println("Email à " + destinataire + " : " + message);
    }
}
`}</Code>
		<p class="fragment mt-4">
			On passe par une <b>interface</b> : demain on pourra envoyer des SMS
			sans modifier le code d'emprunt.
		</p>
		<aside class="notes">
			C'est le D de SOLID en action. Le service d'emprunt dépendra de NotificationService,
			pas de EmailNotificationService. On injecte l'implémentation.
		</aside>
	</Slide>

	<Slide>
		<h3>Résultat</h3>
		<PlantUml>{`
@startuml
!theme crt-green
skinparam backgroundColor transparent

class Bibliotheque {
  - recherche: RechercheService
  - emprunt: EmpruntService
  - stats: StatistiquesService
}

class RechercheService {
  + rechercherParTitre(titre): Livre
}

class EmpruntService {
  + emprunter(adherent, livre)
  + retourner(adherent, livre)
}

interface NotificationService {
  + notifier(dest, msg)
}

class StatistiquesService {
  + afficher()
}

Bibliotheque *-- RechercheService
Bibliotheque *-- EmpruntService
Bibliotheque *-- StatistiquesService
EmpruntService ..> NotificationService
@enduml
`}</PlantUml>
		<aside class="notes">
			La classe Bibliothèque devient un orchestrateur léger. Chaque service est testable
			indépendamment. On peut changer la notification sans toucher aux emprunts.
		</aside>
	</Slide>

	<Slide>
		<h3>L'IDE comme allié</h3>
		<p>Les IDE modernes automatisent ces extractions :</p>
		<ul class="text-xl mt-6">
			<li class="fragment">
				<span class="text-important">Extract Method</span> — sélectionnez du code → clic droit → Extract Method
			</li>
			<li class="fragment">
				<span class="text-important">Extract Class</span> — déplace des méthodes et attributs dans une nouvelle classe
			</li>
			<li class="fragment">
				<span class="text-important">Extract Interface</span> — crée une interface à partir des méthodes publiques
			</li>
			<li class="fragment">
				<span class="text-important">Move</span> — déplace une classe dans un autre package
			</li>
		</ul>
		<p class="fragment mt-6 text-accent-200">
			Raccourci IntelliJ : <code>Ctrl+Alt+M</code> (Extract Method)
		</p>
		<aside class="notes">
			Montrer en live si possible. IntelliJ et VS Code avec les extensions Java font ça très bien.
			Le refactoring automatique préserve les références : pas de risque de casser le code.
			C'est plus rapide et plus sûr que de copier-coller à la main.
		</aside>
	</Slide>

	<Slide>
		<h3>Quand refactorer ?</h3>
		<ul class="text-xl mt-6">
			<li class="fragment">Votre classe dépasse <b>100-150 lignes</b></li>
			<li class="fragment">Vous utilisez des commentaires pour séparer des "blocs" dans la classe</li>
			<li class="fragment">Deux modificateurs qui ne se connaissent pas touchent au même fichier</li>
			<li class="fragment">Un changement dans un coin casse un test dans un autre</li>
		</ul>
		<p class="fragment mt-6 text-accent-200">
			Ces signaux sont des <span class="text-important">code smells</span> :
			des indicateurs qu'il est temps de restructurer.
		</p>
		<aside class="notes">
			Le refactoring n'est pas un luxe : c'est de l'hygiène. Comme ranger son bureau régulièrement.
			Plus on attend, plus c'est coûteux. Martin Fowler recommande de refactorer en continu,
			pas en "sprint de nettoyage".
		</aside>
	</Slide>
</Slide>
