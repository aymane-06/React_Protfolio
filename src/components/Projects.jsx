"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { p } from "motion/react-client"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
    { name: "All", value: "all" },
  ]

  // Fetch projects data
  useEffect(() => {
    setIsLoading(true);
    fetch("https://aymane.azizbenmallouk.com/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Projects data:", data);
        
        if (Array.isArray(data) && data.length > 0) {
          const processedData = data.map(project => ({
            ...project,
            technologies: parseTechnologies(project.technologies)
          }));
          setProjects(processedData);
        } else {
          console.warn("No projects data received or invalid format");
          setProjects([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setProjects([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Parse technologies if they're stored as a string
  const parseTechnologies = (technologies) => {
    if (typeof technologies === 'string') {
      try {
        return JSON.parse(technologies);
      } catch (e) {
        console.error("Error parsing technologies:", e);
        return [];
      }
    }
    return Array.isArray(technologies) ? technologies : [];
  };

  // Filter projects when active filter changes
  useEffect(() => {
    const filtered = activeFilter === "all" 
      ? projects 
      : projects.filter((project) => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [projects, activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card bg-white rounded-lg overflow-hidden shadow-md"
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
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className="text-teal-600 hover:text-teal-800 flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          className="text-teal-600 hover:text-teal-800 flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubLogoIcon className="mr-1 w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No projects found in this category.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
