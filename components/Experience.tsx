"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    year: "08/2023 – Present",
    title: "Research Assistant",
    company: "Southern Methodist University",
    location: "Dallas, TX",
    logo: "/smu.png",
    responsibilities: [
      "Developed scalable TGN with PyG for citation networks",
      "Engineered multi-modal pipeline for glaucoma diagnosis",
      "Built GraphRAG pipeline for NASA Earth Science",
    ],
  },
  {
    year: "06/2021 - 08/2023",
    title: "AI Engineer",
    company: "Centella Scientific",
    location: "Hyderabad, India",
    logo: "/centella.png",
    responsibilities: [
      "Architected 3D GNN for ADMET prediction",
      "Developed hybrid CGAN for protein-ligand interactions",
      "Implemented LangChain pipelines for data curation",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text glow">Experience</h2>
        <div className="space-y-12 relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex items-center relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-1/3 text-right pr-8">
                <h4 className="text-xl font-semibold text-white">{exp.year}</h4>
              </div>
              <div className="w-1/3 flex justify-center">
                <div className="bg-blue-500 rounded-full p-2">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="w-1/3 pl-8">
                <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                <p className="text-gray-400">
                  {exp.company} - {exp.location}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

