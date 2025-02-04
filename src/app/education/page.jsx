"use client"

import { motion } from "framer-motion"
import { MdSchool, MdGrade, MdLocationOn, MdOutlineAccessTime } from "react-icons/md"

function Education() {
  const education = [
    {
      institution: "VNR VJIET, Hyderabad",
      degree: "B.Tech in Computer Science",
      period: "2022 - Present",
      grade: "9.40",
      location: "Hyderabad, India",
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate",
      period: "2020 - 2022",
      grade: "98.60%",
      location: "Hyderabad, India",
    },
    {
      institution: "Kothakota Pupils School",
      degree: "10th (CBSE)",
      period: "May 2020",
      grade: "91.00%",
      location: "Kothakota, India",
    },
  ]

  return (
    <section className="body-font">
      <div className="container px-5 mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">Education</h2>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center mx-auto w-full pb-10 mb-5 text-center sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-6 inline-flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 flex-shrink-0 shadow-lg">
              <MdSchool className="sm:w-14 sm:h-14 w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 sm:mt-0">
              <h2 className="text-lg font-semibold text-yellow-400 mb-2">{edu.institution}</h2>
              <p className="text-gray-200">{edu.degree}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                <div className="flex items-center text-indigo-400">
                  <MdGrade className="w-5 h-5 mr-1" />
                  <span>{edu.grade}</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <MdOutlineAccessTime className="w-5 h-5 mr-1" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <MdLocationOn className="w-5 h-5 mr-1" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
