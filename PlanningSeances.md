# Planning du cours POO 3ICS — CPE Lyon 2025-2026

## Vue d'ensemble

| Séance | Durée | Thèmes | Statut |
|--------|-------|--------|--------|
| 1 | 2h | Introduction, Généralités, Encapsulation, Héritage, Composition, Interfaces | ✅ Terminé |
| 2 | 2h | Révisions, Polymorphisme avancé, Autoboxing, Records, Exceptions, SOLID, Refactoring, Static | ✅ Terminé |
| 3 | 2h | Collections, Généricité, Lambda / Streams | 🔲 À créer |
| 4 | 2h | Annotations, Design Patterns | 🔲 À créer |

---

## Séance 1 — Fondamentaux POO (terminé)

### Chapitres Svelte
- `Introduction.svelte` — Présentation du cours, objectifs
- `Généralités.svelte` — Classes, objets, attributs, méthodes, constructeurs
- `Encapsulation.svelte` — Modificateurs d'accès, getters/setters, validation
- `Heritage.svelte` — extends, super, classes abstraites, @Override
- `Composition.svelte` — "a un" vs "est un", agrégation, UML
- `Interfaces.svelte` — implements, contrats, default methods, instanceof

### Concepts introduits
- Classe, objet, instance, constructeur, `new`
- `private`, `public`, `protected`, package-private
- Getters / setters, encapsulation, validation
- `extends`, `super()`, `@Override`, classes abstraites, méthodes abstraites
- Composition vs héritage, agrégation, diagramme UML
- `interface`, `implements`, `default`, `instanceof`, héritage multiple par interfaces

### Quiz
- `exercices/output/TD/Seance1_wooclap.csv` (51 questions MCQ/Matching/FillInTheBlanks)

---

## Séance 2 — Approfondissement et bonnes pratiques (terminé)

### Chapitres Svelte
- `Seance2Revisions.svelte` — Quiz interactif de révision Séance 1
- `Polymorphisme.svelte` — Statique/dynamique, upcasting/downcasting, pattern matching
- `Autoboxing.svelte` — Wrappers, autoboxing/unboxing, pièges cache/null
- `Records.svelte` — Records Java 14+, immutabilité, compact constructors
- `Exceptions.svelte` — try/catch/finally, checked/unchecked, custom, try-with-resources
- `SOLID.svelte` — 5 principes avec exemples Java et diagrammes UML
- `Refactoring.svelte` — Extraction de services, refactoring IDE, code smells
- `Statique.svelte` — static attributs/méthodes, limitations

### Concepts introduits (nouveaux par rapport à Séance 1)
- Polymorphisme statique (surcharge) vs dynamique (redéfinition)
- Type statique vs type dynamique, liaison dynamique
- Upcasting (implicite), downcasting (explicite), `ClassCastException`
- Pattern matching `instanceof` (Java 16+)
- Classes wrapper (`Integer`, `Double`, `Boolean`, `Character`)
- Autoboxing / unboxing, cache Integer (-128 à 127), piège `null` → NPE
- `record` (Java 14+), immutabilité, compact constructor, record + interfaces
- `try`, `catch`, `finally`, `throw`, `throws`
- Exceptions checked vs unchecked, hiérarchie `Throwable`
- Exceptions personnalisées (`extends Exception`)
- `try-with-resources`, `AutoCloseable`
- SOLID : SRP, OCP, LSP, ISP, DIP
- Injection de dépendances via constructeur
- Extract Method, Extract Class, Extract Interface, Move Method, Rename
- Code smells : God Class, méthodes longues, couplage fort
- `static` attributs et méthodes, pas de `this` dans static

### Quiz
- `exercices/output/TD/Seance2_wooclap.csv` (45 questions)

