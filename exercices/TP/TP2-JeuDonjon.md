# TP 2 — Donjon & Dragons : La Quête du Code Propre

## Contexte

Vous êtes développeur dans un petit studio de jeux vidéo indépendant. Votre chef de projet, passionné de jeux de rôle, vous confie le développement d'un prototype de jeu de type "Dungeon Crawler" en mode texte.

Il vous explique sa vision :

> "Je veux un jeu simple mais fun. Le joueur contrôle un personnage qui explore un donjon, combat des monstres, ramasse des objets, et essaie de survivre le plus longtemps possible. Pour le prototype, pas besoin de graphismes, tout se fait en console. L'important, c'est que le gameplay soit là."

Votre chef de projet est créatif mais... disons qu'il a tendance à avoir de nouvelles idées en permanence. Préparez-vous à voir le cahier des charges évoluer.

---

## Étape 1 — Le prototype minimal

Votre chef vous envoie le premier brief :

> "Pour commencer, on fait simple. Un personnage avec des points de vie, qui peut attaquer des monstres. Les monstres ont aussi des points de vie et peuvent attaquer. Quand les PV tombent à zéro, on meurt. C'est la base."

### Ce que vous devez réaliser

Créez un programme Java qui permet de :

1. **Créer un personnage joueur** avec :
   - Un nom
   - Des points de vie (100 par défaut)
   - Une force d'attaque (10 par défaut)

2. **Créer des monstres** avec :
   - Un nom (Gobelin, Orc, Squelette...)
   - Des points de vie
   - Une force d'attaque

3. **Système de combat tour par tour** :
   - Le joueur et le monstre s'attaquent à tour de rôle
   - Les dégâts réduisent les points de vie
   - Le combat continue jusqu'à ce qu'un des deux tombe à 0 PV
   - Affichage de l'état après chaque tour

4. **Enchaîner plusieurs combats** :
   - Après avoir vaincu un monstre, un nouveau apparaît
   - Le joueur conserve ses PV entre les combats
   - Compter le nombre de monstres vaincus

### Exemple d'affichage attendu

```
=== COMBAT ===
Héros (PV: 100) vs Gobelin (PV: 30)

Tour 1:
Héros attaque Gobelin pour 10 dégâts
Gobelin (PV: 20)
Gobelin attaque Héros pour 5 dégâts
Héros (PV: 95)

Tour 2:
Héros attaque Gobelin pour 10 dégâts
Gobelin (PV: 10)
Gobelin attaque Héros pour 5 dégâts
Héros (PV: 90)

...

Victoire ! Gobelin vaincu !
Monstres vaincus: 1

Un nouvel ennemi apparaît: Orc (PV: 50)
...
```

### Questions à vous poser AVANT de coder

- Comment représenter le personnage et les monstres ?
- Ont-ils des points communs ? Des différences ?
- Comment gérer le système de tours ?
- Comment créer différents types de monstres ?

**Prenez 10 minutes pour réfléchir à votre structure avant de coder.**

---

## Étape 2 — "On ajoute des classes de personnages !"

Votre chef de projet revient avec de nouvelles idées :

> "C'est bien, mais c'est un peu basique. Je veux des classes de personnages ! Un Guerrier qui tape fort mais n'a pas de magie, un Mage qui peut lancer des sorts, et un Voleur qui peut esquiver les attaques. Et les monstres aussi devraient avoir des capacités spéciales !"

### Nouvelles spécifications

#### Classes de personnages

1. **Guerrier**
   - PV de base : 150
   - Force : 15
   - Capacité spéciale : "Frappe puissante" — double les dégâts mais ne peut être utilisée qu'une fois tous les 3 tours

2. **Mage**
   - PV de base : 80
   - Force : 5
   - Points de mana : 50
   - Capacité spéciale : "Boule de feu" — inflige 30 dégâts, coûte 20 mana

3. **Voleur**
   - PV de base : 100
   - Force : 10
   - Capacité spéciale : "Esquive" — 30% de chance d'éviter une attaque ennemie

#### Capacités spéciales des monstres

1. **Gobelin** : Attaque normale seulement
2. **Orc** : "Rage" — quand il tombe sous 25% de PV, sa force double
3. **Squelette** : "Résurrection" — peut revenir une fois avec 50% de ses PV max
4. **Dragon** (boss) : "Souffle de feu" — attaque tous les 2 tours pour 25 dégâts

### Ce que vous devez adapter

- Le joueur choisit sa classe au début
- Chaque tour, le joueur peut choisir entre attaque normale et capacité spéciale (si disponible)
- Les monstres utilisent leurs capacités selon leurs règles

