function Experiences() {
	return (
		<div className='wrapper experiences'>
			<h1>Expériences</h1>
			<div className='content'>
				<article>
					<h2>IMT Nord Europe</h2>
					<div className='date'>2020 - 2025</div>
					<p>
						Actuellement en dernière année du cycle ingénieur (bac+5).
						Programming for Distributed System, Compilers & Interpreters,
						Software Architecture and Mobile Platform
					</p>
				</article>
				<article>
					<h2>Stage Ingénieur DevOps</h2>
					<div className='date'>
						Thales - Gennevilliers (92230) | 2024 (4 mois)
					</div>
					<div>
						Mise en place d'une chaîne automatique, avec Jenkins, de déploiement
						et de configuration de deux machines virtuelles Debian et Windows
						Server sur un VMware ESXi.
					</div>
				</article>
				<article>
					<h2>Stage Product Owner</h2>
					<div className='date'>
						OMNEO Solutions - Lille (59000) | 2023 (3 mois)
					</div>
					<ul>
						<li>Définition et communication de la vision du produit</li>
						<li>Création et suivi du backlog, priorisation des features</li>
						<li>Rédaction de users stories</li>
						<li>
							Elaboration d’une roadmap d’évolution et d’un diagramme de Gantt
							(MS Project)
						</li>
						<li>Référent RSE: réalisation d’animations</li>
					</ul>
				</article>
				<article>
					<h2>Stage de technicien SSI (Sécurité des systèmes d'information)</h2>
					<div className='date'>
						Banque Populaire du Nord - Marcq-en-Barœul (59700) | 2022 (3 mois)
					</div>
					<ul>
						<li>
							Mise en qualité et intégration de la cartographie des risques SSI
						</li>
						<li>
							Création de rapports, d'alertes et de tableaux de bord avec Splunk
							pour la SSI.
						</li>
					</ul>
				</article>
				<article>
					<h2>Stage de découverte de l'entreprise</h2>
					<div className='date'>
						Cerballiance - Lille (59000) | 2021 (2 mois)
					</div>
					<ul>
						<li>
							Inventaire et référencement du parc informatique de Cerballiance
							en autonomie
						</li>
						<li>Maintenance du parc informatique</li>
						<li>
							Installation, brassage et gestion de matériels afin de rendre une
							nouvelle salle opérationnelle en autonomie.
						</li>
					</ul>
				</article>
			</div>
		</div>
	);
}

export default Experiences;
