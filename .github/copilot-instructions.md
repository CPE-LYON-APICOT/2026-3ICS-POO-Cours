# Instructions Copilot pour le cours POO 3ICS

## Contexte du projet

Ce projet est un **cours de Programmation Orientée Objet (POO) en Java** destiné aux étudiants de 3ème année ICS à CPE Lyon. Le contenu pédagogique est présenté sous forme de slides interactives utilisant :

- **SvelteKit** comme framework frontend
- **Reveal.js** pour les présentations
- **Tailwind CSS** pour le styling
- **TypeScript** pour le typage

## Structure du projet

- `src/lib/Chapitres/` : Composants Svelte représentant chaque chapitre du cours
- `src/lib/deck/` : Composants utilitaires pour les slides (Code, PlantUml, Slide, etc.)
- `src/lib/plantuml/` : Diagrammes PlantUML
- `exercices/` : TD, TP et tutoriels pour les étudiants
- `_DS/` : Sujets et corrigés des DS (Devoirs Surveillés)
- `quizz/` : Fichiers CSV de questions pour l'outil de quizz interactif

## Conventions de code

### Composants Svelte (slides)

- Utiliser `<Slide>` pour créer une nouvelle slide
- Utiliser `<Code>` pour afficher du code Java avec coloration syntaxique
- Utiliser `<PlantUml>` pour les diagrammes UML
- Ajouter des `<aside class="notes">` pour les notes du présentateur
- Utiliser les fragments Reveal.js pour les animations : `class="fragment"`

### Philosophie de création des slides

- **Ne pas hésiter à créer BEAUCOUP de slides** : une idée = une slide
- Privilégier des slides aérées plutôt que surchargées
- Découper les concepts complexes en plusieurs slides progressives
- Utiliser les fragments pour révéler le contenu étape par étape
- Chaque slide doit pouvoir être comprise en 30 secondes maximum

### Utilisation de PlantUML

Utiliser `<PlantUml>` systématiquement pour :

- **Diagrammes de classes** : relations entre classes, héritage, interfaces
- **Diagrammes de séquence** : interactions entre objets
- **Diagrammes d'objets** : instances et leurs états
- **Illustration de patterns** : Design Patterns, composition, etc.

Exemple d'utilisation :

```svelte
<PlantUml>
	{`
@startuml
class Vehicule {
  - marque: String
  + demarrer(): void
}
class Voiture extends Vehicule {
  - nbPortes: int
}
@enduml
`}
</PlantUml>
```

**Préférer PlantUML au code Java** quand il s'agit de montrer :

- La structure d'un système de classes
- Les relations entre entités (héritage, composition, agrégation)
- Le déroulement d'interactions (diagrammes de séquence)

### Code Java dans les exemples

- Écrire du **Java moderne** (Java 17+)
- Privilégier des exemples **simples et pédagogiques**
- Utiliser des noms de classes/méthodes **en français** quand c'est pertinent pour la compréhension
- Toujours inclure les **bonnes pratiques POO** :
  - Encapsulation (attributs privés, getters/setters)
  - Nommage explicite
  - Respect des conventions Java (camelCase, PascalCase)

### Thèmes POO couverts

1. **Introduction** : Concepts de base, classes et objets
2. **Encapsulation** : Visibilité, getters/setters
3. **Héritage** : extends, super, classes abstraites
4. **Polymorphisme** : Surcharge, redéfinition, liaison dynamique
5. **Interfaces** : Contrats, implémentations multiples
6. **Composition** : Agrégation, dépendances
7. **Collections** : List, Set, Map
8. **Généricité** : Types paramétrés
9. **Lambda** : Expressions lambda, streams
10. **Annotations** : Métadonnées, @Override
11. **Design Patterns** : Patterns de conception courants

## Style pédagogique

- **Progression logique** : Du simple au complexe
- **Exemples concrets** : Utiliser des métaphores du monde réel
- **Code commenté** : Expliquer chaque concept important
- **Mise en évidence** : Utiliser `text-important` pour les termes clés
- **Interactivité** : Utiliser les fragments pour révéler progressivement

