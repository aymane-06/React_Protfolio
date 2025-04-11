"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Link } from "react-router-dom"
import SocialLinks from "./SocialLinks"
import { Typewriter } from 'react-simple-typewriter'
import TextTransition, { presets } from 'react-text-transition'


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <motion.span
            className="inline-block text-teal-600 font-medium mb-2 tracking-wider uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  Himame Aymane
</motion.h1>

<motion.p
  className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <Typewriter
    words={['Full Stack Developer', 'Tech Lover', 'Problem Solver', 'Creative Thinker', 'Lifelong Learner','let\'s build something amazing together!']}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</motion.p>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's
            bring your ideas to life!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group w-full sm:w-auto"
            >
              <Link to="/contact" className="btn btn-primary flex justify-center items-center relative z-10 px-8 py-3 font-medium rounded-lg bg-teal-600">
                Contact Me
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </motion.div>
            <motion.a 
              href="/public/Aymane HIMAME - CV.pdf" 
              className="btn btn-secondary flex justify-center items-center px-8 py-3 font-medium rounded-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-md w-full sm:w-auto"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full transform rotate-12 scale-[0.85] blur-sm"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img src="./src/assets/profile_pic.jfif" alt="Himame Aymane" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-gray-400 hover:text-teal-600 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ y: 5 }}
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  )
}

export default Hero
