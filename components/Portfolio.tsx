"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "AI-Powered Image Recognition",
    description: "Developed a state-of-the-art image recognition system using deep learning techniques.",
    link: "https://github.com/yourusername/image-recognition",
  },
  {
    id: 2,
    title: "Natural Language Processing for Sentiment Analysis",
    description: "Created an NLP model to analyze sentiment in social media posts with high accuracy.",
    link: "https://github.com/yourusername/nlp-sentiment-analysis",
  },
  {
    id: 3,
    title: "Reinforcement Learning for Game AI",
    description: "Implemented a reinforcement learning algorithm to train an AI agent to play complex games.",
    link: "https://github.com/yourusername/rl-game-ai",
  },
]

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Project
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

