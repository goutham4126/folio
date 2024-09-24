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
    <div className="flex justify-between items-center px-2">
      <div className="hidden sm:flex -rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20" />
      </div>
      <div className="flex items-center gap-2 md:gap-8 mt-3 md:mt-0">
        <nav className="text-sm md:font-semibold flex mx-auto items-center gap-4 md:gap-10 px-8 py-3 rounded-md bg-zinc-700">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
        </nav>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <LuMail className="h-8 w-8 text-zinc-500"/>
            </AlertDialogTrigger>
            <MailForm />
          </AlertDialog>
          <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="hidden sm:flex rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20" />
      </div>
    </div>
  );
}

export default Navbar;
