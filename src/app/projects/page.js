"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./slider.css";
import { MdLiveTv } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

function Projects() {
  const projects = [
    {
      title: "🌟 Tutly",
      description: "Led the creation of a comprehensive Learning Management System (LMS) platform tailored for our college. Oversaw the coordination of over 400 juniors, introducing innovative functionalities to address the unique challenges faced by students, mentors, and instructors, ensuring an enriched and streamlined educational experience.",
      imageUrl: "https://i.postimg.cc/Gpzjs9kY/Screenshot-2024-08-10-180751.png",
      liveLink: "https://www.tutly.in/",
      githubLink: "https://github.com/GoodKodersUnV/LMS-VNRVJIET",
    },
    {
      title: "🚀 StudySphere",
      description: "Developed an AI-powered interactive quizzing platform that facilitates seamless quiz generation from various topics or PDFs. The platform offers diverse modes, enables quiz sharing, tracks leaderboards, supports peer collaboration, and includes token refilling for a scalable and engaging learning experience.",
      imageUrl: "https://i.postimg.cc/pr5Q7Z3Y/Screenshot-2024-08-10-180918.png",
      liveLink: "https://studysphere-ai.vercel.app",
      githubLink: "https://github.com/GoodKodersUnV/studysphere",
    },
    {
      title: "🎨 Mindly",
      description: "Created a gamified learning platform designed to teach web development through interactive, level-based modules. As users advance through levels, they earn diamonds, creating a sense of accomplishment. This innovative approach makes learning engaging and enjoyable, blending education with game elements.",
      imageUrl: "https://i.postimg.cc/NGb5qmQR/Screenshot-2024-08-10-181539.png",
      liveLink: "https://mindly-ai.vercel.app/",
      githubLink: "https://github.com/GoodKodersUnV/Mindly",
    },
    {
      title: "💡 HealCare",
      description: "Engineered a revolutionary healthcare platform designed to enhance communication, accessibility, and efficiency in remote healthcare delivery. This platform offers a seamless experience for patients, healthcare providers, caregivers, and health organizations, significantly improving healthcare outcomes through innovative technology.",
      imageUrl: "https://i.postimg.cc/RFDQX8pZ/Screenshot-2024-08-10-180827.png",
      liveLink: "https://heal-care.vercel.app",
      githubLink: "https://github.com/goutham4126/HealCare",
    },
    {
      title: "🌍 Wixlan",
      description: "Developed a logistics platform dedicated to facilitating the buying and selling of goods with integrated location tracking. The platform simplifies transactions, ensures efficient delivery services, and enhances the overall user experience with real-time updates and secure payment options.",
      imageUrl: "https://i.postimg.cc/rz6GL4k6/Screenshot-2024-08-10-180959.png",
      liveLink: "https://wixlan.vercel.app/",
      githubLink: "https://github.com/goutham4126/Wixlan",
    },
  ];

  return (
    <div className="p-5 bg-gray-50 text-gray-800 pt-10">
      <h1 className="text-2xl font-bold text-center">✨ Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={25}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper_container"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="mb-3 -mt-5 z-0">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
              <img
                src={project.imageUrl}
                alt={`slide_image_${index + 1}`}
                className="h-48 w-full object-cover rounded-md mb-2"
              />
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold my-3">{project.title} <a href={project.githubLink} className="text-gray-700"><RiGithubLine className="h-6 w-6"/></a></h2>
                <p className="text-gray-700 font-semibold text-justify mb-3 px-2">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.liveLink} className="text-blue-500 text-sm font-bold px-2">Go Live <MdLiveTv className="inline-block h-5 w-5 ml-1.5 mb-1.5"/></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
