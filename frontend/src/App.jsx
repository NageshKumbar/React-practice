import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

// pages
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'

// Components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <Navbar/>
      </header>
      <main>
          <HomePage/>
      </main>
      <footer>
          <Footer/>
      </footer>
    </>
  )
}

export default App
