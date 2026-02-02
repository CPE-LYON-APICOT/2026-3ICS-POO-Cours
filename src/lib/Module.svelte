<script>
	import Slide from '$lib/deck/slide.svelte'
</script>

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
			Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée
		</aside>
	</Slide>

	<Slide>
		<h2>Ce que vous saurez faire à la fin</h2>
		<div class="flex justify-center gap-8 mt-8">
			<div class="text-left">
				<h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4>
				<ul class="text-2xl">
					<li class="fragment">Code qui "marche" pour des TPs CPE</li>
					<li class="fragment">Difficile à reprendre 6 mois plus tard</li>
					<li class="fragment">Impossible à faire évoluer</li>
					<li class="fragment">Personne d'autre ne comprend</li>
				</ul>
			</div>
			<div class="text-left">
				<h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4>
				<ul class="text-2xl">
					<li class="fragment">Code qui dure des années</li>
					<li class="fragment">Maintenable par une équipe</li>
					<li class="fragment">Évolutif sans tout casser</li>
					<li class="fragment">Prêt pour le monde pro</li>
				</ul>
			</div>
		</div>
		<p class="fragment note mt-8">
			En entreprise, le code vit 5, 10, 20 ans.<br />
			<b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>
		</p>
		<aside class="notes">
			C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.
		</aside>
	</Slide>

	<Slide>
		<h2>Pourquoi vous pourriez décrocher</h2>

		<div>
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
				<g>
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
				<text x="60" y="80" font-size="0.5em" fill="#f39c12"> Procédural </text>
				<text x="60" y="100" font-size="0.5em" fill="#3498db"> POO </text>
			</svg>
		</div>

		<p class="note fragment" data-fragment-index="0">
			Si vous avez l’impression de devenir moins bons,<br />
			c’est que vous êtes en train d’apprendre.
		</p>

		<aside class="notes">
			Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br />
			Mais très vite régression, notamment car il y a des règles à respecter que vous n'aviez pas avant,
			en // en C vous pouvez faire n'importe quoi et ça marche<br />
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n'aurez rien appris de plus<br />
			Restez motivés pour la suite, car après ça décolle vraiment<br />
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
		<div style="display: flex; gap: 2rem; align-items: center; justify-content: center;">
			<svg
				width="1000"
				height="500"
				viewBox="0 0 1000 500"
				xmlns="http://www.w3.org/2000/svg"
				style="flex: 1;background:#fafafa;font-family:sans-serif"
			>
				<!-- Axes -->
				<line x1="80" y1="50" x2="80" y2="430" stroke="#333" />
				<line x1="80" y1="430" x2="950" y2="430" stroke="#333" />

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
					<rect x="780" y="60" width="15" height="15" fill="#E85D75" /><text x="800" y="73"
						>CM (18h)</text
					>
					<rect x="780" y="85" width="15" height="15" fill="#456990" /><text x="800" y="98"
						>TD (12h)</text
					>
					<rect x="780" y="110" width="15" height="15" fill="#F28F3B" /><text x="800" y="123"
						>TP (14h)</text
					>
					<rect x="780" y="135" width="15" height="15" fill="#F6BD60" /><text x="800" y="148"
						>Projet (18h)</text
					>
				</g>

				<!-- Bars -->
				<!-- scale: 1h = 30px -->
				<!-- Dates -->
				<g font-size="11" text-anchor="middle">
					<!-- 02/04 -->
					<g transform="translate(110,430)">
						<!-- CM : 4h -->
						<rect y="-120" width="40" height="120" fill="#E85D75" />

						<!-- TD : 2h -->
						<rect y="-180" width="40" height="60" fill="#456990" />

						<!-- TP : 2h -->
						<rect y="-240" width="40" height="60" fill="#F28F3B" />

						<text y="20" text-anchor="middle">04/02</text>
					</g>

					<!-- 25/02 -->
					<g transform="translate(180,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-120" width="40" height="60" fill="#456990" />
						<text y="20">25/02</text>
					</g>

					<!-- 04/03 -->
					<g transform="translate(250,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-120" width="40" height="60" fill="#456990" />
						<rect y="-180" width="40" height="60" fill="#F28F3B" />
						<text y="20">04/03</text>
					</g>

					<!-- 18/03 -->
					<g transform="translate(320,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-120" width="40" height="60" fill="#456990" />
						<rect y="-180" width="40" height="60" fill="#F28F3B" />
						<text y="20">18/03</text>
					</g>

					<!-- 24/03 -->
					<g transform="translate(390,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-120" width="40" height="60" fill="#456990" />
						<rect y="-180" width="40" height="60" fill="#F28F3B" />
						<text y="20">24/03</text>
					</g>

					<!-- 25/03 -->
					<g transform="translate(460,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-120" width="40" height="60" fill="#456990" />
						<rect y="-180" width="40" height="60" fill="#F28F3B" />
						<text y="20">25/03</text>
					</g>

					<!-- 31/03 -->
					<g transform="translate(530,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-180" width="40" height="120" fill="#F28F3B" />
						<text y="20">31/03</text>
					</g>

					<!-- 01/04 -->
					<g transform="translate(600,430)">
						<rect y="-60" width="40" height="60" fill="#E85D75" />
						<rect y="-180" width="40" height="120" fill="#F6BD60" />
						<text y="20">01/04</text>
					</g>

					<!-- 07/04 -->
					<g transform="translate(670,430)">
						<rect y="-180" width="40" height="180" fill="#F6BD60" />
						<text y="20">07/04</text>
					</g>

					<!-- 05/05 -->
					<g transform="translate(740,430)">
						<rect y="-240" width="40" height="240" fill="#F6BD60" />
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
