<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
</script>

<Slide>
	<h3>Les collections en Java</h3>
	<Slide>
		<h3>Présentation</h3>
		<p>
			Les collections en Java sont des classes qui permettent de stocker et de manipuler des
			collections d'objets. <br />Elles offrent des fonctionnalités avancées pour gérer des
			collections de manière dynamique, en permettant d'ajouter, de supprimer, de rechercher et de
			parcourir les éléments d'une collection. <br />Les collections en Java sont regroupées dans le
			paquetage <code>java.util</code>.
		</p>
		<aside class="notes">
			Les collections, c'est ce qui remplace les tableaux classiques. Plus flexibles, plus
			puissantes. En entreprise, vous utiliserez des List, Map, Set tous les jours. C'est le pain
			quotidien du développeur Java. Le framework Collections date de Java 1.2 et a été amélioré
			avec la généricité en Java 5.
		</aside>
	</Slide>
	<Slide>
		<h3>Les différentes collections</h3>
		<ul>
			<li>
				Listes : <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>,
				<code>Stack</code>
			</li>
			<li>Ensembles : <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code></li>
			<li>Cartes : <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code></li>
			<li>Files d'attente : <code>PriorityQueue</code></li>
		</ul>
		<aside class="notes">
			En pratique, vous utiliserez surtout ArrayList et HashMap. Ce sont les plus courantes.
			LinkedList est rarement utile en pratique malgré ce qu'on apprend en algorithmique. HashSet
			pour les doublons, TreeSet si vous avez besoin d'un ordre trié.
		</aside>
	</Slide>
	<Slide>
		<div class="flex mt-10 justify-center">
			<PlantUml
				>{`
@startuml

interface Iterable
interface Collection
interface Queue
interface List
interface Set
interface SortedSet
interface NavigableSet
abstract class AbstractSet
class TreeSet
interface Deque
class PriorityQueue
abstract class AbstractSequentialList
abstract class AbstractCollection
abstract class AbstractList
class ArrayList
class Vector
class Stack

Iterable <|.. Collection
Collection <|.. Queue
Collection <|.. List
Collection <|.. Set
Queue <|.. Deque
Set <|.. SortedSet
SortedSet <|.. NavigableSet
Queue <|.. PriorityQueue
Collection <|.. AbstractCollection
AbstractCollection  <|-- AbstractSet
Set <|.. AbstractSet

AbstractCollection <|-- AbstractList
List <|.. AbstractList
NavigableSet <|.. TreeSet
AbstractSet <|-- TreeSet
AbstractSequentialList <|-- LinkedList
Deque <|.. LinkedList
AbstractList <|-- AbstractSequentialList
AbstractList <|-- ArrayList
AbstractList <|-- Vector
Vector <|-- Stack
@enduml

`}</PlantUml
			>
		</div>
	</Slide>
	<Slide>
		<h3>L'interface <code>Iterable</code></h3>
		<p>
			L'interface <code>Iterable</code> est une interface générique qui définit une méthode
			<code>iterator()</code> qui permet de parcourir les éléments d'une collection. <br />Elle est
			implémentée par toutes les classes qui représentent des collections d'objets.
		</p>
		<aside class="notes">
			Iterable, c'est ce qui permet d'utiliser la boucle for-each : for (String s : maListe). Si une
			classe implémente Iterable, vous pouvez itérer dessus avec for-each. C'est la base du pattern
			Iterator qu'on verra peut-être dans les Design Patterns.
		</aside>
	</Slide><Slide>
		<h2>Les collections en Java</h2>
		<h3>L'interface <code>Collection</code></h3>
		<p>
			L'interface <code>Collection</code> est une interface générique qui définit les méthodes
			permettant de manipuler une collection d'objets. <br />Elle étend l'interface
			<code>Iterable</code>
			et définit des méthodes pour ajouter, supprimer, rechercher et parcourir les éléments d'une collection.
		</p>
	</Slide>
	<Slide>
		<h3>L'interface <code>List</code>, <code>Queue</code> et <code>Set</code></h3>
		<div class="flex flex-row gap-4">
			<p class="flex-1">
				L'interface <code>List</code> définit les méthodes pour manipuler une collection d'objets ordonnée
				et indexée.
			</p>
			<p class="flex-1">
				L'interface <code>Queue</code> manipule une collection d'objets organisée selon le principe de
				file d'attente.
			</p>
			<p class="flex-1">
				L'interface <code>Set</code> manipule une collection d'objets sans doublons.
			</p>
		</div>
	</Slide>
	<Slide>
		<h3>Les classes <code>ArrayList</code>, <code>PriorityQueue</code> et <code>TreeSet</code></h3>
		<div class="flex flex-row gap-4">
			<p class="flex-1">
				La classe <code>ArrayList</code> est une implémentation de l'interface <code>List</code> qui stocke
				les éléments dans un tableau dynamique.
			</p>
			<p class="flex-1">
				La classe <code>PriorityQueue</code> est une implémentation de l'interface
				<code>Queue</code> qui stocke les éléments dans une file d'attente de priorité.
			</p>
			<p class="flex-1">
				La classe <code>TreeSet</code> est une implémentation de l'interface <code>SortedSet</code> qui
				stocke les éléments dans un arbre binaire équilibré.
			</p>
		</div></Slide
	>
	<Slide>
		<p>Diagramme de classes des collections en Java</p>
		<PlantUml
			>{`
		@startuml

interface Iterable {
    + iterator() : Iterator
}

interface Collection {
    + size() : int
    + isEmpty() : boolean
    + contains(Object) : boolean
    + add(Object) : boolean
    + remove(Object) : boolean
    + clear()
}

interface Queue {
    + element() : Object
    + offer(Object) : boolean
    + peek() : Object
    + poll() : Object
}

interface List {
    + get(int) : Object
    + set(int, Object) : Object
    + add(int, Object)
    + remove(int) : Object
    
}

interface Set {

}

class ArrayList {
    + trimToSize()
    + ensureCapacity(int)
	...
}

class PriorityQueue {
	...
    
}

class TreeSet {
    + ceiling(Object) : Object
    + floor(Object) : Object
    + higher(Object) : Object
    + lower(Object) : Object
}

Collection <|.. List
Collection <|.. Queue
Collection <|.. Set
Iterable <|.. Collection
List <|-- ArrayList
Queue <|-- LinkedList
Set <|-- TreeSet

@enduml
`}</PlantUml
		>
	</Slide>
	<Slide>
		<h3>Application</h3>
		<Code
			>{`
		List<String> arrayList = new ArrayList<>();
		Queue<String> priorityQueue = new PriorityQueue<>();
		Set<String> treeSet = new TreeSet<>();
		
		//Code commun aux collections :
		arrayList.add("Java");
		prorityQueue.add("Java");
		treeSet.add("Java");

		//Code commun au Iterable :
		for (String element : arrayList) {
			System.out.println(element);
		}
		for (String element : priorityQueue) {
			System.out.println(element);
		}
		//Spécifique à chaque implémentation :
		priorityQueue.poll();
		treeSet.ceiling("Java");
		arrayList.get(0);
		`}
		</Code>
		<aside class="notes">
			Notez la déclaration : List au lieu d'ArrayList. C'est une bonne pratique ! On programme
			contre l'interface, pas l'implémentation. Si demain on change pour LinkedList, rien ne casse.
			Chaque collection a ses méthodes spécifiques, mais le code générique fonctionne pour toutes.
		</aside>
	</Slide>
</Slide>