## Création de Quizz

Pour chaque chapitre ou notion importante, créer des fichiers CSV de questions dans le dossier `quizz/`. Ces fichiers alimentent un outil de quizz interactif pour les étudiants.

### Format des fichiers CSV

Nom du fichier : `{chapitre}.csv` (ex: `encapsulation.csv`, `heritage.csv`)

Format CSV avec les colonnes :

| Type | Title | Correct | Choice | Choice | Choice | Choice | Choice | Choice | Choice |
|---|---|---|---|---|---|---|---|---|---|
| MCQ | Par exemple : quelle est la capitale de l'Ouganda ? | 1 |  |  |  |  |  |  |  |
| Poll | Par exemple : selon vous, faut-il faire plus pour lutter contre le   changement climatique ? |  |  |  |  |  |  |  |  |
| Rating | Par exemple : notez de 1 à 5 [1 =   pas du tout d'accord - 5 = entièrement d'accord] les éléments suivants : |  |  |  |  |  |  |  |  |
| OpenQuestion | Par exemple : décrivez les étudiants d'aujourd'hui en un mot |  |  |  |  |  |  |  |  |
| GuessNumber | Par exemple : combien de balles de tennis peut-on mettre dans un train ? |  |  |  |  |  |  |  |  |
| Matching | Par exemple : liez les capitales avec les pays |  | undefined --- undefined | undefined --- undefined | undefined --- undefined |  |  |  |  |
| Prioritization | Par exemple : quelle importance accordez-vous à ces futurs défis ? |  |  |  |  |  |  |  |  |
| Sorting | Par exemple : classez les périodes suivants par ordre chronologique |  |  |  |  |  |  |  |  |
| FillInTheBlanks | Par exemple : remplissez ce texte avec des couleurs |  | Les roses sont [rouges] et les violettes sont [bleues].      Le soleil est {{jaune, bleu, rose}}. |  |  |  |  |  |  |
| Brainstorm | Par exemple : quelles sont vos idées pour un meilleur Internet ? |  |  |  |  |  |  |  |  |
| Concordance | Par exemple : Un homme de 43 ans   vient consulter pour une douleur "en barre", médiane, dans la   région lombaire. Il a ressenti cette douleur deux jours après une séance de   natation alors qu'il n'est pas habitué à en pratiquer. |  |  |  | 3 | 5 | 10 | 15 | 6 |
| SCTJudgment | Par exemple : Un homme de 43 ans   vient consulter pour une douleur "en barre", médiane, dans la   région lombaire. Il a ressenti cette douleur deux jours après une séance de   natation alors qu'il n'est pas habitué à en pratiquer. |  |  | 4 | 7 | 10 | 3 |  |  |

### Exemple de contenu

```csv
question;reponse_correcte;reponse_fausse_1;reponse_fausse_2;reponse_fausse_3;explication
Quel mot-clé permet de déclarer une classe en Java ?;class;Class;new;type;Le mot-clé 'class' (en minuscules) permet de déclarer une nouvelle classe en Java.
Quel modificateur rend un attribut accessible uniquement dans la classe ?;private;public;protected;default;Le modificateur 'private' restreint l'accès à la classe elle-même.
```

### Bonnes pratiques pour les quizz

- **Varier les types de questions** : définitions, code à analyser, cas pratiques
- **Proposer des réponses plausibles** : les mauvaises réponses doivent être crédibles
- **Inclure une explication** : aide l'étudiant à comprendre son erreur
- **Couvrir les notions clés** du chapitre correspondant
- **Créer 10-15 questions par chapitre** pour une bonne couverture

## Commandes utiles

```bash
# Développement
pnpm run dev

# Build pour production
pnpm run build

# Déploiement GitHub Pages
pnpm run deploy

# Vérification TypeScript
pnpm run check
```

## Langue

- Le contenu pédagogique est en **français**
- Les commentaires de code peuvent être en français
- La documentation technique peut être en anglais ou français
