"use client"
import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    { name: "Tailwind CSS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", imageUrl: "https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg" },
    {
      name: "JavaScript",
      imageUrl:
        "https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png",
    },
    {
      name: "CSS",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRkTTDrLQr_SMM_z4EUh3OL7EBItUoATnMw&s",
    },
    { name: "React", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "MySQL", imageUrl: "https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" },
    {
      name: "Prisma",
      imageUrl:
        "https://yt3.googleusercontent.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Git",
      imageUrl: "https://thumbs.dreamstime.com/b/astana-kazakhstan-july-git-icon-logo-vector-symbol-198642057.jpg",
    },
    { name: "GitHub", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
    { name: "C++", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "Python", imageUrl: "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png" },
  ]

  return (
    <div className="relative py-6">
      <div className="max-w-6xl mx-auto space-y-4 relative z-10">
        <div className="text-center">
          <p className="text-gray-400 my-4 text-base font-semibold md:text-xl md:pb-4">
            Here are the technologies and tools I work with
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg h-32 w-36 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.imageUrl || "/placeholder.svg"} alt={skill.name} className="w-20 h-24 object-contain" />
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-xl">
                  <span className="text-white text-sm font-semibold">{skill.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

