"use client"

import { motion } from "framer-motion"
import { Code, Globe, Server, Database, Palette, Smartphone } from "lucide-react"

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: <Code size={24} />, description: "React, Vue, Angular" },
    { name: "Backend Development", icon: <Server size={24} />, description: "Node.js, Express, Django" },
    { name: "Database Design", icon: <Database size={24} />, description: "MongoDB, PostgreSQL, MySQL" },
    { name: "UI/UX Design", icon: <Palette size={24} />, description: "Figma, Adobe XD, Sketch" },
    { name: "Mobile Development", icon: <Smartphone size={24} />, description: "React Native, Flutter" },
    { name: "Web Performance", icon: <Globe size={24} />, description: "Optimization, SEO, Analytics" },
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
    <section id="about" className="section bg-gradient-to-b from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-teal-500 after:mx-auto after:mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-teal-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="bg-teal-500 text-white p-2 rounded-full mr-3">
                <Code size={20} />
              </span>
              Who I Am
            </h3>
            <p className="text-gray-700 mb-5 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. I
              specialize in creating responsive, user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              My journey in web development started when I was in college, and since then, I've worked with various
              technologies and frameworks to deliver high-quality solutions for clients across different industries.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies to
              stay updated with the latest trends in the industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 border-t-2 border-teal-500"
              >
                <div className="text-teal-600 bg-teal-50 p-3 inline-block rounded-full mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{skill.name}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
