"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link, Links } from "react-router-dom"

const Header = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-teal-600"
        >
            <Link to="/">
          Portfolio
          </Link>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              className={`text-sm font-medium hover:text-teal-600 transition-colors ${isScrolled ? "text-gray-800" : "text-gray-800"}`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
                <Link to={link.href}>
              {link.name}
              </Link>
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={"/contact"}>
            Get In Touch
            </Link>
          </motion.a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-teal-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/contact" className="btn btn-primary text-center" onClick={() => setIsOpen(false)}>
              Get In Touch
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
