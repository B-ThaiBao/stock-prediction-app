import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';

import useAuthStore from './features/auth';

function App() {
	const { checkToken } = useAuthStore();
	useEffect(() => {
		checkToken();
	}, [])

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
