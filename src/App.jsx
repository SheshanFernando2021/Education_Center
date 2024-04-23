import React from 'react'
import Navbar from "./Components/Navbar.jsx"
import Homepage from "./Components/Homepage.jsx"
import About from './Components/About.jsx'
import Students from './Components/Students.jsx'
import Contact from './Components/Contact.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Students />
      <Contact />
      
    </div>
  )
}

export default App