### TD / TP associés (à générer)
- **TD Séance 2** (2h minimum) — Exercices sur : polymorphisme (collections hétérogènes, downcasting sûr), exceptions (gestion d'erreurs robuste, exceptions personnalisées), SOLID (identifier les violations, refactorer)
- **TP Séance 2** (4h) — Projet appliquant records, exceptions, SOLID, extraction de services

---

## Séance 3 — Collections, Généricité, Lambda (à créer)

### Chapitres existants à adapter
- `Généricité.svelte` — À vérifier et compléter
- `Collections.svelte` — À vérifier et compléter
- `Lambda.svelte` — À vérifier et compléter

### Plan recommandé (~70 slides)

#### Bloc 1 : Révisions Séance 2 (5 slides)
- Quiz interactif sur polymorphisme, exceptions, SOLID

#### Bloc 2 : Généricité (12 slides)
- Problème sans généricité (casts partout, `Object`)
- Syntaxe `<T>`, classes génériques, méthodes génériques
- Contraintes : `<T extends Comparable<T>>`
- Wildcards : `<?>`, `<? extends T>`, `<? super T>`
- PECS (Producer Extends, Consumer Super)
- Type erasure (notion)

#### Bloc 3 : Collections (15 slides)
- Hiérarchie Collection (diagramme UML)
- `List` : `ArrayList` vs `LinkedList`, opérations CRUD
- `Set` : `HashSet`, `TreeSet`, unicité
- `Map` : `HashMap`, `TreeMap`, clé-valeur
- `Queue` / `Deque`
- Itération : for-each, `Iterator`, `ListIterator`
- `Collections` utility class (sort, unmodifiable, etc.)

#### Bloc 4 : Lambda et Streams (15 slides)
- Interfaces fonctionnelles (`@FunctionalInterface`)
- Syntaxe lambda : `(params) -> expression`
- Références de méthodes : `String::toUpperCase`
- API Stream : `stream()`, `filter()`, `map()`, `collect()`
- Opérations intermédiaires vs terminales
- `Optional<T>`
- Comparaison impérative vs fonctionnelle

### Concepts qui seront introduits
- `<T>`, classes/méthodes génériques, wildcards, PECS
- `List`, `Set`, `Map`, `ArrayList`, `HashMap`, `HashSet`, `TreeMap`
- `Iterator`, `Iterable`, `Comparable`, `Comparator`
- `@FunctionalInterface`, lambda, `Predicate`, `Function`, `Consumer`, `Supplier`
- `Stream`, `filter`, `map`, `reduce`, `collect`, `forEach`
- `Optional`, `orElse`, `ifPresent`
- Références de méthodes

---

## Séance 4 — Annotations et Design Patterns (à créer)

### Chapitres existants à adapter
- `Annotations.svelte` — À vérifier et compléter
- `DP.svelte` — À vérifier et compléter

### Plan recommandé (~60 slides)

#### Bloc 1 : Révisions Séance 3 (5 slides)

#### Bloc 2 : Annotations (12 slides)
- Concept de métadonnées
- Annotations standard : `@Override`, `@Deprecated`, `@SuppressWarnings`
- `@FunctionalInterface` (lien avec Séance 3)
- Créer ses annotations (`@interface`)
- Rétention (`SOURCE`, `CLASS`, `RUNTIME`)
- Cibles (`ElementType`)
- Annotations et réflexion (introduction)

#### Bloc 3 : Design Patterns (20 slides)
- Pourquoi les patterns ?
- **Créationnels** : Singleton, Factory Method, Builder
- **Structurels** : Adapter, Decorator, Composite
- **Comportementaux** : Observer, Strategy, Iterator (lien avec Collections)
- Chaque pattern : problème → diagramme UML → code Java → cas d'usage

#### Bloc 4 : Synthèse du cours (5 slides)
- Récapitulatif de tous les concepts
- Ce qu'on attend au DS
- Ressources pour aller plus loin

---

## Conventions pour la génération

### Slides Svelte
- Composant racine : `<Slide>` avec slides imbriquées `<Slide>` pour les sous-slides
- Code Java : `<Code>{` backtick code backtick `}</Code>`
- Diagrammes : `<PlantUml>{` backtick @startuml...@enduml backtick `}</PlantUml>`
- Notes présentateur : `<aside class="notes">...</aside>`
- Fragments : `class="fragment"`
- Mise en valeur : `class="text-important"` ou `class="text-accent-200"`
- Fond de section : `data_background_gradient="linear-gradient(...)"`
- Titres sobres, pas d'émojis dans les `<h2>`/`<h3>`

### Quiz CSV (Wooclap)
- Format : `Type,Title,Correct,Choice,Choice,Choice,Choice,Choice,Choice,Choice`
- Types : MCQ, Matching, FillInTheBlanks
- MCQ : `Correct` = index 1-based de la bonne réponse
- Matching : `Choice` = `"texte --- correspondance"`
- FillInTheBlanks : `Choice` = phrase avec `[mot]` pour les trous, `{{opt1, opt2}}` pour choix
- Valeurs vides : `""`

### Imports dans presentation.svelte
- Ajouter l'import dans le bloc `<script>`
- Ajouter le composant dans le flux au bon endroit (après la séance précédente)
- Commenter les séances futures avec `<!-- -->`

---

## Historique de génération

| Date | Action | Fichiers |
|------|--------|----------|
| 2026 | Séance 1 créée | Introduction, Généralités, Encapsulation, Heritage, Composition, Interfaces, Exercices/Seance1 |
| 2026-03-03 | Séance 2 créée | Seance2Revisions, Polymorphisme (réécrit), Autoboxing, Records, SOLID, Refactoring + Exceptions, Statique (existants) |
