"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const educationTimeline = [
  {
    year: "2023 - 2025",
    degree: "M.S. Computer Science",
    institution: "Southern Methodist University",
    gpa: "GPA: 4.0/4.0",
    logo: "",
  },
  {
    year: "2018 - 2022",
    degree: "B.Tech Computer Science",
    institution: "JNTU-H Hyderabad, India",
    gpa: "GPA: 8.46/10.0",
    logo: "/jntuh.png",
  },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text glow">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-12 text-gray-300 text-center">
              I am an AI Research Scientist and graduate student, passionate about pushing the boundaries of artificial
              intelligence. My research focuses on deep learning models, graph neural networks, and multimodal AI
              applications in healthcare and scientific domains.
            </p>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Education</h3>
            <div className="space-y-12 relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500">
              {educationTimeline.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-1/3 text-right pr-8">
                    <h4 className="text-xl font-semibold text-white">{edu.year}</h4>
                  </div>
                  <div className="w-1/3 flex justify-center">
                    <div className="bg-blue-500 rounded-full p-2">
                      <Image
                        src={edu.logo || "/smu.png"}
                        alt={edu.institution}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="w-1/3 pl-8">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-400">{edu.gpa}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

