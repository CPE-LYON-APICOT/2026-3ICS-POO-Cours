<script lang="ts">
	import Slide from '$lib/deck/slide.svelte'
	import Heritage from '$lib/Chapitres/Heritage.svelte'
	import Introduction from '$lib/Chapitres/Introduction.svelte'
	import Composition from '$lib/Chapitres/Composition.svelte'
	import Interfaces from '$lib/Chapitres/Interfaces.svelte'
	import Encapsulation from '$lib/Chapitres/Encapsulation.svelte'
	import Gnralits from './Chapitres/Généralités.svelte'
	import Exercices from './Exercices.svelte'
	import LangageJava from './Chapitres/LangageJava.svelte'
	import Polymorphisme from './Chapitres/Polymorphisme.svelte'
	import Code from './deck/code.svelte'
	import Statique from './Chapitres/Statique.svelte'
	import Gnricit from './Chapitres/Généricité.svelte'
	import Lambda from './Chapitres/Lambda.svelte'
	import Collections from './Chapitres/Collections.svelte'
	import Annotations from './Chapitres/Annotations.svelte'
	import DP from './Chapitres/DP.svelte'
	</script>

<Slide animate={true}>
	<h1 class="capitalize">{import.meta.env.VITE_PAGE_TITLE}</h1>
	<!-- <a class="print:hidden" href="/?print-pdf" target="_blank">Version imprimable 🖨</a><br />
	<a class="print:hidden" href="/?view=scroll" target="_blank">Version défilable</a><br /> -->
	<a class="print:hidden" href="#/exercices">Lien vers les TP/TD</a><br />
	<!-- <a class="print:hidden" href="#/annexes">Annexes</a>
	<br />
	<a class="print:hidden  !text-red-600 m-2 "  href="#feedback">Feedback</a>
	
	<br />
	<a class="print:hidden  !text-red-600 m-2 " target="_blank" href="/revisions">Révisions</a> -->

	 <aside class="notes">
    	- Lien de la présentation sur e-campus
		- Suivre depuis le projecteur
		- Montrer bouton d'aide
		- Overview (touche 'o')
  </aside>
</Slide>

<Slide data_background_color="#00353F">
	<Slide>
	<h2>Présentation du module</h2>

	<div class="two-columns">
		<div>
			<ul>
				<li><b>Changer votre manière de penser le code</b></li>
				<li>Passer du procédural à l’orienté objet</li>
				<li>Modéliser avant de coder</li>
				<li>Préparer la suite de votre formation</li>
			</ul>

			<p class="note">
				Ce module est simple à valider.<br />
				Il est <b>fondamental</b> pour la suite.
			</p>
		</div>

	</div>
	<aside class="notes">
    	Pas obligé de coder en OO, juste une manière de faire différente
		- C'est une méthode qui simplifie la modélisation
		- Assez largement utilisée
  </aside>
</Slide>


<Slide>
	<h2>Pourquoi vous pourriez décrocher</h2>

	<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;">
		<!-- Axes -->
		<line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2" />
		<line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2" />

		<!-- Labels -->
		<text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text>
		<text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">
			Niveau réel en programmation
		</text>

		<!-- === FRAGMENT 0 : départ commun === -->
		<g >
			
			<!-- POO -->
<path
  d="M50 200 C120 185, 180 175, 220 170"
  fill="none"
  stroke="#3498db"
  stroke-width="4"
/>

<!-- Procédural -->
<path
  d="M50 200 C120 205, 180 210, 220 190"
  fill="none"
  stroke="#f39c12"
  stroke-width="4"
/>

		</g>

		<!-- === FRAGMENT 1 : décrochage === -->
		<g class="fragment" data-fragment-index="0">
<!-- POO : plateau net -->
<path
  d="M220 170 C260 170, 300 170, 340 170"
  fill="none"
  stroke="#3498db"
  stroke-width="4"
/>

<!-- Procédural : accélération visible -->
<path
  d="M220 190 C260 170, 300 155, 340 145"
  fill="none"
  stroke="#f39c12"
  stroke-width="4"
/>


		</g>

		<!-- === FRAGMENT 2 : croisement === -->
		<g class="fragment" data-fragment-index="1">
			<!-- Procédural -->
<path
  d="M340 145 C380 140, 400 140, 420 140"
  fill="none"
  stroke="#f39c12"
  stroke-width="4"
/>

<!-- POO : toujours pas de boost -->
<path
  d="M340 170 C380 168, 400 165, 420 140"
  fill="none"
  stroke="#3498db"
  stroke-width="4"
/>

		</g>

		<!-- === FRAGMENT 3 : écart final === -->
		<g class="fragment" data-fragment-index="2">
	<!-- Procédural : plafond -->
<path
  d="M420 140 C470 140, 510 140, 550 140"
  fill="none"
  stroke="#f39c12"
  stroke-width="4"
/>

<!-- POO : boost massif -->
<path
  d="M420 140 C470 120, 510 70, 550 50"
  fill="none"
  stroke="#3498db"
  stroke-width="4"
/>


			
		</g>
		<text x="60" y="80" font-size="0.5em" fill="#f39c12">
				Procédural
			</text>
		<text x="60" y="100"  font-size="0.5em" fill="#3498db">
				POO
			</text>
	</svg>

	<p class="note fragment" data-fragment-index="0">
		Si vous avez l’impression de devenir moins bons,<br />
		c’est que vous êtes en train d’apprendre.
	</p>

	
	<aside class="notes">
	Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est plus moderne<br/> 
	Mais très vite régression, notamment car il y a des règles à respecter que vous n'aviez pas avant, en // en C vous pouvez faire n'importe quoi et ça marche<br/>
	Puis vous apprenez à maitriser 
	Puis vous égalez votre précédent niveau, si vous sortez du module à ce niveau, vous n'aurez rien appris de plus<br/>
	Restez motivés pour la suite, car après ça décolle vraiment<br/>

	</aside>
</Slide>

<Slide>
		<h2>Déroulé</h2>

		<ol>
			<li>CM en début de cours</li>
			<li>TD</li>
			<li>TP/Projet</li>
		</ol>
	</Slide>


	
	<Slide>
	<h2>Modalités d’examen</h2>

	<ul>
		<li>DS écrit <b>basé principalement sur les TD</b></li>
		<li>Projet en fin de module</li>
		<li>Contrôle continu sur la rigueur</li>
	</ul>

	<p class="important">
		Ce qui est évalué, ce n’est pas le résultat.<br />
		<b>C’est la démarche !</b>
	</p>
</Slide>
<Slide>
		<h2>Découpage du module</h2>
	<div style="display: flex; gap: 2rem; align-items: center;">
	<svg  width="1000" height="500" viewBox="0 0 1000 500"
     xmlns="http://www.w3.org/2000/svg"
     style="flex: 1;background:#fafafa;font-family:sans-serif">

  <!-- Axes -->
  <line x1="80" y1="50" x2="80" y2="430" stroke="#333"/>
  <line x1="80" y1="430" x2="950" y2="430" stroke="#333"/>

  <!-- Y labels -->
  <g fill="#333" font-size="12">
    <text x="40" y="430">0h</text>
    <text x="40" y="370">2h</text>
    <text x="40" y="310">4h</text>
    <text x="40" y="250">6h</text>
    <text x="40" y="190">8h</text>
  </g>

  <!-- Legend -->
  <g font-size="13">
    <rect x="780" y="60" width="15" height="15" fill="#E85D75"/><text x="800" y="73">CM (18h)</text>
    <rect x="780" y="85" width="15" height="15" fill="#456990"/><text x="800" y="98">TD (12h)</text>
    <rect x="780" y="110" width="15" height="15" fill="#F28F3B"/><text x="800" y="123">TP (14h)</text>
    <rect x="780" y="135" width="15" height="15" fill="#F6BD60"/><text x="800" y="148">Projet (18h)</text>
  </g>

  <!-- Bars -->
  <!-- scale: 1h = 30px -->
  <!-- Dates -->
  <g font-size="11" text-anchor="middle">
    <!-- 02/04 -->
  <g transform="translate(110,430)">
  <!-- CM : 4h -->
  <rect y="-120" width="40" height="120" fill="#E85D75"/>

  <!-- TD : 2h -->
  <rect y="-180" width="40" height="60" fill="#456990"/>

  <!-- TP : 2h -->
  <rect y="-240" width="40" height="60" fill="#F28F3B"/>

  <text y="20" text-anchor="middle">04/02</text>
