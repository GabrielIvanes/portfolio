import { Link } from 'react-router-dom';
import './header.css';

function Header() {
	return (
		<header>
			<div className='left'>
				<Link to='/'>
					<h1>Gabriel Ivanes</h1>
				</Link>
			</div>
			<div className='right'>
				<Link to='/'>
					<div>Accueil</div>
				</Link>
				<Link to='/experiences'>
					<div>Expériences</div>
				</Link>
				<Link to='/projets'>
					<div>Projets</div>
				</Link>
				<Link to='/contact'>
					<div>Contact</div>
				</Link>
				<div>
					<button>CV</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
