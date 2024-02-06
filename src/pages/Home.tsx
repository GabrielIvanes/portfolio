import { useState } from 'react';
import astronaut from '../assets/images/astronaut.png';

function Home() {
	const [isImageDisplay, setIsImageDisplay] = useState<boolean>(
		window.innerWidth > 1100
	);

	function handleResize() {
		setIsImageDisplay(window.innerWidth > 1100);
	}

	window.addEventListener('resize', handleResize);

	return (
		<div className='home'>
			<div className='presentation'>
				<div>
					<p>Bonjour et bienvenue, je m'appelle</p>
					<h1>Gabriel Ivanes.</h1>
					<h2>Je suis un étudiant ingénieur à l'IMT Nord Europe.</h2>
				</div>
				<div className='tagline'>
					Intrigué, fasciné, passionné par la cybersécurité et le développement
					logiciel, j'aborde chaque défi avec enthousiasme, persévérance et
					rigueur.
				</div>
				<div className='short-presentation'>
					Je suis actuellement à la recherche d'une opportunité de{' '}
					<strong>stage</strong> en <strong>France</strong> dans les domaines de
					la <strong>cybersécurité</strong>, des{' '}
					<strong>systèmes et réseaux</strong> ou du{' '}
					<strong>développement logiciel</strong> à partir du{' '}
					<strong>08 avril 2024</strong> pour une durée de{' '}
					<strong>16 à 18 semaines</strong>.
				</div>
			</div>
			<button>Contactez-moi !</button>

			{isImageDisplay && <img src={astronaut} alt='astronaut' />}
		</div>
	);
}

export default Home;