</g>

    <!-- 25/02 -->
    <g transform="translate(180,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-120" width="40" height="60" fill="#456990"/>
      <text y="20">25/02</text>
    </g>

    <!-- 04/03 -->
    <g transform="translate(250,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-120" width="40" height="60" fill="#456990"/>
      <rect y="-180" width="40" height="60" fill="#F28F3B"/>
      <text y="20">04/03</text>
    </g>

    <!-- 18/03 -->
    <g transform="translate(320,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-120" width="40" height="60" fill="#456990"/>
      <rect y="-180" width="40" height="60" fill="#F28F3B"/>
      <text y="20">18/03</text>
    </g>

    <!-- 24/03 -->
    <g transform="translate(390,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-120" width="40" height="60" fill="#456990"/>
      <rect y="-180" width="40" height="60" fill="#F28F3B"/>
      <text y="20">24/03</text>
    </g>

    <!-- 25/03 -->
    <g transform="translate(460,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-120" width="40" height="60" fill="#456990"/>
      <rect y="-180" width="40" height="60" fill="#F28F3B"/>
      <text y="20">25/03</text>
    </g>

    <!-- 31/03 -->
    <g transform="translate(530,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-180" width="40" height="120" fill="#F28F3B"/>
      <text y="20">31/03</text>
    </g>

    <!-- 01/04 -->
    <g transform="translate(600,430)">
      <rect y="-60" width="40" height="60" fill="#E85D75"/>
      <rect y="-180" width="40" height="120" fill="#F6BD60"/>
      <text y="20">01/04</text>
    </g>

    <!-- 07/04 -->
    <g transform="translate(670,430)">
      <rect y="-180" width="40" height="180" fill="#F6BD60"/>
      <text y="20">07/04</text>
    </g>

    <!-- 05/05 -->
    <g transform="translate(740,430)">
      <rect y="-240" width="40" height="240" fill="#F6BD60"/>
      <text y="20">05/05</text>
    </g>
  </g>
</svg>
<div style="flex: 1;">
			<ul>
				<li>
					<b>CM</b>  
					<br />
					Théorie et introduction des concepts.
					
				</li>

				<li>
					<b>TD</b>  
					<br />
					<b class="font-bold text-orange-400">Sans IDE !</b>
				</li>

				<li>
					<b>TP</b>  
					<br />
					Guidés, mais il faut improviser, tester, sortir du cadre.
				</li>

				<li>
					<b>Projet</b>  
					<br />
					Mise en situation professionnelle.
				</li>
			</ul>

			
		</div>
	</div>
<p class="font-bold text-orange-400 note">
				Relire le support du CM ne vous suffira pas à réussir l'examen
			</p>
</Slide>

	<Slide>
		<h2>Mise en place des TDs/TPs</h2>
		<p>Les TD et TP sont à commit régulièrement sur votre dépôt git (voir démonstration)</p>
		<p>Seul le projet est à réaliser en binôme</p>
	</Slide>
</Slide>
<Slide data_background_color="#511C29">
	<Slide >
	<h2>Usage de l’IA dans ce module</h2>

	<span class="font-bold text-[2em] underline " >L’IA n’est <b>pas autorisée</b> pendant le module</span>

	<p class="note">
		Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire vous desserve.
	</p>
