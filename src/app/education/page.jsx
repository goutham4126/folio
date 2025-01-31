"use client"

import { useState, useEffect } from "react"
import { MdOutlineAccessTime, MdSchool, MdLocationOn } from "react-icons/md"
import { motion } from "framer-motion"

function Education() {
  const [userLocation, setUserLocation] = useState({ latitude: 17.5388, longitude: 78.3854 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        () => {
          console.error("Unable to retrieve your location")
        },
      )
    }
  }, [])

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

  const destination = "Vignana Jyothi Nagar, Pragathi Nagar, Nizampet, Hyderabad, Telangana 500090"
  const googleMapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=${googleMapKey}&origin=${userLocation.latitude},${userLocation.longitude}&destination=${encodeURIComponent(destination)}`

  return (
    <section className="bg-slate-900 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-2/3 w-full rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              width="100%"
              height="400"
              className="rounded-t-xl p-2"
              frameBorder="0"
              title="map"
              src={mapSrc}
              allowFullScreen
            ></iframe>
            <div className="p-6 rounded-b-xl">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">Current Institution</h2>
              <p className="text-lg mb-4">VNR VJIET, Hyderabad</p>
              <div className="flex items-start gap-2">
                <MdLocationOn className="text-yellow-400 text-xl mt-1 h-5 w-5" />
                <p className="leading-relaxed">{destination}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 w-full  p-6 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center p-3 shadow-lg">
                    <edu.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">{edu.institution}</h3>
                    <p className="text-gray-300">{edu.degree}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <MdOutlineAccessTime className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

