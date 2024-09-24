import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import MailForm from "@/components/Mail";
import { Toaster } from "react-hot-toast";
import { LuMail } from "react-icons/lu";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-2">
      <div className="hidden sm:flex -rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20" />
      </div>

      <div className="flex items-center mt-3 md:mt-0">
        <nav className="text-sm md:font-semibold flex mx-auto items-center gap-4 md:gap-10 px-4 py-3 rounded-md bg-zinc-700">
          <Link href="#home" className="hover:text-white">Home</Link>
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#skills" className="hover:text-white">Skills</Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <LuMail className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-white" />
            </AlertDialogTrigger>
            <MailForm />
          </AlertDialog>
          <Toaster position="top-center" reverseOrder={false} />
        </nav>
      </div>

      <div className="hidden sm:flex rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20" />
      </div>
    </div>
  );
}

export default Navbar;
