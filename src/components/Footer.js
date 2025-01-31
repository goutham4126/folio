import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="container p-4 mx-auto flex items-center sm:flex-row flex-col">
        <p className="hidden md:flex text-sm font-bold sm:py-2 sm:mt-0 mt-4"> 
          Goutham &nbsp; — &nbsp;
          <a href="mailto:goutham4126@gmail.com" className="ml-1 md:flex hidden text-yellow-500" rel="noopener noreferrer" target="_blank">goutham4126@gmail.com</a>
        </p>
        <div className="flex md:ml-auto justify-center gap-6 sm:mt-0 mt-4">
          <Link href="https://www.linkedin.com/in/p-goutham-6a49292a6/" target="_blank">
            <ImLinkedin className="h-6 w-6 md:h-7 md:w-7 text-blue-500 hover:text-blue-600 transition-colors duration-200" />
          </Link>
          <Link href="https://github.com/goutham4126" target="_blank">
            <FiGithub className="h-6 w-6 md:h-7 md:w-7 text-yellow-500 hover:text-yellow-600 transition-colors duration-200" />
          </Link>
          <Link href="https://www.instagram.com/goutham__019" target="_blank">
            <FaInstagram className="h-6 w-6 md:h-7 md:w-7 text-green-500 hover:text-green-600 transition-colors duration-200" />
          </Link>
          <Link href="https://x.com/goutham_019" target="_blank">
            <BsTwitterX className="h-6 w-6 md:h-7 md:w-7 text-red-500 hover:text-red-600 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
