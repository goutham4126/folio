"use client"

import { useState } from "react"
import { MdLiveTv } from "react-icons/md"
import { RiGithubLine } from "react-icons/ri"
import { Button } from "@/components/ui/button"

function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: "🌟 Tutly",
      description:
        "Led the creation of a comprehensive Learning Management System (LMS) platform tailored for our college. Oversaw the coordination of over 400 juniors, introducing innovative functionalities to address the unique challenges faced by students, mentors, and instructors, ensuring an enriched and streamlined educational experience.",
      imageUrl: "https://i.postimg.cc/Gpzjs9kY/Screenshot-2024-08-10-180751.png",
      liveLink: "https://www.tutly.in/",
      githubLink: "https://github.com/GoodKodersUnV/LMS-VNRVJIET",
    },
    {
      title: "💸 Cashio",
      description:
        "Cashio is a user-friendly expense tracker website designed to help individuals manage their finances effectively. With features like detailed income and expense tracking, it provides insightful visualizations, including donut chart, enabling users to make informed financial decisions and enhance budgeting skills",
      imageUrl: "https://i.postimg.cc/v8tnL4H9/Screenshot-2024-10-13-160021.png",
      liveLink: "https://cashio.vercel.app/",
      githubLink: "https://github.com/goutham4126/cashio",
    },
    {
      title: "🚀 StudySphere",
      description:
        "Developed an AI-powered interactive quizzing platform that facilitates seamless quiz generation from various topics or PDFs. The platform offers diverse modes, enables quiz sharing, tracks leaderboards, supports peer collaboration, and includes token refilling for a scalable and engaging learning experience.",
      imageUrl: "https://i.postimg.cc/pr5Q7Z3Y/Screenshot-2024-08-10-180918.png",
      liveLink: "https://studysphere-ai.vercel.app",
      githubLink: "https://github.com/GoodKodersUnV/studysphere",
    },
    {
      title: "🎨 Mindly",
      description:
        "Created a gamified learning platform designed to teach web development through interactive, level-based modules. As users advance through levels, they earn diamonds, creating a sense of accomplishment. This innovative approach makes learning engaging and enjoyable, blending education with game elements.",
      imageUrl: "https://i.postimg.cc/NGb5qmQR/Screenshot-2024-08-10-181539.png",
      liveLink: "https://mindly-ai.vercel.app/",
      githubLink: "https://github.com/GoodKodersUnV/Mindly",
    },
    {
      title: "💡 HealCare",
      description:
        "Engineered a revolutionary healthcare platform designed to enhance communication, accessibility, and efficiency in remote healthcare delivery. This platform offers a seamless experience for patients, healthcare providers, caregivers, and health organizations, significantly improving healthcare outcomes through innovative technology.",
      imageUrl: "https://i.postimg.cc/RFDQX8pZ/Screenshot-2024-08-10-180827.png",
      liveLink: "https://heal-care.vercel.app",
      githubLink: "https://github.com/goutham4126/HealCare",
    },
    {
      title: "🌍 Wixlan",
      description:
        "Developed a logistics platform dedicated to facilitating the buying and selling of goods with integrated location tracking. The platform simplifies transactions, ensures efficient delivery services, and enhances the overall user experience with real-time updates and secure payment options.",
      imageUrl: "https://i.postimg.cc/rz6GL4k6/Screenshot-2024-08-10-180959.png",
      liveLink: "https://wixlan.vercel.app/",
      githubLink: "https://github.com/goutham4126/Wixlan",
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <div className="p-5 text-gray-800">
      <h2 className="text-3xl font-bold my-8 text-center text-yellow-400">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={`slide_image_${index + 1}`}
              className="h-48 w-full object-cover rounded-md mb-2"
            />
            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold my-3">
                {project.title}{" "}
                <a href={project.githubLink} className="text-gray-700" target="_blank" rel="noopener noreferrer">
                  <RiGithubLine className="h-6 w-6" />
                </a>
              </h2>
              <p className="text-gray-700 font-semibold text-justify mb-3 px-2">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  className="text-blue-500 text-sm font-bold px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go Live <MdLiveTv className="inline-block h-5 w-5 ml-1.5 mb-1.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)} variant="secondary" className="text-white">
            Show More ...
          </Button>
        </div>
      )}
    </div>
  )
}

export default Projects

