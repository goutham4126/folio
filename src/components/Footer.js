import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer class="text-white body-font">
        <div class="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
            <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span class="ml-3 text-xl font-bold text-indigo-600">Portfolio</span>
            </div>
            <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">© 2024 Goutham —
            <a href="https://twitter.com/knyttneve" class="text-white ml-1" rel="noopener noreferrer" target="_blank">@goutham4126@gmail.com</a>
            </p>
            <div class="flex md:ml-auto justify-center gap-10 sm:mt-0 mt-4 sm:mr-10 md:mr-20">
                <Link href="https://www.linkedin.com/in/p-goutham-6a49292a6/">
                    <ImLinkedin className="h-6 w-6 md:h-7 md:w-7" />
                </Link>
                <Link href="https://github.com/goutham4126">
                    <FiGithub className="h-6 w-6 md:h-7 md:w-7" />
                </Link>
                <Link href="https://www.instagram.com/goutham__019">
                    <FaInstagram className="h-6 w-6 md:h-7 md:w-7 " />
                </Link>
                <Link href="https://x.com/goutham_019">
                    <BsTwitterX className="h-6 w-6" />
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer