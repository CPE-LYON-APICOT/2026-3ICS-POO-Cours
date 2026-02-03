<script lang="ts">
	import Slide from '$lib/deck/slide.svelte'
	import Heritage from '$lib/Chapitres/Heritage.svelte'
	import Introduction from '$lib/Chapitres/Introduction.svelte'
	import Composition from '$lib/Chapitres/Composition.svelte'
	import Interfaces from '$lib/Chapitres/Interfaces.svelte'
	import Encapsulation from '$lib/Chapitres/Encapsulation.svelte'
	import Gnralits from './Chapitres/Généralités.svelte'
	import LangageJava from './Chapitres/LangageJava.svelte'
	import Polymorphisme from './Chapitres/Polymorphisme.svelte'
	import Code from './deck/code.svelte'
	import Statique from './Chapitres/Statique.svelte'
	import Gnricit from './Chapitres/Généricité.svelte'
	import Lambda from './Chapitres/Lambda.svelte'
	import Collections from './Chapitres/Collections.svelte'
	import Annotations from './Chapitres/Annotations.svelte'
	import DP from './Chapitres/DP.svelte'
	import AI from '$lib/UsageIA.svelte'
	import Mo from '$lib/Module.svelte'
	import ExercicesSeance1 from '$lib/Exercices/Seance1.svelte'
	import Exceptions from '$lib/Chapitres/Exceptions.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">{import.meta.env.VITE_PAGE_TITLE}</h1>
	<a class="print:hidden" href="/?print-pdf" target="_blank">Version imprimable 🖨</a><br />
	<a class="print:hidden" href="/?view=scroll" target="_blank">Version défilable</a><br />
	<a class="print:hidden" href="#/exercices">Lien vers les TP/TD</a><br />
	<!-- <a class="print:hidden" href="#/annexes">Annexes</a>
	<br />
	<a class="print:hidden  !text-red-600 m-2 "  href="#feedback">Feedback</a>
	
	<br />
	<a class="print:hidden  !text-red-600 m-2 " target="_blank" href="/revisions">Révisions</a> -->

	<aside class="notes">
		- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')
	</aside>
</Slide>

<Mo />

<AI />

<Introduction />
<Slide>
	<h3>Les concepts de la POO</h3>
	<ol>
		<li>Généralités</li>
		<li>L'encapsulation</li>
		<li>L'héritage</li>
		<li>La composition</li>
		<li>Les interfaces</li>
		<li>Le polymorphisme</li>
	</ol>
	<aside class="notes">
		Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.
	</aside>
</Slide>
<Gnralits />
<Encapsulation />
<Heritage />
<Composition />
<Interfaces />
<ExercicesSeance1 />
<!--  
<Slide id="seance2">
	<h3>Séance 2</h3>
</Slide>