</Slide>
<Slide>
	<h2>Pourquoi l’IA pose problème à ce stade</h2>

	<ul>
		<li>
			<b>1. La “dette cognitive”</b><br />
			L’apprentissage repose sur la pratique, l’erreur et la métacognition.<br />
			Déléguer ces étapes à l’IA court-circuite l’apprentissage :<br />
			on obtient une réponse correcte, mais on ne progresse plus.
		</li>

		<li>
			<b>2. Accélérateur pour les experts, béquille pour les débutants</b><br />
			L’IA amplifie ceux qui maîtrisent déjà.<br />
			Pour un débutant, elle empêche l’acquisition des bases.
		</li>

		<li>
			<b>3. Même problème que les révolutions précédentes</b><br />
			Comme la calculatrice ou Internet, l’IA n’est pas mauvaise en soi.<br />
			C’est l’usage passif qui entraîne une perte de compétence.
		</li>

		<li>
			<b>4. L’illusion de la facilité</b><br />
			L’IA donne l’impression d’être plus rapide et plus efficace,<br />
			mais masque le fait qu’on ne réfléchit plus aux étapes.
		</li>
	</ul>
	<a href="https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653" target="_blank"><p> Vidéo expliquant mieux que moi ces concepts</p></a>
</Slide>
<Slide>
	<h2>Constat côté entreprise</h2>

	<ul>
		<li>Des profils juniors très à l’aise avec l’IA</li>
		<li>Mais en difficulté dès qu’il faut :</li>
		<ul>
			<li>débugger un problème</li>
			<li>expliquer un choix technique</li>
			<li>adapter une solution existante</li>
		</ul>
	</ul>

	<p class="note">
		Le problème n’est pas l’IA,<br />
		mais son usage trop précoce et non maîtrisé.
	</p>
</Slide>
<Slide>
	<h2>Utiliser l’IA intelligemment</h2>

	<ul>
		<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li>
		<li>Pas de réponses directes</li>
		<li>Questions, feedback, progression guidée</li>
	</ul>

	<p class="important">
		Apprendre correctement avec l’IA<br />
		produit de meilleurs résultats<br />
		que l’utiliser sans méthode.
	</p>

	<a href="https://www.nature.com/articles/s41598-025-97652-6.pdf" data-preview-link><p class="note">
		Source : AI Tutoring Outperforms Active Learning
	</p></a>
</Slide>
<Slide>
	<h2>Importance des TD et TP</h2>

	<ul>
		<li>Les TD construisent le raisonnement</li>
		<li>Les TP ancrent les concepts par la pratique</li>
		<li>Ce travail est indispensable pour la suite</li>
	</ul>

	<p class="note">
		Sans cette phase sérieuse,<br />
		l’IA n’apporte que peu de valeur.
	</p>
</Slide>
<Slide>
	<h2>Phase projet</h2>

	<ul>
		<li>Problème plus ouvert</li>
		<li>Mise en situation proche du monde professionnel</li>
		<li>Usage de l’IA <b>possible</b> et encadré</li>
	</ul>

	<p class="important">
		Des bases solides permettent<br />
		d’utiliser l’IA pour faire des choses intéressantes.
	</p>
</Slide>




</Slide>

<Introduction />
<Slide>
	<h3>Les concepts de la POO</h3>
	<ol>
		<li>Généralités</li>
		<li>L'héritage</li>
		<li>La composition</li>
		<li>Les interfaces</li>
		<li>L'encapsulation</li>
		<li>Le polymorphisme</li>
	</ol>
</Slide>
<Gnralits />
<Heritage />
<Composition />
<Interfaces />
<Encapsulation />
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
<DP/>
<Annotations/>
<Slide>
	<h1>Fin du cours</h1>
</Slide>
<Exercices />
<Slide id="feedback">
	<p>Merci de formuler un feedback sur le cours :</p>
	<p>Votre retour aide à améliorer le contenu, le rythme et les exercices. Indiquez ce qui était clair, ce qui mérite d'être approfondi et vos suggestions.</p>
	<a href={import.meta.env.VITE_FEEDBACK_URL} title="Feedback" data-preview-link>Repondre au questionnaire</a>
	</Slide>
<Slide id="annexes">
	<Slide>
		<h1>Annexes</h1></Slide
	>
	<LangageJava />
</Slide>
