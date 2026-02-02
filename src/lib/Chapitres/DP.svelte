<script>
	import Code from '$lib/deck/code.svelte'
	import PlantUml from '$lib/deck/plantUml.svelte'
	import Slide from '$lib/deck/slide.svelte'

	import decorator from '$lib/Seance3/decorator.puml?raw'
	import Annotations from './Annotations.svelte'
	import Collections from './Collections.svelte'
	import Composition from './Composition.svelte'
	import Encapsulation from './Encapsulation.svelte'
</script>

<Slide>
	<Slide>
		<h2>Patrons de conception</h2>
		<p class="fragment">
			Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank">Refactoring Guru</a>
		</p>
		<aside class="notes">
			Le "Gang of Four" (GoF) a défini 23 patterns en 1994 dans leur livre célèbre.
			Refactoring Guru est une ressource moderne excellente avec des exemples en Java.
			On ne verra que les patterns les plus utiles au quotidien.
		</aside>
	</Slide>
	<Slide>
		<h3>Qu'est-ce qu'un patron de conception ?</h3>
		<p>
			Un patron de conception est une solution générale à un problème récurrent en conception
			logicielle.
		</p>
		<p>Les bons développeurs connaissent ces patrons et savent quand les utiliser.</p>
		<p class="text-important">
			En connaissant bien ces patrons, vous pouvez proposer des fonctionnalités supplémentaires sans surcoût.
		</p>
		<p>Un DP bien identifié permet de communiquer plus facilement avec les autres développeurs !</p>
		<aside class="notes">
			C'est un vocabulaire commun. Dire "c'est un Singleton" est plus clair que d'expliquer tout le mécanisme.
			En revue de code ou en entretien, connaître les DP fait la différence.
			Mais attention : ne pas forcer un pattern où il n'est pas nécessaire (over-engineering).
		</aside>
	</Slide>
	<Slide>
		<h3>Les patrons de conception sont-ils indispensables ?</h3>
		<p>Non, mais ils sont très utiles pour résoudre des problèmes courants de manière efficace.</p>
		<p>
			Il existe de nombreux patrons de conception, mais il est inutile de tous les connaître par cœur !
		</p>
		<p>
			C'est un peu comme si nous avions observé des bouts de code qui marchent bien, et que nous les
			avions classés et regroupés pour les proposer à tous.
		</p>
		<p class="text-important">
			Vous utilisez probablement déjà des patrons de conception sans le savoir !
		</p>
	</Slide>
	<Slide>
		<h3>Analogie</h3>
		<p>
			Une bonne analogie pour les patrons de conception en POO dans la vie réelle serait celle d'une
			cuisine professionnelle dans un restaurant. Voici comment cela fonctionne :
		</p>
	</Slide>
	<Slide>
		<h3>Qui prépare les commandes ?</h3>
		<h4>Singleton</h4>
		<p>
			Le chef de cuisine est responsable de la préparation des commandes. Il doit y en avoir
			strictement <b>un seul</b>.<br />
		</p>
		<p class="text-important">
			Si vous avez bien suivi, vous connaissez déjà une manière pour qu'un attribut soit partagé par
			toutes les instances d'une classe.
		</p>
		<aside class="notes">
			Le Singleton est le pattern le plus connu et le plus controversé.
			Problèmes : difficile à tester, peut cacher des dépendances, problèmes en multi-threading.
			En Spring, les beans sont des singletons par défaut, mais gérés proprement par le framework.
		</aside>
	</Slide>
	<Slide>
		<h3>Qui prépare les commandes ?</h3>
		<h4>Singleton</h4>
		<p>
			Un singleton est une classe avec une méthode statique <code>getInstance</code> qui retourne la
			même instance de la classe à chaque appel.
		</p>
		<p>
			Pour cela, le constructeur de la classe est privé, et la seule manière de créer une instance de
			la classe est d'appeler la méthode <code>getInstance</code> qui fait un <code>new</code>.
		</p>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png"
				alt="Singleton"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Comment les serveurs passent commande ?</h3>
		<h4>Factory</h4>
		<p>
			Les serveurs prennent les commandes des clients et les transmettent au chef de cuisine. Ils ne
			savent pas comment les plats sont préparés, ils ne font que transmettre les commandes.
		</p>
		<p class="text-important">
			Le patron de conception Factory permet de déléguer la création d'objets à une classe Factory.
		</p>
		<aside class="notes">
			Factory cache la complexité de la création. L'appelant ne sait pas quelle classe concrète est utilisée.
			Utile quand la création est complexe ou quand on veut changer l'implémentation facilement.
			Variantes : Factory Method, Abstract Factory, Builder.
		</aside>
	</Slide>
	<Slide className="smaller">
		<h3>Comment les serveurs passent commande ?</h3>
		<h4>Factory</h4>
		<p>
			Le principe : Je dis au chef de préparer une <code>"Pizza"</code> ou un <code>"Steak"</code>,
			le serveur n'instancie pas une classe "Pizza" car il devrait sinon savoir si on fait
		</p>
		<ul>
			<li><code>new Pizza(Enum.BaseCreme,["saumon","aneth"],180°, "240 s")</code></li>
			<li><code>new Steak(tartare:false)</code></li>
		</ul>
		<p>
			On préfère lui passer une information standardisée et une <b>Factory</b> utilisée par le chef de
			cuisine se chargera de créer l'objet.
		</p>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/diagrams/factory-method/solution2-fr.png"
				alt="Factory"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Comment les serveurs passent commande ?</h3>
		<h4>Factory</h4>
		<div class="flex items-center">
			<img
				class="w-2/5"
				src="https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png"
				alt="Factory"
			/>
			<Code>
				{`
				class Serveur {
					public Product prendreCommande(string plat) {
						return Chef.getInstance().préparer(plat);
					}
				}
				class Chef {
					public static Chef getInstance();
					public Product préparer(string plat) {
						switch(plat) {
							case "Pizza":
								return new Pizza(); // Pizza hérite de Product
							case "Steak":
								return new Steak(); // Steak hérite de Product
						}
					}
				}	
				`}
			</Code>
		</div>
		<p>
			Dans notre cas, le chef est un singleton et la factory est une méthode de la classe Chef. Les
			DP se combinent !
		</p>
	</Slide>
	<Slide>
		<h3>Comment le chef prévient qu'il a fini ?</h3>
		<h4>Observer</h4>
		<p>
			Lorsque le chef a fini de préparer un plat, il le dépose sur le comptoir. Les serveurs sont
			notifiés et peuvent alors servir le plat aux clients.
		</p>
		<p class="text-important">
			Le patron de conception Observer permet de définir une relation de type "un à plusieurs" entre
			objets, de sorte que lorsqu'un objet change d'état, tous les objets qui en dépendent sont
			notifiés et mis à jour automatiquement.
		</p>
		<aside class="notes">
			C'est le pattern des événements : addEventListener en JavaScript, les listeners en Java Swing.
			Moderne : RxJava, les flux réactifs. C'est le cœur de la programmation réactive.
			Exemple : une interface qui se met à jour quand les données changent.
		</aside>
	</Slide>
	<Slide>
		<h3>Comment le chef prévient qu'il a fini ?</h3>
		<h4>Observer</h4>
		<p>
			Le chef ne va pas maintenir une liste de serveurs, puis lorsqu'il a fini de préparer un
			plat, appeler chacun d'entre eux, savoir s'ils sont disponibles. Imaginez qu'il ait en plus
			des serveurs des livreurs Deliveroo, c'est ingérable.
		</p>
		<p>
			On va plutôt adopter une approche "Je préviens que j'ai fini, ceux que ça intéresse auront
			qu'à venir le chercher".
		</p>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-fr.png"
				alt="Observer"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Comment le chef prévient qu'il a fini ?</h3>
		<h4>Observer</h4>
		<div class="flex items-center">
			<img
				class="w-2/5"
				src="https://refactoring.guru/images/patterns/diagrams/observer/structure.png"
				alt="Observer"
			/>
			<Code>
				{`
				class Chef {
					public Product préparer(string plat) {
						var plat = new Plat();
						Publisher.getInstance().notify("ready", plat);
					}
				}	
				class Serveur implements Subscriber {
					public Serveur() {
						Publisher.getInstance().subscribe(this);
					}
					public void update(string event, Object o) {
						if(event == "ready") {
							((Product)o).servir("Table 13");
						}
					}
				}
				`}
			</Code>
		</div>
		<p class="smaller">
			Une fois encore, on a fait le choix que notre Publisher soit un singleton, mais on peut avoir
			plusieurs Publisher, par exemple un Publisher restaurant et un Publisher Deliveroo.
		</p>
	</Slide>
	<Slide>
		<h3>Ce client qui fête son anniversaire</h3>
		<h4>Decorator</h4>
		<p>
			Un client fête son anniversaire et demande un gâteau. Le serveur lui apporte un gâteau simple,
			mais le client demande à ce qu'on y ajoute des bougies.
		</p>
		<p class="text-important">
			Le patron de conception Decorator permet d'attacher de nouvelles fonctionnalités à des objets
			existants de manière dynamique et transparente, sans affecter leur comportement.
		</p>
		<aside class="notes">
			Le Decorator évite l'explosion des sous-classes. Au lieu de GateauBougiesChantilly, on décore.
			Exemple Java célèbre : les streams d'IO. BufferedReader décore FileReader.
			new BufferedReader(new FileReader("file.txt")) - c'est du Decorator !
		</aside>
	</Slide>
	<Slide>
		<h3>Ce client qui fête son anniversaire</h3>
		<h4>Decorator</h4>
		<p>
			Le serveur ne va pas demander au chef de préparer un gâteau avec bougies, puis un gâteau sans
			bougies, puis un gâteau avec bougies et chantilly, puis un gâteau avec bougies, chantilly et
			glaçage au chocolat.
		</p>
		<p>
			Il va plutôt demander un gâteau simple, puis ajouter des décorations en fonction des demandes
			du client.
		</p>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1.png"
				alt="Decorator"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Ce client qui fête son anniversaire</h3>
		<h4>Decorator</h4>
		<div class="flex items-center">
			<img
				class="w-2/5"
				src="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png"
				alt="Decorator"
			/>
			<Code>
				{`
				class Produit {}
				class AvecUneBougieDessus extends Produit {
					public AvecUneBougieDessus(Produit p) {}
					@Override
					public void servir(string table) {
						// Bon anniversaire les ptits indiens 🪇🎺…
						p.servir(table);
					}
				}
				class Serveur implements Subscriber {
					public void update(string event, Object o) {
						if(event == "ready") {
							if(cestUnAnniversaire) {
								o = new AvecUneBougieDessus((Produit)o);
							}
							((Product)o).servir("Table 13");
						}
					}
				}
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h3>Chacun paie sa part ou on divise ?</h3>
		<h4>Strategy</h4>
		<p>
			Un groupe de clients a fini de manger et doit payer l'addition. Ils peuvent choisir de diviser
			l'addition en parts égales ou de payer chacun sa part.<br />
			En plus de ça, ils peuvent choisir de payer en liquide, par carte bancaire ou par ticket restaurant.
		</p>
		<p class="text-important">
			Le patron de conception Strategy permet de définir une famille d'algorithmes, de les
			encapsuler et de les rendre interchangeables.
		</p>
		<aside class="notes">
			Strategy remplace les longues cascades de if/else ou switch par du polymorphisme.
			On peut changer l'algorithme à runtime sans modifier le code client.
			Exemple : différentes stratégies de tri, de compression, de calcul de taxe...
		</aside>
	</Slide>
	<Slide>
		<h3>Chacun paie sa part ou on divise ?</h3>
		<h4>Strategy</h4>
		<p>
			Le serveur se charge de faire régler le client, mais comme il y a plein de cas de figure
			différents, il ne va pas faire un <code>if</code> pour chaque cas de figure.
		</p>
		<ul>
			<li>Je veux payer par ticket resto <i>(valable que le midi)</i></li>
			<li>J'ai la Mojjo <i>(il faut le prouver)</i></li>
			<li>
				En liquide mais gardez la monnaie <i>(l'argent ne va pas dans la caisse directement)</i>
			</li>
			<li>Sans contact <i>(le TPE fait un appel serveur pour vérifier le solde)</i></li>
		</ul>
		<p>
			Extrayons chaque type de paiement dans une classe à part, et le serveur n'aura qu'à appeler la
			méthode <code>pay()</code> de l'objet.
		</p>
	</Slide>
	<Slide>
		<h3>Chacun paie sa part ou on divise ?</h3>
		<h4>Strategy</h4>
		<p>
			Chaque stratégie de paiement est une classe qui implémente une interface <code>PaymentStrategy</code>
			qui contient une méthode <code>pay()</code>.
		</p>
		<p>
			Le serveur n'a pas à savoir comment chaque stratégie fonctionne, il lui suffit d'appeler la
			méthode <code>pay()</code> de l'objet.
		</p>
		<div class="flex justify-center">
			<img
				src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr.png"
				alt="Strategy"
			/>
		</div>
	</Slide>
	<Slide>
		<h3>Chacun paie sa part ou on divise ?</h3>
		<h4>Strategy</h4>
		<div class="flex justify-center items-center">
			<img
				class="w-2/5"
				src="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png"
				alt="Strategy"
			/>
			<Code>
				{`
				interface PaymentStrategy {
					public int pay();
				}
				class Serveur {
					public void régler(string table, PaymentStrategy p) {
						p.pay();
						addition[table].solde -= addition[table].montant;
					}
				}
				class TicketResto implements PaymentStrategy {
					public int pay() { }
				}
				class Liquide implements PaymentStrategy {
					public int pay() { }
				}
				`}
			</Code>
		</div>
		<p class="smaller">
			On pourrait toujours Décorer les stratégies de paiement, pour ceux qui veulent le ticket de
			carte ou une facture TVA…<br />Si ça devient trop compliqué, l'extraire dans une Factory.
		</p>
	</Slide>
	<Slide>
		<h3>Conclusion</h3>
		<p>Les patrons de conception sont :</p>
		<ul>
			<li>Dispensables</li>
			<li>Très utiles</li>
			<li>Combinables</li>
			<li>Universels</li>
		</ul>
		<aside class="notes">
			Ils existent dans tous les langages OO : Java, C#, Python, TypeScript...
			Ne les appliquez pas systématiquement. "YAGNI" - You Ain't Gonna Need It.
			Mais quand le besoin se présente, c'est super puissant de les reconnaître.
		</aside>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3>Attendus</h3>
		<p>À l'aide du cours et du site présenté en début de chapitre, maîtrisez-en le plus possible.</p>
		<p>Sans les DP, vous savez coder en POO, mais c'est le niveau débutant. Les DP font de vous un "bien meilleur" développeur.</p>
		<aside class="notes">
			Pour l'examen : Singleton, Factory, Observer, Strategy, Decorator sont les plus demandés.
			En entreprise, vous les croiserez partout. Spring en utilise plein.
			Entraînez-vous à les reconnaître dans du code existant.
		</aside>
	</Slide>
	<Slide data_background_color="#00353F">
		<h3>Attendus</h3>
		<p>Si vous donnez le TP entier à faire à une IA, il est probable qu'elle vous donne une solution avec peu de DP mais qui répond immédiatement à la demande.</p>
		<p>Quand on gère le cas de la carte Mojjo ou de l'anniversaire avec la bougie, si on n'a pas eu le réflexe dès le début d'utiliser les DP, on ne fait que casser son code et recommencer.</p>
		<p class="text-important">Pour le projet, faites le plus de DP possible ! S'il n'y en a pas, je vous demanderai de rajouter une nouvelle fonctionnalité qui cassera tout votre code jusqu'à ce que vous soyez assez prévoyant.</p>
	</Slide>
</Slide>
