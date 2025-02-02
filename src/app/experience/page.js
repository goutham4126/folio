"use client"

import { motion } from "framer-motion"
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa"

const Experience = () => {
  const experience = [
    {
      company: "Tutly",
      duration: "2023-present",
      role: "Co-founder",
      description: [
        "Systematized an LMS platform that currently serves more than 500 students annually across multiple institutions.",
        "Created features such as attendance tracking, assignment submission, live code preview and community support.",
        "Processed over 5,000 assignments till date",
      ],
    },
    {
      company: "ElevateBox",
      duration: "Nov, 2024 - Dec, 2024",
      role: "Full Stack Developer Intern",
      description: [
        "Collaborated in a team of 4 to develop DigiSkools, a learning management system with diverse functionalities.",
        "Made key functionalities like gate pass management, assignment scheduling (reducing manual effort by 40%), etc.",
      ],
    },
    {
      company: "MERN Stack Development",
      duration: "Apr, 2024 - Jan, 2025",
      role: "Mentor",
      description: [
        "Mentored over 530+ students through a structured MERN stack curriculum.",
        "Reviewed and guided over 50 students in building full-stack applications and resolving errors.",
      ],
    },
  ]

  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-yellow-400">Experience</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-yellow-400 transform -translate-x-1/2"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 p-4">
                <div className={`bg-white rounded-xl p-6 shadow-xl ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <h3 className="text-2xl font-semibold mb-2">{item.company}</h3>
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="mr-2" />
                    <span>{item.role}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

