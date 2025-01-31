"use client"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Routes = () => {
  const pathname = usePathname()

  const routes = [
    { path: "/", name: "Home", color: "bg-red-500" },
    { path: "/skills", name: "Skills", color: "bg-yellow-500" },
    { path: "/projects", name: "Projects", color: "bg-green-500" },
    { path: "/education", name: "Education", color: "bg-blue-500" },
    { path: "/experience", name: "Experience", color: "bg-violet-500" },
  ]

  return (
    <div className="flex space-x-4">
      {routes.map((route) => (
        <Link href={route.path} key={route.path} className="flex items-center space-x-2">
          <div className={`h-3 w-3 rounded-full ${route.color}`}></div>
          {pathname === route.path && <Badge variant="outline" className="text-slate-300 py-1 px-3 border-slate-600">{route.name}</Badge>}
        </Link>
      ))}
    </div>
  )
}

export default Routes

