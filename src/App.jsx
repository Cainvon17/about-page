import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/about/about.jsx'
import './assets/bg.jpeg'
const App = () => {
  return (
    
    <body>
      <Navbar />
      <Routes>
        <Route path='/about' element = {<About />}/>
      </Routes>
      <h1 className="hero-title">Techno Arena</h1>
      <p className="hero-subtitle">
        One Arena. One Code.<br />
        Infinite Loops.
      </p>
    </body>
  )
}

export default App