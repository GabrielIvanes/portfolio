import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/a-propos' element={<AboutMe />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
