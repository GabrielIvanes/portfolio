import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Competences from './pages/Competences';
import ErrorPage from './pages/ErrorPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/a-propos' element={<AboutMe />} />
				<Route path='/projets' element={<Projects />} />
				<Route path='/competences' element={<Competences />} />
				<Route path='/experiences' element={<Experiences />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
