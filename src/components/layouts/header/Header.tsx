import { Link, useLocation } from 'react-router-dom';
import './header.css';

interface Location {
	url: string;
	name: string;
}

function Header() {
	const location = useLocation();
	console.log(location);

	const locations: Location[] = [
		{ url: '/', name: 'Accueil' },
		{ url: '/a-propos', name: 'A propos' },
		{ url: '/experiences', name: 'Expériences' },
		{ url: '/projets', name: 'Projets' },
		{ url: '/contact', name: 'Contact' },
	];

	return (
		<header>
			{locations.map((loc, index) => (
				<Link key={index} to={loc.url}>
					<div className={location.pathname === loc.url ? 'active' : ''}>
						{loc.name}
					</div>
				</Link>
			))}
			<div>
				<button>CV</button>
			</div>
		</header>
	);
}

export default Header;
