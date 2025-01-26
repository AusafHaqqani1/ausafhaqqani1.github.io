"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text glow">Contact Me</h2>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://linkedin.com/in/mohammad-ausaf-ali-haqqani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/ausafhaqqani1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={32} />
          </motion.a>
          <motion.a
            href="mailto:malihaqqani@smu.edu"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={32} />
          </motion.a>
          <motion.a
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID&user=_KBNsZYAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src="/download.png"
              alt="Google Scholar"
              width={32}
              height={32}
              className="inline-block"
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact

