"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "PyTorch", icon: "🔥" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "LLMs", icon: "📚" },
  { name: "GNNs", icon: "🕸️" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "NLP", icon: "💬" },
  { name: "Data Science", icon: "📊" },
  { name: "Machine Learning", icon: "🤖" },
]

const TechnicalExpertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalExpertise

