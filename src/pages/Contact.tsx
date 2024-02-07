import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div className='wrapper contact'>
			<h1>Contact</h1>
			<div className='content'>
				<p>
					Je suis activement à la recherche d'un stage cybersécurité ou
					développement logiciel à partir du 08 avril 2024 pour une durée de 16
					à 18 semaines.
					<br />
					<br />
					<br />
					Vous pouvez me contacter ci-dessous via un de mes réseaux !
				</p>
				<div className='social-media'>
					<div>
						<a href='mailto:ivanes.gabriel@gmail.com' target='_blank'>
							<FontAwesomeIcon icon={faEnvelope} className='icon icon-mail' />
						</a>
					</div>
					<div>
						<a href='https://github.com/GabrielIvanes' target='_blank'>
							<FontAwesomeIcon icon={faGithub} className='icon icon-github' />
						</a>
					</div>
					<div>
						<a
							href='https://www.linkedin.com/in/gabriel-ivanes/'
							target='_blank'
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='icon icon-linkedin'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
