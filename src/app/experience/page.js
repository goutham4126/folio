"use client";

import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experience = [
    {
      company: "Tutly",
      duration: "2023-present",
      role: "Co-founder",
      description: [
        "Systematized an LMS platform that currently serves more than 500 students annually across multiple institutions.",
        "Created features such as attendance tracking, assignment submission, live code preview, and community support.",
        "Processed over 5,000 assignments to date",
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
  ];

  return (
    <section className="text-white body-font">
      <h2 className="text-3xl font-bold text-center text-yellow-400">Experience</h2>
      <div className="container px-5 pt-16 mx-auto flex flex-wrap">
        {experience.map((item, index) => (
          <div
            key={index}
            className="flex relative pb-12 sm:items-center md:w-2/3 mx-auto"
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center rounded-full">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              {index + 1}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full hidden md:inline-flex items-center justify-center">
                <FaBriefcase className="w-12 h-12" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font mb-3 text-xl">{item.company}</h2>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <FaBriefcase className="mr-2" /> {item.role}
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" /> {item.duration}
                </div>
                <ul className="list-disc list-inside text-gray-400">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;