import Home from "@/app/home/page"
import About from "@/app/about/page"
import Skills from "@/app/skills/page"
import Projects from "@/app/projects/page"
import Education from "@/app/education/page"
import Experience from "@/app/experience/page"
import Achievements from "@/app/achievements/page"
import Work from "@/components/Work"
import Contact from "@/app/contact/page"

const Page = () => {
  return (
    <div className="space-y-10">
      <div id="home"><Home /></div>
      <Work/>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="achievements"><Achievements /></div>
      <div id="contact"><Contact /></div>
    </div>
  )
}

export default Page
