"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"
import { Linkedin, Github, Mail } from "lucide-react"

const Landing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/image.jpg"
              alt="Mohammad Ausaf Ali Haqqani"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500 shadow-lg mx-auto mb-8 glow-bg"
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mohammad Ausaf Ali Haqqani
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AI Research Scientist & Graduate Student
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://linkedin.com/in/mohammad-ausaf-ali-haqqani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/ausafhaqqani1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="mailto:malihaqqani@smu.edu"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={28} />
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
                width={28}
                height={28}
                className="inline-block"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing

