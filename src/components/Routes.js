"use client"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const Routes = () => {
  const [activeSection, setActiveSection] = useState("home")

  const routes = [
    { path: "home", name: "Home", color: "bg-red-500" },
    { path: "about", name: "About me", color: "bg-orange-500" },
    { path: "skills", name: "Skills", color: "bg-yellow-500" },
    { path: "projects", name: "Projects", color: "bg-green-500" },
    { path: "education", name: "Education", color: "bg-blue-500" },
    { path: "experience", name: "Experience", color: "bg-violet-500" },
    { path: "achievements", name: "Achievements", color: "bg-cyan-500" },
    {path:"contact",name:"Contact",color:"bg-pink-500"}
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map(route => document.getElementById(route.path))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(routes[i].path)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (path) => {
    const element = document.getElementById(path)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex space-x-3 md:space-x-5">
      {routes.map((route) => (
        <button
          key={route.path}
          onClick={() => handleClick(route.path)}
          className="flex items-center space-x-2"
        >
          <div className={`h-3 w-3 rounded-full ${route.color}`}></div>
          {activeSection === route.path && (
            <Badge variant="outline" className="text-slate-300 border-slate-600">
              {route.name}
            </Badge>
          )}
        </button>
      ))}
    </div>
  )
}

export default Routes
