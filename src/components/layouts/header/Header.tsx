import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './header.css';
import { useState } from 'react';

interface Location {
	url: string;
	name: string;
}

function Header() {
	const location = useLocation();
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(
		window.innerWidth > 1050
	);
	const [isResponsive, setIsResponsive] = useState<boolean>(
		window.innerWidth < 1050
	);

	const locations: Location[] = [
		{ url: '/', name: 'Accueil' },
		{ url: '/a-propos', name: 'A propos' },
		{ url: '/experiences', name: 'Expériences' },
		{ url: '/projets', name: 'Projets' },
		{ url: '/contact', name: 'Contact' },
	];

	function handleResize() {
		setIsResponsive(window.innerWidth < 1050);
		setIsNavBarOpen(window.innerWidth > 1050);
	}

	function handleBarsAndXMarkClick() {
		setIsNavBarOpen(!isNavBarOpen);
	}

	window.addEventListener('resize', handleResize);

	return (
		<header>
			{isNavBarOpen ? (
				<>
					{isResponsive && (
						<div className='xMark' onClick={handleBarsAndXMarkClick}>
							<FontAwesomeIcon icon={faXmark} />
						</div>
					)}

					{locations.map((loc, index) => (
						<Link key={index} to={loc.url}>
							<div className={location.pathname === loc.url ? 'active' : ''}>
								{loc.name}
							</div>
						</Link>
					))}

					<div className='resume'>
						<button>CV Dev</button>
						<button>CV Cybersécurité</button>
					</div>
				</>
			) : (
				<div className='bars' onClick={handleBarsAndXMarkClick}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			)}
		</header>
	);
}

export default Header;
