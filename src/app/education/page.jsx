"use client"

import { motion } from "framer-motion"
import { MdOutlineAccessTime, MdSchool } from "react-icons/md"

function Education() {
  const education = [
    {
      institution: "VNR VJIET, Hyderabad",
      degree: "B.Tech in Computer Science",
      period: "2022 - Present",
      icon: MdSchool,
    },
    {
      institution: "Narayana Junior College, Hyderabad",
      degree: "Intermediate",
      period: "2020 - 2022",
      icon: MdSchool,
    },
    {
      institution: "Kothakota Pupils School, Kothakota",
      degree: "10th (CBSE)",
      period: "May 2020",
      icon: MdSchool,
    },
  ]

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold my-8 text-center text-yellow-400">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-yellow-400 text-gray-900 rounded-full p-3 shadow-lg">
                    <edu.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-yellow-400 mb-2">{edu.institution}</h3>
                <p className="text-gray-300 text-center mb-4">{edu.degree}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <MdOutlineAccessTime className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

