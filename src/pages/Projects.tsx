import Project from '../components/project/Project';

interface Project_Type {
	name: string;
	date: string;
	description: string;
	stack: string[];
	images_path: string[];
	links: {
		type: string;
		link: string;
	}[];
}

function Projects() {
	const projects: Project_Type[] = [
		{
			name: 'Flixhunt',
			date: '2023-2024',
			description:
				"Flixhunt est un projet full stack que j'ai commencé en 2023. Cette plateforme offre une gamme d'informations sur les films, les séries télévisées ainsi que sur chaque personne ayant joué un rôle dans leurs réalisations, tout en permettant la création de listes personnalisées. Passionné de cinéma, j'ai développé cette application en utilisant l'API de TMDB, offrant ainsi un espace où tout le monde peut cataloguer ses films et séries préférés, tout en gardant une trace des émotions qu'ils suscitent lors de leur visionnage.",
			stack: [
				'React',
				'SASS',
				'Node.JS',
				'Express',
				'API REST',
				'mongoose',
				'MongoDB',
				'JsonWebToken',
				'TMDB API',
			],
			images_path: [
				'/flixhunt/auth.png',
				'/flixhunt/home.png',
				'/flixhunt/movie-1.png',
				'/flixhunt/movie-2.png',
				'/flixhunt/person.png',
				'/flixhunt/search.png',
			],
			links: [
				{
					type: 'github',
					link: 'https://github.com/GabrielIvanes/flixhunt-v2',
				},
				{
					type: 'github',
					link: 'https://github.com/GabrielIvanes/flixhunt-api-v2',
				},
			],
		},
	];

	return (
		<div className='wrapper projects'>
			<h1>Projets</h1>
			<div className='content'>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
