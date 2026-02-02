<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'
	import Collections from './Collections.svelte'
	import Composition from './Composition.svelte'
</script>

<Slide>
	<Slide>
		<h3>Les annotations</h3>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<p>
			Sur la plate-forme Java, une annotation est une interface lors de sa déclaration et une
			instance d'une classe qui implémente cette interface lors de son utilisation.<br />
			La définition d'une annotation nécessite une syntaxe particulière utilisant le mot clé @interface.
			Une annotation se déclare donc de façon similaire à une interface.
		</p>
		<Code>
			{`
                @interface MyAnnotation {
                    String value();
                    int number();
                    Class type();
                }`}
		</Code>
		<aside class="notes">
			Les annotations sont arrivées en Java 5. Avant, on utilisait des fichiers XML pour la config.
			Aujourd'hui, c'est le mécanisme central des frameworks modernes : Spring, Hibernate, JPA...
			Les annotations sont des métadonnées : elles décrivent le code sans le modifier directement.
		</aside>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>À quoi ça sert ?</h4>
		<p>
			À la manière des interfaces marqueur, les annotations permettent de marquer des éléments de
			code, que ce soit des méthodes ou des types, mais aussi de leur associer des informations
			supplémentaires.
		</p>
		<p>
			<strong>
				Fondamentalement, c'est un peu comme si vous déclariez une méthode getValue() dans une
				interface, et que vous l'implémentiez dans chacune des classes concrètes.<br />
				Toutefois, la différence est que vous n'avez pas besoin de fournir une implémentation pour les
				méthodes de l'annotation. En plus, l'annotation va se comporter un peu comme une liste d'attributs,
				or, vous savez qu'on ne peut pas mettre d'attributs dans une interface.
			</strong>
		</p>
		<aside class="notes">
			Les annotations sont lues soit à la compilation (ex: @Override), soit à l'exécution (ex: @Autowired).
			Par réflexion (reflection), on peut lire les annotations et agir en conséquence.
			C'est le cœur du "magic" de Spring : il scanne les classes et crée les beans selon les annotations.
		</aside>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Les annotations prédéfinies</h4>
		<p>
			Java définit un certain nombre d'annotations prédéfinies, qui sont utilisées dans des
			contextes particuliers. Par exemple, l'annotation <code>@Override</code> est utilisée pour indiquer
			qu'une méthode redéfinit une méthode de la classe mère. Vous l'avez déjà utilisée sans le savoir.
		</p>
		<p>
			En l'occurrence, cette dernière ne sert pas à grand-chose, si ce n'est vous mettre un avertissement au
			cas où vous vous trompiez dans le nom de la méthode.
		</p>
		<aside class="notes">
			Autres annotations standard : @Deprecated (méthode obsolète), @SuppressWarnings (ignorer les avertissements).
			@Override est super utile : si vous faites une faute de frappe, le compilateur vous prévient.
			Exemple : écrire equals(Object o) au lieu de equals(object o).
		</aside>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<p>
			Les annotations sont très utilisées dans les frameworks Java, comme Spring, Hibernate, JUnit,
			etc. Elles permettent de définir des comportements spécifiques à des classes, des méthodes,
			des attributs, etc.
		</p>
		<aside class="notes">
			Spring : @Controller, @Service, @Repository, @Autowired, @Bean...
			JPA/Hibernate : @Entity, @Table, @Column, @OneToMany...
			JUnit : @Test, @BeforeEach, @AfterEach...
			C'est ce qui rend le code Java moderne plus déclaratif et moins verbeux.
		</aside>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<h5>@Service et @Autowired</h5>
		<p>
			Imaginez que vous ayez une classe qui a besoin d'une autre classe pour fonctionner. 
			Vous devrez la passer dans le constructeur à la création de votre objet.<br/>
			Par contre, si cette classe a aussi besoin de 5 autres classes, cela devient vite compliqué.
		</p>
		<aside class="notes">
			C'est le problème de l'injection de dépendances manuelle : on doit tout câbler à la main.
			Spring résout ça : il crée les objets et les injecte automatiquement.
			C'est l'Inversion of Control (IoC) : on ne crée plus les objets, on les demande.
		</aside>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<h5>@Service et @Autowired</h5>
		<PlantUml>
			{`
				@startuml

				class GameService {
					+IMovementService movementService
					+GameStateService stateService
				}

				class GameStateService {
					+Map<Integer, Snake> snakes
					+Map<Point, AbstractAliment> aliments
					+Map<Point, Obstacle> obstacles
				}

				class AlimentService {
					+GameStateService stateService
				}

				class ScoreService {
					+GameStateService gameStateService
				}

				class ObstacleService {
					+GameStateService gameStateService
				}

				class GameOptionsService {
					+GameService gameService
				}

				class AbstractMovementService implements IMovementService {
					+GameStateService stateService
				}

				class ArrowKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				class ZqsdKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				GameService --> GameStateService

				GameService -> IMovementService
				GameService -> AlimentService
				GameService -> ScoreService
				GameService -> ObstacleService

				AlimentService --> GameStateService
				ScoreService --> GameStateService
				ObstacleService --> GameStateService
				GameOptionsService --> GameService
				AbstractMovementService --> GameStateService

				@enduml
				`}
		</PlantUml>
		<p class="smaller">
			Dans le cadre du prochain TP, votre <code>GameStateService</code> sera injecté dans chacun de
			vos services.<br />
			Les annotations <code>@Service</code> et <code>@Autowired</code> vous permettront de le faire automatiquement.
		</p>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<h5>@Service et @Autowired</h5>
		<Code>
			{`
				@Service
				public class MyService {
					@Autowired
					private MyRepository repository;
				}
				@Service
				public class MyRepository {
					@Autowired
					private ConnexionBdd connexionBdd;
					@Autowired
					private Truc truc;
					@Autowired
					private Machin machin;
				}
				`}
		</Code>
		<p class="smaller">
			Nous avons un service qui utilise un repository.<br /> Ce dernier utilise une connexion à la
			base de données, un truc et un machin. <br />Spring va se charger de créer les instances de
			ces objets et de les injecter dans les classes qui en ont besoin.
		</p>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<h5>@Component et @Primary</h5>
		<div class="smaller">
			<p>Vous voulez utiliser le DP Strategy ?</p>
			<p>
				L'annotation @Component permet de dire qu'il pourra y avoir plusieurs classes qui
				implémentent la même interface.
			</p>
			<p>
				L'annotation @Primary permet de dire que c'est cette classe qui sera utilisée par défaut.
			</p>
			<p>
				Vous avez un <code>ApplicationContext</code> que vous pouvez injecter dans vos services et qui
				vous permet de demander une stratégie en fonction de son nom.
			</p>
		</div>
		<Code>
			{`
			 	IMovementService service = applicationContext.getBean(ZqsdKeyMovementService.class);	
				//Imaginez que ZqsdKeyMovementService ait un constructeur qui prend 50 paramètres, Spring va se charger de les injecter à votre place
			`}
		</Code>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<h5>@Component et @Primary</h5>

		<Code class="smaller">
			{`
				@Service
				public class GameService {
					@Autowired
					private IMovementService movementService;
					private changeMovementService(string nom) {
							//...
							movementService = applicationContext.getBean(ZqsdKeyMovementService.class);
						}
					}
				}

				@Component
				@Primary
				public class ArrowKeyMovementService implements IMovementService { }
				@Component
				public class ZqsdKeyMovementService implements IMovementService { }
				`}
		</Code>
	</Slide>
	<Slide>
		<h3>Les annotations</h3>
		<h4>Utilisation avec Spring</h4>
		<p>
			Le principal avantage de Spring est que juste à l'aide d'annotations, vous pouvez définir des services qui seront utilisés par d'autres services.
		</p>
		<p>
			Si vous voulez déplacer du code qui devient complexe <strong>ou</strong> que vous voulez utiliser ailleurs, c'est alors très simple, il suffit de faire une nouvelle classe, l'anotter avec @Service
			et injecter ce service où vous voulez.
		</p>
		<p class="text-important">
			Cette manière de coder est plus ou moins un Design Pattern appelé <strong>Dependency Injection</strong>
		</p>
		<aside class="notes">
			DI est fondamental en entreprise. Tous les gros projets Java utilisent Spring ou un framework similaire.
			Avantages : code testable (on peut mocker les dépendances), modulaire, facile à maintenir.
			En entretien, expliquer DI/IoC est souvent demandé. C'est un must-know.
		</aside>
	</Slide>
</Slide>
