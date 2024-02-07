import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Carousel from '../carousel/Carousel';

import './project.css';

interface Project {
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

interface Props {
	project: Project;
}

function Project({ project }: Props) {
	console.log();

	return (
		<div className='project'>
			<div className='information-wrapper'>
				<div className='information'>
					<h1>{project.name}</h1>
					<p className='date'>{project.date}</p>
					<p className='description'>{project.description}</p>
					<div className='stack'>
						{project.stack.map((techno, index) => (
							<div className='techno' key={index}>
								{techno}
							</div>
						))}
					</div>
					<div className='links'>
						{project.links.map((l, index) => (
							<a href={l.link} target='_blank' key={index}>
								{l.type === 'github' ? (
									<FontAwesomeIcon
										icon={faGithub}
										className='icon icon-github'
									/>
								) : (
									<FontAwesomeIcon
										icon={faUpRightFromSquare}
										className='icon'
									/>
								)}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className='images'>
				<Carousel images_path={project.images_path} height={30} />
			</div>
		</div>
	);
}

export default Project;
