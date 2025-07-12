import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componenets/NavBar'
import Intro from './componenets/Intro'
import Footer from './componenets/Footer'

function App() {
	return (
		<>
			<NavBar />
			<Intro />
			<Footer />
		</>
	)
}

export default App
