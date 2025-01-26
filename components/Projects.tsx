"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Multimodal LLM for Drug Repurposing with Heterogeneous Graph Transformer",
    description:
      "Developed a multimodal system integrating molecular interaction data, protein-gene relationships, and side-effect predictions for drug repurposing. Optimized heterogeneous graph transformer architecture using PyG and PyTorch, achieving 30% efficiency gains in processing multi-modal data streams.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Energy-Preserving Variational Auto-Encoding and Decoding of Atomistic Protein Structure",
    description:
      "Developed a VAE model achieving a 30% reduction in the dimensionality of protein structures while preserving critical trajectory data. Presented findings at ACS Fall 2023, showcasing innovations in protein structure optimization.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text glow">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-black rounded-lg shadow-md overflow-hidden cursor-pointer border border-gray-800 relative"
              whileHover={{ scale: 1.03 }}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400 mb-4">{project.description}</p>
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

export default Projects

