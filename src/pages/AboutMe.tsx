function AboutMe() {
	return (
		<div className='about-me wrapper'>
			<div className='left'>
				<div>
					Bonjour ! Je suis Gabriel Ivanes, élève en deuxième année à l'école{' '}
					<strong>IMT Nord Europe</strong>. J'ai commencé à m'intéresser au{' '}
					<strong>développement d'applications</strong> et à la{' '}
					<strong>cybersécurité</strong> depuis quelques années pour lesquels
					j'ai developpé un réel intérêt.
				</div>
				<br />
				<br />
				<div>
					Grâce à mes études, j’ai pu développer de nombreuses compétences
					nécessaires à l’exercice de ces domaines. <strong>Animé</strong> par
					l’envie d’en <strong>apprendre tous les jours</strong>,{' '}
					<strong>toujours plus</strong>, j’effectue parallèlement à mes études
					des <strong>cours en ligne</strong> notamment sur OpenClassrooms et
					edX (CS50 de Harvard) et je <strong>réalise des projets</strong> afin
					de mettre en pratique mes connaissances.
				</div>
			</div>
			<div className='right'>
				<div className='profile-picture'></div>
			</div>
		</div>
	);
}

export default AboutMe;
