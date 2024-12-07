import Link from 'next/link'
import { FaFileAlt } from "react-icons/fa"
import { ImLinkedin } from "react-icons/im"
import { FiGithub } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { SiLeetcode } from "react-icons/si"

function Navbar() {
  return (
    <div className="flex items-center justify-center relative bg-gray-800 text-white px-6 py-2 sm:px-8 text-center z-50">
      <div className="hidden lg:flex items-center justify-center gap-5">
        <p className="font-semibold text-sm">
          All information presented here is accurate to the best of my knowledge. Feel free to reach out !
        </p>
          <a
            href="mailto:goutham4126@gmail.com"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
          >
            Contact Me <span aria-hidden="true" className="ml-2">&rarr;</span>
          </a>
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 p-2 bg-gray-800 bg-opacity-50 px-8 rounded-full">
        {[{ href: "https://drive.google.com/file/d/1U12VjnNGDXUpHhPfsv9e1daIC6rP1gl1/view?usp=sharing", icon: FaFileAlt, label: "Resume" },
          { href: "https://www.linkedin.com/in/p-goutham-6a49292a6/", icon: ImLinkedin, label: "LinkedIn" },
          { href: "https://github.com/goutham4126", icon: FiGithub, label: "GitHub" },
          { href: "https://discordapp.com/users/1210127934908661841", icon: TbBrandDiscord, label: "Discord" },
          { href: "https://leetcode.com/u/goutham4126/", icon: SiLeetcode, label: "LeetCode" }]
          .map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2"
            >
              <Link href={item.href} aria-label={item.label}>
                <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-300 hover:text-indigo-400 transition-colors duration-300" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
