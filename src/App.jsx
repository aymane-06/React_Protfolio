"use client"

import { useState, useEffect } from "react"
import Header from "./components/header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Router>
    
      <div className="min-h-screen bg-white">
        <Header scrollY={scrollY} />
        <Routes>
          <Route path="/" element={[<Hero />,<About/>]} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          

        </Routes>
        <Footer />
      </div>
    
    </Router>
  )
}

export default App
