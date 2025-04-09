import { Github, Linkedin,Twitter,Instagram } from "lucide-react";
import { motion } from "framer-motion";



const SocialLinks=()=>{
    const socialLinks = [
        { icon: <Github size={20} />, url: "https://github.com/aymane-06" },
        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/aymane-himame/" },
      ]
    return ( <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 md:mt-0 pt-3.5"
      >
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-teal-600 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>)

}

export default SocialLinks;