<Slide data_background_gradient="linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))">
	<h3>Révisions</h3>

	<Slide>
		<h2>Quelle est la différence entre une classe mère et une classe fille ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Une classe mère est une classe dont les propriétés et méthodes peuvent être héritées par une
			classe fille. <br />
			Une classe fille est une classe qui hérite des propriétés et méthodes d'une classe mère.
			<br />
			<span class="font-bold text-orange-400">
				D'une manière générale on doit pouvoir dire "Un chien est un animal" ou "Un bateau est un
				véhicule" ; Animaux et véhicules sont des classes mères. Chien et bateau sont des classes
				filles.</span
			>
		</div>
	</Slide>
	<Slide>
		<h2>Une classe peut-elle hériter de plusieurs classes ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Non, en Java une classe ne peut hériter que d'une seule classe. Cependant, elle peut
			implémenter plusieurs interfaces.
		</div>
	</Slide>
	<Slide>
		<h2>Qu'est ce qu'une classe abstraite ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Une classe abstraite est une classe qui ne peut pas être instanciée et qui peut contenir des
			méthodes abstraites, c'est-à-dire des méthodes sans implémentation. <br />
			<span class="font-bold text-orange-400"
				>Généralement, on utilise une classe abstraite pour représenter un concept général qui ne
				peut être instancié directement.</span
			>
		</div>
	</Slide>
	<Slide>
		<h2>Comment redéfinir une méthode dans une classe fille ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de
			la méthode redéfinie.
			<Code>
				{`
				class Animal {
					void crier(){
						print("Je suis un animal");
					}
				}
				class Chien extends Animal {
					@Override
					void crier(){
						print("Wouaf wouaf");
					}
				}
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h2>Qu'est-ce que l'encapsulation ? Pourquoi est-elle importante ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			L'encapsulation est un concept de la POO qui consiste à cacher les détails internes d'une
			classe et à ne fournir qu'une interface publique pour interagir avec cette classe. <br />
			<span class="font-bold text-orange-400"
				>Elle permet de protéger les données et de contrôler leur accès.</span
			>
			Par exemple, si l'on a un attribut <code>taille</code> dans une classe <code>Personne</code>,
			on ne veut pas que la taille soit négative. On peut donc contrôler l'accès à cet attribut en
			le déclarant privé et en fournissant des méthodes publiques pour y accéder et le modifier.
		</div>
	</Slide>
	<Slide>
		<h2>Comment implémenter l'encapsulation en Java ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme <code
				>private</code
			>, <code>public</code>, et <code>protected</code>. <br />
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier
			les attributs privés. <br />
			<Code>
				{`
				class Personne {
					private String nom;

					public String getNom() {
						return nom;
					}

					public void setNom(String nom) {
						this.nom = nom;
					}				
				}
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h2>Qu'est-ce qu'une interface en Java ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Une interface est un type de référence en Java qui ne contient que des méthodes sans
			implémentation. <br />
			<span class="font-bold text-orange-400"
				>Elle permet de définir un contrat que les classes doivent respecter.</span
			>
		</div>
	</Slide>
	<Slide>
		<h2>Comment implémenter une interface en Java ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Pour implémenter une interface en Java, une classe doit utiliser le mot-clé <code
				>implements</code
			>
			et fournir une implémentation pour toutes les méthodes de l'interface. <br />
			<Code>
				{`
				public interface ArticleLouable {
					float reserver(Date from, Date to);
					float rendre(int penalite);
				}

				public class SiegeAuto implements ArticleLouable {
					@Override
					public float reserver(Date from, Date to) {
						// ...
					}

					@Override
					public float rendre(int penalite) {
						// ...
					}
				}
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h2>Quelle est la différence entre une classe abstraite et une interface ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Une classe abstraite peut contenir des méthodes avec une implémentation, tandis qu'une
			interface ne contient que des méthodes abstraites. <br />
			<span class="font-bold text-orange-400"
				>Une classe peut hériter d'une seule classe abstraite mais peut implémenter plusieurs
				interfaces.</span
			>
		</div>
	</Slide>
	<Slide>
		<h2>Commet choisir entre une classe abstraite et une interface ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Pour choisir entre une classe abstraite et une interface, il faut se poser la question de la
			relation entre les classes. <br />
			Si la relation est de type "est un", alors une classe abstraite est plus appropriée. <br />
			Si la relation est de type "peut faire", alors une interface est plus appropriée. <br />
			Par exemple, un Avion et un Oiseau sont tous deux des objets qui peuvent voler, mais ils ne partagent
			pas nécessairement une relation de type "est un". <br />
			Dans ce cas, il est plus approprié d'utiliser une interface <code>IVolant</code>.
		</div>
	</Slide>
	<Slide>
		<h2>Comment utiliser les interfaces pour simuler l'héritage multiple ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs
			interfaces que la classe doit implémenter. <br />
			<Code>
				{`
				interface Volant {
					void voler();
				}

				interface Nageur {
					void nager();
				}

				class Canard implements Volant, Nageur {
						// ...
						// ...			
				} 
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h2>Qu'est-ce que la composition en POO ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			La composition est un concept de la POO qui permet de créer des objets complexes en combinant
			des objets plus simples. <br />
			<span class="font-bold text-orange-400"
				>Elle consiste à avoir des instances de classes en tant qu'attributs d'une autre classe.</span
			>
		</div>
	</Slide>
	<Slide>
		<h2>Donnez un exemple de composition en Java.</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			<Code>
				{`
				class Moteur {
					void demarrer() {
						// ...
					}
				}

				class Voiture {
					private Moteur moteur;

					Voiture() {
						this.moteur = new Moteur();
					}

					void conduire() {
						moteur.demarrer();
						// ...
					}
				}
				`}
			</Code>
		</div>
	</Slide>
	<Slide>
		<h2>Qu'est-ce qu'une interface marqueur ?</h2>
		<div class="fragment border-l-4 border-white-500 pl-4 text-left w-full">
			Une interface marqueur est une interface sans méthode, utilisée pour étiqueter une classe. <br
			/>
			<span class="font-bold text-orange-400">
				On découvrira plus tard que les annotations sont une alternative plus puissante aux
				interfaces marqueurs.
			</span>
		</div>
	</Slide>
</Slide>
<Exceptions />
<Polymorphisme />
<Statique />
<Gnricit />
<Collections />
<Lambda />
<Slide id="seance3">
	<h3>Séance 3</h3>
</Slide>
<Slide>
	<h2>Rappels</h2>
	<Slide>
		<p>Nous avons vu les concepts de base de la POO en Java :</p>
		<ul>
			<li>L'héritage</li>
			<li>La composition</li>
			<li>Les interfaces</li>
			<li>L'encapsulation</li>
			<li>Le polymorphisme</li>
		</ul>
		<p>Assurez vous de savoir définir chacun de ce concepts et de savoir les différencier.</p>
	</Slide>
	<Slide
		><p>En complément, nous avons abordé des notions "avancées" :</p>
		<ul>
			<li>La généricité</li>
			<li>Les collections</li>
			<li>Les lambdas / programmation fonctionnelle</li>
			<li>Les classes et méthodes statiques</li>
		</ul>
	</Slide>
</Slide>
<DP />
<Annotations />
<Slide>
	<h1>Fin du cours</h1>
</Slide>
<Exercices />
<Slide id="feedback">
	<p>Merci de formuler un feedback sur le cours :</p>
	<p>
		Votre retour aide à améliorer le contenu, le rythme et les exercices. Indiquez ce qui était
		clair, ce qui mérite d'être approfondi et vos suggestions.
	</p>
	<a href={import.meta.env.VITE_FEEDBACK_URL} title="Feedback" data-preview-link
		>Repondre au questionnaire</a
	>
</Slide>
<Slide id="annexes">
	<Slide>
		<h1>Annexes</h1></Slide
	>
	<LangageJava />
	-->
<!-- </Slide> -->
