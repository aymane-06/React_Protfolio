"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: ["React Native", "Redux", "Node.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website template for developers and designers.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecast data and location search.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Mobile social networking application with real-time messaging and content sharing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filters = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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
    <section id="projects" className="section pt-24 pb-10 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are some of my recent projects. Each project reflects my skills and experience in different technologies.
        </motion.p>

        <motion.div
          className="flex justify-center mb-12 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === filter.value ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="text-teal-600 hover:text-teal-800 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-teal-600 hover:text-teal-800 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
