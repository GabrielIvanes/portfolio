import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projets from './pages/Projects';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/a-propos' element={<AboutMe />} />
				<Route path='/projets' element={<Projets />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
