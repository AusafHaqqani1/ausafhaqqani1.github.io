"use client"

import { motion } from "framer-motion"

const publications = [
  {
    title: "Temporal Graph Neural Network-Powered Paper Recommendation on Dynamic Citation Networks",
    conference: "Accepted at the AAAI 2024 Workshop on Scientific Document Understanding",
    link: "https://example.com/paper1",
  },
  {
    title: "Semantic and Visual Attention-Driven Multi-LSTM Network for Automated Clinical Report Generation",
    conference: "Accepted at the AAAI 2024 W3PHIAI-24 Workshop on Health Intelligence",
    link: "https://example.com/paper2",
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text glow">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{pub.title}</h3>
              </a>
              <p className="text-gray-400">{pub.conference}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

