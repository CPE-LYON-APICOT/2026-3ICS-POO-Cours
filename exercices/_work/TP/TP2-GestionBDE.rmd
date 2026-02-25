# TP 2 — Application de Gestion du Bureau Des Étudiants (BDE)

## Contexte

Félicitations ! Vous venez d'être élus au Bureau Des Étudiants de votre école. Le président sortant vous fait un rapide topo :

> « On gérait tout sur Excel jusqu'à maintenant, mais c'est devenu ingérable. On a 1500 étudiants, une dizaine d'événements par mois, des partenariats, une boutique de goodies, et on doit gérer les cotisations. Le trésorier précédent a démissionné parce qu'il passait ses nuits à faire des RECHERCHEV. On a besoin d'une vraie appli. »

Quand vous demandez des précisions, il vous répond :

> « Commencez par gérer les adhérents et les événements, on verra le reste après. Ah, et l'appli doit être prête pour la semaine d'intégration dans 3 semaines. »

Vous voilà donc chargés de développer une application de gestion pour le BDE. Le cahier des charges est... disons... "évolutif".

---

## Étape 1 — Gestion basique des adhérents et événements

### Ce que le président vous demande

> « Pour commencer, j'ai juste besoin de gérer la liste des adhérents et de créer des événements. Un adhérent, c'est simple : nom, prénom, email, promotion (genre "3ICS" ou "4ETI"), et s'il a payé sa cotisation ou pas. Pour les événements, on a besoin du nom, de la date, du lieu, du prix, et de la liste des inscrits. »

### Votre mission

Vous devez créer une application console qui permet de :

1. **Ajouter un adhérent** au BDE
   - Saisir ses informations (nom, prénom, email, promotion)
   - Par défaut, la cotisation n'est pas payée

2. **Enregistrer le paiement** de la cotisation d'un adhérent
   - Rechercher l'adhérent par son email
   - Marquer sa cotisation comme payée

3. **Créer un événement**
   - Définir le nom, la date, le lieu et le prix

4. **Inscrire un adhérent à un événement**
   - Vérifier que l'adhérent existe
   - L'ajouter à la liste des participants

5. **Afficher la liste des participants** à un événement

6. **Afficher le récapitulatif** d'un adhérent (ses infos + les événements auxquels il est inscrit)

### Contraintes techniques

- L'application fonctionne en mode console avec un menu textuel
- Les données sont stockées en mémoire (pas de base de données)
- Vous devez pouvoir avoir plusieurs événements et plusieurs adhérents

### Exemple d'interaction attendue

```
=== BDE Manager ===
1. Ajouter un adhérent
2. Payer une cotisation
3. Créer un événement
4. Inscrire à un événement
5. Afficher participants d'un événement
6. Afficher fiche adhérent
7. Quitter

Votre choix : 1
Nom : Dupont
Prénom : Marie
Email : marie.dupont@cpe.fr
Promotion : 3ICS
Adhérent ajouté avec succès !

Votre choix : 3
Nom de l'événement : Soirée d'intégration
Date (JJ/MM/AAAA) : 15/09/2026
Lieu : Le Ninkasi
Prix : 15
Événement créé avec succès !

Votre choix : 4
Email de l'adhérent : marie.dupont@cpe.fr
Nom de l'événement : Soirée d'intégration
Inscription réussie !
```

### Questions à vous poser avant de coder

- Comment allez-vous stocker les adhérents ? Les événements ?
- Comment faire le lien entre un adhérent et les événements auxquels il participe ?
- Que se passe-t-il si on essaie d'inscrire quelqu'un qui n'existe pas ?

---

## Étape 2 — Le trésorier s'en mêle

Vous avez à peine terminé l'étape 1 que le trésorier débarque dans votre local :

> « Super votre truc ! Mais j'ai besoin de gérer l'argent. Les cotisations, c'est 30€ pour les étudiants CPE et 50€ pour les extérieurs. Et pour les événements, les adhérents ont une réduction de 20%. Ah, et les membres du bureau (président, trésorier, secrétaire, etc.) ont tout gratuit. »