### Questions à vous poser

- Comment représenter les différentes classes de personnages ?
- Comment gérer les capacités spéciales qui ont des mécaniques très différentes ?
- Comment éviter de dupliquer le code de combat ?
- Comment gérer les cooldowns, le mana, les probabilités ?

**Si vous avez des `if (classe == "GUERRIER")` partout, c'est un signe d'alerte.**

---

## Étape 3 — "Et l'inventaire !"

Une semaine plus tard :

> "J'ai eu une super idée ce week-end ! Il faut un système d'inventaire ! Le joueur peut ramasser des objets sur les monstres vaincus et les utiliser. Des potions de soin, des armes, des armures... Et les armes et armures doivent pouvoir être équipées !"

### Nouveau système d'objets

#### Types d'objets

1. **Potions**
   - Potion de soin : restaure 50 PV
   - Potion de mana : restaure 30 mana (utile pour le mage)
   - Potion de force : +5 force pendant 3 tours

2. **Armes** (équipables, une seule à la fois)
   - Épée rouillée : +5 force
   - Épée en acier : +10 force
   - Épée légendaire : +20 force
   - Baguette magique : +10 dégâts aux sorts (mage uniquement)
   - Dagues jumelles : +8 force, +10% esquive (voleur uniquement)

3. **Armures** (équipables, une seule à la fois)
   - Armure en cuir : réduit les dégâts reçus de 5
   - Armure en fer : réduit les dégâts reçus de 10
   - Robe enchantée : +20 mana max (mage uniquement)

#### Système de loot

- Chaque monstre vaincu a une chance de lâcher un objet
- Gobelin : 50% de chance de drop, objets communs
- Orc : 75% de chance de drop, objets communs ou rares
- Dragon : 100% de chance de drop, objet rare ou légendaire

#### Inventaire

