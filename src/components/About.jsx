"use client"

import { motion } from "framer-motion"
import { Code, Globe, Server, Database, Palette, Smartphone, Star, Braces, Handshake } from "lucide-react"

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: <Code size={24} />, description: "React, Vue, TailwindCss" },
    { name: "Backend Development", icon: <Server size={24} />, description: "Laravel,PHP" },
    { name: "Database Design", icon: <Database size={24} />, description: "PostgreSQL, MySQL,MongoDB" },
    { name: "UI/UX Design", icon: <Palette size={24} />, description: "Figma, Sketch" },
    { name: "Outils", icon: <Star size={24} />, description: "Git, Postman, LucidChart, Jira, Draw.io" },
    { name: "Web Performance", icon: <Globe size={24} />, description: "Optimization, SEO, Analytics" },
    { name: "Langages", icon: <Braces size={24} />, description: "PHP, JavaScript (ES6), JQuery, TypeScript" },
    { name: "Work Approach", icon: <Handshake size={24} />, description: "Agile, Scrum" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="section bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-teal-500 after:mx-auto after:mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-teal-500 lg:w-2/5"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 flex items-center">
              <span className="bg-teal-500 text-white p-2 rounded-full mr-3 flex-shrink-0">
                <Code size={18} />
              </span>
              Who I Am
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Hi, I'm Aymane Himame, a passionate Full Stack Web Developer with a knack for creating clean, efficient, and scalable web applications. I specialize in building dynamic and responsive websites using modern technologies like React, PHP, Laravel, and TailwindCSS.

With a strong foundation in Agile methodologies and experience in both front-end and back-end development, I am adept at taking projects from concept to completion, whether it's crafting user-friendly interfaces or implementing secure server-side logic. I thrive in collaborative environments, bringing creative solutions to the table while ensuring code quality and maintainability.

On this portfolio, you'll find a selection of my projects showcasing my skills in UI/UX design, database management, API development, and custom web solutions. My goal is always to build user-centered, visually appealing, and high-performance websites.

Feel free to explore my work and get in touch!
            </p>
            
            
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-3/5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 border-t-2 border-teal-500 flex flex-col h-full"
              >
                <div className="text-teal-600 bg-teal-50 p-2 inline-block rounded-full mb-3">{skill.icon}</div>
                <h4 className="text-base md:text-lg font-semibold mb-1 text-gray-800">{skill.name}</h4>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