Puis il ajoute, l'air de rien :

> « Et il faudrait que je puisse voir le solde du BDE. On reçoit l'argent des cotisations et des inscriptions, et on a des dépenses pour organiser les événements. Je veux savoir combien on a en caisse à tout moment. »

### Nouvelles fonctionnalités à implémenter

1. **Différencier les types d'adhérents**
   - Étudiant CPE : cotisation à 30€
   - Extérieur : cotisation à 50€
   - Membre du bureau : cotisation gratuite + événements gratuits

2. **Appliquer les réductions sur les événements**
   - Adhérent avec cotisation payée : -20% sur le prix des événements
   - Membre du bureau : gratuit
   - Non-adhérent (cotisation non payée) : plein tarif

3. **Calculer le prix d'inscription** à un événement pour un adhérent donné

4. **Gérer les finances du BDE**
   - Enregistrer les recettes (cotisations + inscriptions événements)
   - Enregistrer les dépenses (coût d'organisation des événements)
   - Afficher le solde actuel

5. **Ajouter un coût d'organisation** aux événements
   - Chaque événement a un budget prévisionnel
   - Ce budget est une dépense pour le BDE

### Réflexions imposées

Avant de modifier votre code, répondez à ces questions :

- Où allez-vous mettre la logique de calcul du prix de la cotisation ?
- Où allez-vous mettre la logique de calcul du prix d'un événement pour un adhérent ?
- Comment allez-vous différencier un étudiant CPE d'un extérieur d'un membre du bureau ?
- Si demain on ajoute un nouveau type d'adhérent (ancien élève, par exemple), que devrez-vous modifier ?

### Attention !

Si vous êtes tentés d'écrire quelque chose comme :

```java
if (adherent.getType().equals("CPE")) {
    prix = 30;
} else if (adherent.getType().equals("EXTERIEUR")) {
    prix = 50;
} else if (adherent.getType().equals("BUREAU")) {
    prix = 0;
}
```

**STOP !** Appelez l'enseignant. Ce code va devenir un cauchemar à maintenir.

---

## Étape 3 — Les clubs entrent en jeu

La secrétaire générale vous interpelle pendant la pause :

> « J'ai oublié de vous dire, on a aussi des clubs ! Le club photo, le club musique, le club robotique... Chaque club a un président, un budget propre, et peut organiser ses propres événements. Les membres d'un club ont accès gratuit aux événements de leur club. »

Elle réfléchit quelques secondes puis ajoute :

> « Ah et un adhérent peut être membre de plusieurs clubs. Et un club peut co-organiser un événement avec le BDE ou avec un autre club. Dans ce cas, les frais sont partagés et les membres de tous les clubs organisateurs ont l'événement gratuit. »

### Nouvelles fonctionnalités

1. **Créer des clubs**
   - Chaque club a un nom, un président (qui doit être adhérent), et un budget

2. **Gérer les membres des clubs**
   - Un adhérent peut rejoindre un ou plusieurs clubs
   - Chaque club a sa propre liste de membres

3. **Événements de club**
   - Un club peut créer des événements
   - Les membres du club ont ces événements gratuits
   - Le coût est déduit du budget du club (pas du BDE)

4. **Co-organisation d'événements**
   - Un événement peut être organisé par le BDE seul, un club seul, ou plusieurs entités ensemble
   - Les frais sont répartis entre les organisateurs
   - Les membres de toutes les entités organisatrices ont l'événement gratuit

5. **Afficher les événements auxquels un adhérent a droit gratuitement**
   - Événements du BDE (s'il est membre du bureau)
   - Événements de ses clubs
   - Événements co-organisés par ses clubs

### Le piège qui vous attend

Si vous avez un attribut `organisateur` de type `String` dans votre classe événement... vous allez souffrir.

Si vous avez dupliqué du code entre "événement BDE" et "événement club"... vous allez souffrir.

Si vous n'avez pas prévu qu'un événement puisse avoir plusieurs organisateurs... vous allez souffrir.

C'est le moment de repenser votre conception.

### Questions de conception

- Comment représenter le fait qu'un événement peut être organisé par différentes entités (BDE, clubs) ?
- Comment éviter de dupliquer le code de gestion des événements ?
- Comment gérer élégamment le fait qu'un adhérent peut avoir des "droits" venant de différentes sources ?

---

## Étape 4 — La boutique de goodies

Le vice-président communication arrive avec une nouvelle demande :

> « On a une boutique de goodies ! On vend des sweats, des t-shirts, des tote bags... Chaque article a un nom, un prix, et un stock. Les adhérents ont 10% de réduction, les membres du bureau 50%. Et certains articles sont réservés aux adhérents. »

Puis, avec un grand sourire :

> « Ah et on fait des packs ! Genre le "Pack Intégration" avec un sweat + un tote bag + une place pour la soirée d'intégration, le tout avec 30% de réduction. Un pack peut contenir des articles ET des places pour des événements. »

### Nouvelles fonctionnalités

1. **Gérer un catalogue d'articles**
   - Créer des articles avec nom, prix, stock
   - Certains articles sont réservés aux adhérents

2. **Vendre un article**
   - Vérifier le stock
   - Appliquer la réduction selon le statut de l'acheteur
   - Décrémenter le stock
   - Enregistrer la recette

3. **Créer des packs**
   - Un pack contient plusieurs éléments (articles et/ou places événements)
   - Un pack a un prix global avec réduction

4. **Acheter un pack**
   - Tout le contenu du pack doit être disponible
   - Appliquer les règles spécifiques de chaque élément
   - Gérer le stock et les inscriptions

### Réflexion architecturale

Un pack contient des choses très différentes : des objets physiques (goodies) et des choses immatérielles (inscriptions à des événements). Pourtant, on veut pouvoir les manipuler de manière uniforme (calculer un prix, vérifier la disponibilité, "consommer" l'achat).

Comment représenter cette situation en POO ?

> 💡 **Indice pédagogique** : C'est le moment de découvrir (ou redécouvrir) la notion d'interface. Si vous n'y arrivez pas, appelez l'enseignant pour une explication sur les interfaces.

---

## Étape 5 — Les partenariats

Le président revient avec des nouvelles :

> « On a signé des partenariats ! Certaines entreprises nous donnent de l'argent en échange de visibilité. Mais c'est compliqué... Il y a plusieurs niveaux : Bronze (500€), Silver (1000€), Gold (2000€), Platinum (5000€). Chaque niveau donne des avantages différents. »

Il sort une feuille froissée de sa poche :

> « Bronze : logo sur nos affiches. Silver : pareil + stand aux événements. Gold : pareil + publication sur nos réseaux. Platinum : pareil + naming d'un événement + places gratuites pour leurs employés. »

Et comme si ça ne suffisait pas :

> « Ah et les partenaires peuvent offrir des réductions à nos adhérents. Genre -15% chez le partenaire pizza. Il faut qu'on puisse générer une "carte avantages" pour chaque adhérent avec tous les avantages auxquels il a droit. »

### Nouvelles fonctionnalités

1. **Gérer les partenaires**
   - Créer un partenaire avec nom, niveau de partenariat
   - Enregistrer le versement du partenariat (recette pour le BDE)

2. **Avantages par niveau**
   - Chaque niveau donne des droits spécifiques
   - Les niveaux supérieurs cumulent les avantages des niveaux inférieurs

3. **Réductions partenaires**
   - Un partenaire peut offrir une réduction aux adhérents
   - La réduction a une description et un pourcentage

4. **Générer la carte avantages d'un adhérent**
   - Liste des réductions partenaires
   - Événements gratuits (bureau, clubs)
   - Réductions sur la boutique

### Le piège classique

Vous allez être tentés de faire :

```java
if (niveau.equals("BRONZE")) {
    // trucs bronze
} else if (niveau.equals("SILVER")) {
    // trucs bronze + trucs silver
} else if (niveau.equals("GOLD")) {
    // trucs bronze + trucs silver + trucs gold
} else if (niveau.equals("PLATINUM")) {
    // tout le reste
}
```

Ce code est :
- Dupliqué (on répète les avantages des niveaux inférieurs)
- Fragile (si on ajoute un niveau "Diamond", il faut tout modifier)
- Illisible (le "else if" va faire 50 lignes)

Comment faire mieux ?

---

## Attendus fonctionnels (récapitulatif)

À la fin du TP, votre application doit permettre de :

### Gestion des adhérents
- [ ] Créer un adhérent (CPE, extérieur, ou membre du bureau)
- [ ] Enregistrer le paiement d'une cotisation
- [ ] Afficher la fiche complète d'un adhérent
- [ ] Générer la carte avantages d'un adhérent

### Gestion des événements
- [ ] Créer un événement (BDE, club, ou co-organisé)
- [ ] Calculer le prix pour un adhérent donné
- [ ] Inscrire un adhérent
- [ ] Afficher les participants

### Gestion des clubs
- [ ] Créer un club avec son président
- [ ] Ajouter/retirer des membres
- [ ] Gérer le budget du club

### Gestion de la boutique
- [ ] Gérer un catalogue d'articles
- [ ] Créer des packs (articles + événements)
- [ ] Effectuer des ventes avec les réductions appropriées

### Gestion des partenaires
- [ ] Enregistrer des partenaires avec leur niveau
- [ ] Gérer les réductions partenaires

### Gestion financière
- [ ] Suivre les recettes et dépenses
- [ ] Afficher le solde du BDE
- [ ] Afficher le solde de chaque club

---

## Pièges classiques dans lesquels vous allez tomber

### Piège 1 : Le switch géant sur le type d'adhérent

Vous allez probablement écrire quelque chose comme :

```java
public double calculerPrixCotisation(Adherent a) {
    switch(a.getType()) {
        case "CPE": return 30;
        case "EXTERIEUR": return 50;
        case "BUREAU": return 0;
        default: throw new RuntimeException("Type inconnu");
    }
}
```

**Pourquoi c'est un problème ?**
- Chaque fois qu'on ajoute un type, il faut modifier ce switch
- Ce switch va se dupliquer partout (prix cotisation, réduction événement, réduction boutique...)
- Le compilateur ne vous préviendra pas si vous oubliez un cas

> 💡 **Point pédagogique** : L'enseignant peut expliquer ici le polymorphisme. Chaque type d'adhérent devrait savoir calculer son propre prix de cotisation.

### Piège 2 : Le modèle anémique

Vous allez probablement créer des classes comme :

```java
public class Adherent {
    private String nom;
    private String prenom;
    private String email;
    private String type;
    private boolean cotisationPayee;
    
    // Que des getters et setters...
}
```

Et ensuite une classe "utilitaire" :

```java
public class GestionAdherents {
    public static double calculerPrixCotisation(Adherent a) { ... }
    public static double calculerPrixEvenement(Adherent a, Evenement e) { ... }
    public static boolean peutAcheterArticle(Adherent a, Article art) { ... }
}
```

**Pourquoi c'est un problème ?**
- L'adhérent ne "sait" rien faire, il est juste un sac de données
- Toute la logique est dispersée dans des classes utilitaires
- Impossible de profiter du polymorphisme

> 💡 **Point pédagogique** : Un objet doit encapsuler ses données ET ses comportements. Un adhérent devrait savoir calculer ce qu'il doit payer.

### Piège 3 : L'organisateur en String

```java
public class Evenement {
    private String organisateur; // "BDE" ou "Club Photo" ou ...
}
```

**Pourquoi c'est un problème ?**
- Comment gérer un événement co-organisé ?
- Comment accéder au budget de l'organisateur pour déduire les frais ?
- Comment vérifier si un adhérent est membre de l'organisateur ?

> 💡 **Point pédagogique** : L'enseignant peut introduire ici la notion d'interface. Un organisateur est "quelque chose qui peut organiser des événements et qui a un budget".

### Piège 4 : La duplication Article / Place événement

Pour les packs, vous allez peut-être faire :

```java
public class Pack {
    private List<Article> articles;
    private List<Evenement> evenements;
    
    public double calculerPrix() {
        double total = 0;
        for (Article a : articles) {
            total += a.getPrix();
        }
        for (Evenement e : evenements) {
            total += e.getPrix();
        }
        return total * 0.7; // -30%
    }
    
    public boolean estDisponible() {
        for (Article a : articles) {
            if (a.getStock() <= 0) return false;
        }
        for (Evenement e : evenements) {
            if (e.getPlacesRestantes() <= 0) return false;
        }
        return true;
    }
}
```

**Pourquoi c'est un problème ?**
- Code dupliqué entre les deux boucles
- Si on ajoute un nouveau type d'élément (ex: abonnement), il faut tout modifier
- Le pack "sait" comment fonctionnent les articles et les événements

> 💡 **Point pédagogique** : Interface ! Un "élément achetable" sait donner son prix et dire s'il est disponible.

### Piège 5 : Les niveaux de partenariat en chaîne de if

```java
public List<String> getAvantages(Partenaire p) {
    List<String> avantages = new ArrayList<>();
    
    if (p.getNiveau().equals("BRONZE") || p.getNiveau().equals("SILVER") 
        || p.getNiveau().equals("GOLD") || p.getNiveau().equals("PLATINUM")) {
        avantages.add("Logo sur affiches");
    }
    
    if (p.getNiveau().equals("SILVER") || p.getNiveau().equals("GOLD") 
        || p.getNiveau().equals("PLATINUM")) {
        avantages.add("Stand aux événements");
    }
    
    // ... etc, de plus en plus illisible
}
```

**Pourquoi c'est un problème ?**
- Duplication des conditions
- Impossible à maintenir
- Risque d'erreur élevé

> 💡 **Point pédagogique** : On peut utiliser l'héritage ou la composition pour modéliser cette hiérarchie d'avantages.

### Piège 6 : Pas de gestion d'erreurs

```java
public void inscrireEvenement(String email, String nomEvenement) {
    Adherent a = trouverAdherent(email);
    Evenement e = trouverEvenement(nomEvenement);
    e.ajouterParticipant(a);
}
```

**Que se passe-t-il si :**
- L'email n'existe pas ?
- L'événement n'existe pas ?
- L'adhérent est déjà inscrit ?
- Il n'y a plus de places ?

> 💡 **Point pédagogique** : Introduction aux exceptions. Certaines erreurs sont "attendues" (adhérent pas trouvé) et doivent être gérées proprement.

---

## Étapes facultatives (différenciation pédagogique)

### Niveau 1 — Pour ceux qui terminent rapidement

#### 1.1 Historique des transactions

Le trésorier veut un historique complet :
- Chaque recette et dépense doit être horodatée
- On veut pouvoir filtrer par période (ce mois-ci, cette année)
- On veut voir les transactions par catégorie (cotisations, événements, boutique, partenariats)

#### 1.2 Événements avec jauge

Certains événements ont un nombre de places limité :
- Ajouter une capacité maximale optionnelle aux événements
- Refuser les inscriptions quand c'est complet
- Gérer une liste d'attente

#### 1.3 Adhésion avec date d'expiration

Les cotisations ne sont plus "payées ou non" mais ont une date de validité :
- La cotisation est valable un an
- Un adhérent peut renouveler avant expiration
- Les réductions ne s'appliquent que si l'adhésion est valide

### Niveau 2 — Pour ceux qui vont très vite

#### 2.1 Système de points de fidélité

Les adhérents cumulent des points :
- 1 point par euro dépensé (événements + boutique)
- Les points peuvent être convertis en réduction (100 points = 5€)
- Certains articles ne sont achetables qu'avec des points

#### 2.2 Votes et élections

Le BDE doit organiser des élections :
- Créer des scrutins (élection bureau, votes sur événements...)
- Seuls les adhérents à jour de cotisation peuvent voter
- Plusieurs modes de scrutin (uninominal, proportionnel)
- Afficher les résultats

#### 2.3 Système de notifications

Les adhérents peuvent s'abonner à des notifications :
- Nouvel événement dans mes clubs
- Places disponibles pour un événement complet
- Nouvelle réduction partenaire
- Cotisation bientôt expirée

Comment implémenter ce système sans coupler fortement toutes les classes ?

> 💡 **Indice** : Pattern Observer

### Niveau 3 — Pour les très rapides

#### 3.1 Import/Export des données

- Exporter les adhérents au format CSV
- Exporter les finances au format compatible Excel
- Importer des adhérents depuis un fichier
- Générer un rapport PDF de l'activité du BDE

Comment faire pour que l'ajout d'un nouveau format d'export soit facile ?

#### 3.2 Multi-BDE (Fédération)

Votre application doit maintenant gérer plusieurs BDE :
- Chaque école a son BDE
- Un événement inter-BDE peut être organisé
- Un adhérent d'un BDE peut s'inscrire à un événement d'un autre BDE (tarif "extérieur")
- Chaque BDE a son propre budget

Cette évolution va-t-elle casser votre conception ?

#### 3.3 Système de permissions

Les utilisateurs de l'application ont des rôles différents :
- Adhérent lambda : voir ses infos, s'inscrire aux événements
- Responsable club : gérer son club
- Membre du bureau : accès à tout son périmètre
- Trésorier : accès aux finances
- Admin : accès total

Comment implémenter ce système de permissions de manière extensible ?

---

## Limites pédagogiques à annoncer aux étudiants

### Ce qui est INTERDIT

1. **Les switch/if géants sur les types**
   - Pas de `if (type.equals("CPE")) ... else if (type.equals("EXTERIEUR")) ...`
   - Pas de `switch(niveau) { case "BRONZE": ... case "SILVER": ... }`
   - Utilisez le polymorphisme !

2. **Les classes "sac de données"**
   - Une classe avec uniquement des getters/setters est suspecte
   - Les comportements doivent être dans les objets

3. **Le copier-coller**
   - Si vous copiez du code, c'est qu'il y a une abstraction à trouver
   - Demandez-vous : "Est-ce que je peux factoriser ?"

4. **Les attributs de type String pour représenter un type**
   - Pas de `String type = "CPE"` ou `String organisateur = "BDE"`
   - Utilisez des classes, des énumérations, ou des interfaces

### Ce qui est OBLIGATOIRE

1. **Refactoriser quand le besoin évolue**
   - Avant de commencer une nouvelle étape, regardez si votre code actuel est adapté
   - N'hésitez pas à tout restructurer si nécessaire

2. **Expliquer votre design à l'enseignant**
   - Avant de passer à l'étape suivante, expliquez vos choix de conception
   - Dessinez vos classes sur papier si besoin

3. **Tester chaque fonctionnalité**
   - Ne passez pas à l'étape suivante si l'étape actuelle ne marche pas
   - Créez un jeu de test (quelques adhérents, quelques événements)

4. **Gérer les erreurs proprement**
   - Pas de `return null` silencieux
   - Utilisez des exceptions avec des messages clairs

---

## Suggestions d'improvisation pour l'enseignant

### Au début du TP

- Demander aux étudiants de dessiner leur conception avant de coder
- Faire un tour de table pour voir les différentes approches

### Après l'étape 1

> « Tiens, j'ai oublié de vous dire, on a un partenariat avec une école de commerce. Leurs étudiants peuvent aussi adhérer, mais ils paient le tarif extérieur. Ah, et les anciens élèves, ils ont un tarif intermédiaire de 40€. »

Observer les réactions : ceux qui ont fait du polymorphisme ajoutent une classe, ceux qui ont fait du switch pleurent.

### Après l'étape 2

> « Le club escalade veut organiser un événement avec le club rando. Comment on gère ça ? »

Révéler les faiblesses des conceptions monolithiques.

### Pendant l'étape 4

> « Ah, on veut aussi vendre des services ! Genre des cours de soutien ou des covoiturages. C'est comme un article mais sans stock. »

Tester si leur abstraction "chose achetable" est vraiment générique.

### Pour pimenter

> « Le président veut un rapport : combien chaque adhérent a-t-il dépensé au total cette année ? »

Ceux qui n'ont pas centralisé leurs transactions vont souffrir.

> « Un club veut quitter le BDE et devenir une association indépendante. Il emporte ses événements passés et ses membres. »

Tester les dépendances entre objets.

> « On veut faire un événement gratuit mais uniquement pour les 50 premiers inscrits. Les suivants paient plein tarif. »

Complexifier les règles de tarification.

### Pour le fun

> « Le club memes veut organiser un événement où le prix dépend du nombre de followers Instagram des participants. Plus t'as de followers, plus tu paies. »

Absurde, mais ça force à réfléchir à l'extensibilité.

---

## Critères d'évaluation suggérés

### Fonctionnel (40%)
- L'application répond aux besoins demandés
- Les calculs de prix sont corrects
- La gestion financière est cohérente

### Conception (40%)
- Utilisation appropriée de l'héritage
- Utilisation appropriée des interfaces
- Pas de duplication de code
- Encapsulation respectée
- Code extensible

### Qualité du code (20%)
- Nommage explicite
- Gestion des erreurs
- Code lisible et bien structuré

---

## Notes pour l'enseignant

### Objectifs pédagogiques de ce TP

1. **Faire ressentir la douleur du mauvais design**
   - Les étudiants qui font des switch vont souffrir à chaque évolution
   - L'objectif est qu'ils comprennent POURQUOI la POO aide

2. **Introduire les interfaces naturellement**
   - Le besoin des packs (articles + événements) pousse vers les interfaces
   - Le concept d'organisateur (BDE ou club) pousse vers les interfaces

3. **Montrer l'intérêt de l'encapsulation**
   - Les calculs de prix deviennent ingérables sans encapsulation
   - Les réductions empilées (adhérent + membre bureau + membre club) deviennent un cauchemar

4. **Pratiquer la refactorisation**
   - Le code de l'étape 1 n'est probablement pas adapté à l'étape 3
   - Apprendre à remettre en question son design

### Timing suggéré

- Étape 1 : 45 minutes
- Étape 2 : 1 heure
- Étape 3 : 1 heure
- Étape 4 : 45 minutes
- Étape 5 : 30 minutes
- Refactoring et discussion : 1 heure

### Points d'attention

- Certains étudiants voudront tout coder avant de réfléchir → les freiner
- D'autres voudront faire le design parfait avant d'écrire une ligne → les pousser à itérer
- Encourager le dessin sur papier pour la conception
- Faire des points collectifs après chaque étape pour comparer les approches

### Solution(s) attendue(s)

Plusieurs designs sont valables. L'important est la cohérence et l'extensibilité :

- Une interface `Organisateur` implémentée par `BDE` et `Club`
- Une interface `Achetable` implémentée par `Article`, `PlaceEvenement`, `Pack`
- Une hiérarchie de classes pour les types d'adhérents
- Une classe abstraite ou interface pour les niveaux de partenariat
- Un système central de gestion des transactions

Le TP est réussi si les étudiants peuvent expliquer pourquoi leur conception facilite l'ajout de nouvelles fonctionnalités.