- Le joueur peut porter maximum 10 objets
- Il peut utiliser une potion à son tour (au lieu d'attaquer)
- Il peut équiper une arme et une armure
- Certains objets sont réservés à certaines classes

### Ce que vous devez implémenter

- Système d'inventaire avec capacité limitée
- Différents types d'objets avec des comportements différents
- Équipement et modification des stats
- Drop aléatoire de loot après les combats
- Restriction de certains objets par classe

### Questions à vous poser

- Comment représenter les différents types d'objets ?
- Comment gérer le fait qu'une arme modifie les stats du personnage ?
- Comment gérer les restrictions de classe sur les objets ?
- Comment calculer les stats finales du personnage (base + équipement + effets temporaires) ?

**Attention à ne pas transformer votre code en usine à gaz de `if/else`.**

---

## Attendus fonctionnels

À la fin du TP, votre jeu doit permettre de :

### Personnage
- [ ] Choisir une classe parmi Guerrier, Mage, Voleur
- [ ] Afficher les stats du personnage (incluant équipement)
- [ ] Utiliser la capacité spéciale de sa classe
- [ ] Gérer le mana pour le Mage
- [ ] Gérer les cooldowns de capacités

### Combat
- [ ] Combattre des monstres tour par tour
- [ ] Les monstres utilisent leurs capacités spéciales
- [ ] Afficher clairement l'état du combat à chaque tour
- [ ] Enchaîner les combats après victoire
- [ ] Détecter la défaite du joueur

### Inventaire
- [ ] Ramasser des objets (loot)
- [ ] Afficher l'inventaire
- [ ] Utiliser des potions
- [ ] Équiper armes et armures
- [ ] Respecter les restrictions de classe
- [ ] Gérer la limite de capacité (10 objets)

### Interface console
- [ ] Menu d'actions clair à chaque tour
- [ ] Affichage lisible et informatif
- [ ] Gestion des entrées invalides

---

## Pièges classiques dans lesquels vous allez probablement tomber

### Piège n°1 : Le personnage "tout-en-un"

Vous pourriez être tenté de créer une seule classe `Personnage` avec un attribut `classe` et tous les attributs possibles :

```
Personnage:
- classe: String ("GUERRIER", "MAGE", "VOLEUR")
- pv: int
- force: int
- mana: int (0 si pas mage)
- cooldownFrappePuissante: int (ignoré si pas guerrier)
- chanceEsquive: double (0 si pas voleur)
```

Et ensuite des méthodes remplies de conditions :

```
public void utiliserCapaciteSpeciale() {
    if (classe.equals("GUERRIER")) {
        // logique frappe puissante
    } else if (classe.equals("MAGE")) {
        // logique boule de feu
    } else if (classe.equals("VOLEUR")) {
        // logique esquive
    }
}
```

**Pourquoi c'est un piège ?**
- Code difficile à lire et à maintenir
- Ajouter une nouvelle classe = modifier des dizaines d'endroits
- Beaucoup d'attributs inutiles selon la classe
- Les comportements sont mélangés

> **Point pédagogique pour l'enseignant :**
> C'est le moment idéal pour introduire l'**héritage** et les **classes abstraites**. Une classe abstraite `Personnage` avec des sous-classes `Guerrier`, `Mage`, `Voleur` permet à chaque classe d'avoir ses propres attributs et sa propre implémentation de `utiliserCapaciteSpeciale()`.

### Piège n°2 : La confusion Personnage/Monstre

Vous pourriez avoir du code dupliqué entre les personnages et les monstres car ils ont des points communs (PV, attaque, prise de dégâts) mais aussi des différences.

**Pourquoi c'est un piège ?**
- Code dupliqué pour les mécaniques communes
- Difficile de faire combattre un personnage contre un monstre de manière polymorphique

> **Point pédagogique pour l'enseignant :**
> C'est le moment d'introduire le concept d'**interface** ou de **classe abstraite parente commune**. Un `Combattant` (interface ou classe abstraite) peut définir les méthodes communes : `attaquer()`, `recevoirDegats()`, `estVivant()`, etc. Le personnage et les monstres implémentent/héritent de ce contrat.

### Piège n°3 : Les objets comme simples données

Vous pourriez créer des objets qui ne sont que des conteneurs de données :

```
class Objet {
    String type; // "POTION", "ARME", "ARMURE"
    String nom;
    int bonus;
}
```

Et mettre toute la logique d'utilisation ailleurs :

```
public void utiliserObjet(Objet o, Personnage p) {
    if (o.type.equals("POTION")) {
        if (o.nom.equals("Potion de soin")) {
            p.setPv(p.getPv() + 50);
        } else if (o.nom.equals("Potion de mana")) {
            p.setMana(p.getMana() + 30);
        } // ...
    } else if (o.type.equals("ARME")) {
        // ...
    }
}
```

**Pourquoi c'est un piège ?**
- L'objet ne sait rien faire
- Toute la logique est ailleurs, difficile à maintenir
- Ajouter un type d'objet = modifier plein de code

> **Point pédagogique pour l'enseignant :**
> C'est le moment de parler du **polymorphisme** appliqué aux objets. Chaque type d'objet devrait savoir comment s'utiliser. Une interface `Utilisable` avec une méthode `utiliser(Personnage cible)` permet à chaque potion d'implémenter son propre effet.

### Piège n°4 : L'équipement géré par des flags

Pour gérer l'équipement, vous pourriez faire :

```
class Personnage {
    Arme armeEquipee;
    Armure armureEquipee;
    
    public int getForce() {
        int force = this.forceBase;
        if (armeEquipee != null) {
            force += armeEquipee.getBonus();
        }
        return force;
    }
}
```

Et quand vous ajoutez des effets temporaires (potion de force), ça devient :

```
boolean effetForceActif = false;
int dureeEffetForce = 0;
int bonusEffetForce = 0;

public int getForce() {
    int force = this.forceBase;
    if (armeEquipee != null) {
        force += armeEquipee.getBonus();
    }
    if (effetForceActif) {
        force += bonusEffetForce;
    }
    return force;
}
```

**Pourquoi c'est un piège ?**
- Chaque nouvel effet = nouveaux attributs et nouvelles conditions
- Code de plus en plus complexe
- Difficile de combiner plusieurs effets

> **Point pédagogique pour l'enseignant :**
> C'est le moment d'introduire le pattern **Decorator** ou un système d'**effets empilables**. Les modifications de stats peuvent être des objets qui s'appliquent au personnage et peuvent être retirés.

### Piège n°5 : La gestion aléatoire dispersée

Le loot, les esquives, les coups critiques... impliquent de l'aléatoire. Vous pourriez avoir `Random` instancié partout :

```
// Dans la classe Voleur
Random rand = new Random();
if (rand.nextDouble() < 0.3) {
    // esquive
}

// Dans la classe Monstre
Random rand = new Random();
if (rand.nextDouble() < 0.5) {
    // drop loot
}

// Etc.
```

**Pourquoi c'est un piège ?**
- Difficile à tester (l'aléatoire rend les tests imprévisibles)
- Création d'objets Random inutiles
- Impossible de "tricher" pour déboguer

> **Point pédagogique pour l'enseignant :**
> C'est le moment de parler d'**injection de dépendances** et de comment rendre le code testable. Un générateur de nombres aléatoires peut être injecté, permettant de le remplacer par un générateur déterministe pour les tests.

---

## Étapes facultatives (différenciation pédagogique)

### Niveau 1 — Pour ceux qui terminent l'étape 3

#### Extension 1.1 : Système de niveaux et d'expérience

Votre chef de projet :

> "Il faudrait que le personnage puisse progresser ! Gagner de l'expérience en tuant des monstres, monter de niveau, devenir plus fort !"

**Ce que vous devez implémenter :**
- Points d'expérience gagnés par monstre vaincu
- Montée de niveau avec amélioration des stats
- Nouvelles capacités débloquées à certains niveaux
- Par exemple :
  - Niveau 5 : Le Guerrier débloque "Coup tourbillon" (attaque tous les ennemis)
  - Niveau 5 : Le Mage débloque "Éclair" (15 dégâts, 10 mana)
  - Niveau 5 : Le Voleur débloque "Attaque sournoise" (double dégâts si esquive réussie au tour précédent)

#### Extension 1.2 : Combats multiples

> "Et si le joueur pouvait affronter plusieurs monstres à la fois ? Genre une horde de gobelins !"

**Ce que vous devez implémenter :**
- Combats contre plusieurs monstres simultanément
- Le joueur choisit quelle cible attaquer
- Tous les monstres vivants attaquent le joueur
- Certaines capacités affectent tous les ennemis

### Niveau 2 — Pour ceux qui vont vite

#### Extension 2.1 : Système de salles/donjon

> "Le joueur devrait explorer un donjon ! Des salles connectées, avec des monstres dans certaines, des coffres dans d'autres, et un boss à la fin !"

**Ce que vous devez implémenter :**
- Génération d'un donjon avec plusieurs salles
- Navigation entre les salles (nord, sud, est, ouest)
- Différents types de salles :
  - Salle de combat
  - Salle au trésor (coffre à ouvrir)
  - Salle piégée (dégâts si pas détecté)
  - Salle du boss
- Affichage de la carte (les salles visitées)

**Question piège :** Comment représenter la structure du donjon ? Les connexions entre salles ?

> **Point pédagogique pour l'enseignant :**
> C'est le moment d'introduire les structures de données type **graphe** ou **arbre**, et la notion de **composition** pour représenter un donjon contenant des salles.

#### Extension 2.2 : Système de sauvegarde

> "On devrait pouvoir sauvegarder sa partie et la reprendre plus tard !"

**Ce que vous devez implémenter :**
- Sauvegarde de l'état complet du jeu dans un fichier
- Chargement d'une partie sauvegardée
- Gestion de plusieurs sauvegardes

**Question piège :** Comment sérialiser des objets polymorphiques (différentes classes de personnages, différents types d'objets) ?

### Niveau 3 — Pour les très rapides

#### Extension 3.1 : Arbre de compétences

> "Chaque classe devrait avoir un arbre de compétences ! Le joueur gagne des points de compétence en montant de niveau et peut débloquer des capacités dans un arbre avec des dépendances !"

**Ce que vous devez implémenter :**
- Arbre de compétences propre à chaque classe
- Points de compétence à dépenser
- Dépendances entre compétences (il faut X pour débloquer Y)
- Visualisation de l'arbre dans la console

**Question piège :** Comment représenter l'arbre de compétences ? Comment éviter de dupliquer la logique d'arbre pour chaque classe ?

> **Point pédagogique pour l'enseignant :**
> C'est un excellent cas d'utilisation de la **récursivité** pour parcourir l'arbre, et du pattern **Composite** pour représenter la structure.

#### Extension 3.2 : Mode multijoueur local

> "Et si deux joueurs pouvaient jouer ensemble ? Chacun son personnage, ils combattent en équipe !"

**Ce que vous devez implémenter :**
- Création de deux personnages (potentiellement de classes différentes)
- Tours de combat alternés entre les deux joueurs
- Capacités qui affectent l'allié (soin, buff)
- Monstres qui choisissent leur cible

#### Extension 3.3 : Éditeur de monstres

> "On devrait pouvoir créer ses propres monstres avec un éditeur !"

**Ce que vous devez implémenter :**
- Interface pour créer un monstre personnalisé
- Définition des stats, capacités spéciales
- Sauvegarde des monstres créés
- Intégration dans le jeu

---

## Limites pédagogiques à annoncer aux étudiants

### Ce qui est INTERDIT

1. **Pas de switch/if-else sur les types de classes**
   ```java
   // INTERDIT
   if (personnage instanceof Guerrier) { ... }
   else if (personnage instanceof Mage) { ... }
   ```
   Si vous avez besoin de savoir le type exact, c'est que votre conception est mauvaise.

2. **Pas d'attributs inutiles**
   Un Guerrier ne devrait pas avoir d'attribut `mana` à 0.
   Chaque classe ne doit avoir que les attributs qui lui sont utiles.

3. **Pas de "God Class"**
   Une classe `Jeu` ou `Combat` qui fait tout est un signe de mauvaise conception.
   Chaque classe a une responsabilité claire.

4. **Pas de magic numbers**
   ```java
   // INTERDIT
   if (pv < 25) { rage = true; }
   
   // CORRECT
   private static final double SEUIL_RAGE = 0.25;
   if (pv < pvMax * SEUIL_RAGE) { rage = true; }
   ```

5. **Pas de duplication**
   Si vous copiez-collez du code, arrêtez et refactorisez.

### Ce qui est OBLIGATOIRE

1. **Le polymorphisme en action**
   On doit pouvoir appeler `combattant.attaquer(cible)` sans savoir si c'est un joueur ou un monstre.

2. **Les objets savent faire des choses**
   Un objet `PotionDeSoin` sait comment soigner. On ne met pas cette logique ailleurs.

3. **Tests manuels documentés**
   Écrivez des scénarios de test et exécutez-les :
   - "Je crée un Mage, je combats un Gobelin, j'utilise Boule de feu..."
   - "Je crée un Voleur, j'esquive une attaque, je ramasse une arme..."

4. **Code lisible**
   Un autre étudiant doit pouvoir comprendre votre code en le lisant.

---

## Suggestions d'improvisation pour l'enseignant

### Pendant l'étape 1

- "Et si je vous demandais d'ajouter un Archer qui attaque à distance ?"
- "Comment feriez-vous pour afficher différemment un gobelin et un dragon ?"
- "Vos monstres et personnages partagent du code. Comment éviter la duplication ?"

### Pendant l'étape 2

- "Montrez-moi comment le Mage utilise sa capacité spéciale"
- "Et si le Mage pouvait apprendre plusieurs sorts ?"
- "Comment ajouteriez-vous un Paladin qui peut soigner ET combattre ?"

### Pendant l'étape 3

- "Et si une épée pouvait aussi donner des PV supplémentaires ?"
- "Comment géreriez-vous un objet maudit qui donne un bonus mais aussi un malus ?"
- "Et si un objet pouvait évoluer en étant utilisé ?"

### Pour challenger les meilleurs

- "Comment rendriez-vous le système de combat extensible pour ajouter facilement de nouvelles mécaniques ?" (effets de statut, éléments, etc.)
- "Comment feriez-vous pour que l'IA des monstres soit plus intelligente ?"
- "Comment géreriez-vous des combos entre capacités ?"

### Questions de réflexion

- "Combien de classes avez-vous créées ? Pourquoi ?"
- "Si je veux ajouter un nouveau type de monstre en 5 minutes, c'est possible ?"
- "Où est la logique de combat ? Est-elle facile à trouver ?"
- "Votre Guerrier sait-il qu'il est un Guerrier, ou c'est le code extérieur qui le sait ?"

---

## Critères d'évaluation (indicatifs)

### Gameplay (30%)
- Le jeu est jouable et amusant
- Les règles sont respectées
- Pas de bugs bloquants

### Conception orientée objet (40%)
- Hiérarchie de classes pertinente
- Polymorphisme utilisé correctement
- Pas de switch sur les types
- Encapsulation respectée

### Qualité du code (20%)
- Code lisible et bien organisé
- Nommage clair
- Pas de duplication

### Évolutivité (10%)
- Facilité à ajouter une nouvelle classe de personnage
- Facilité à ajouter un nouveau type d'objet
- Facilité à ajouter un nouveau monstre

---

## Conseils pour bien démarrer

1. **Dessinez avant de coder** — Un schéma rapide de vos classes et leurs relations
2. **Commencez simple** — Faites marcher l'étape 1 avant de penser à la suite
3. **Testez souvent** — À chaque ajout, vérifiez que tout fonctionne encore
4. **Refactorisez tôt** — Dès que vous voyez du code dupliqué, factorisez
5. **Posez des questions** — L'enseignant est là pour vous guider

Le but est de créer un jeu fun, mais aussi de produire du code dont vous pouvez être fiers !

Bon courage, et que le code soit avec vous !
