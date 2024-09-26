"use client";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import MailForm from "@/components/Mail";
import { Toaster } from "react-hot-toast";
import { LuMail } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden sm:flex flex-row justify-between items-center px-2">
        <div className="hidden sm:flex -rotate-45">
          <img
            src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png"
            className="w-20"
            alt="Logo"
          />
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
          </nav>
        </div>
        <div className="hidden sm:flex rotate-45">
          <img
            src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png"
            className="w-20"
            alt="Logo"
          />
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center p-3 bg-slate-200 text-black md:text-white md:bg-black">
        <div className="flex items-center">
          {
            open ?
            <RxCross2 className="h-6 w-6 cursor-pointer" onClick={() => setOpen(false)}/>:
            <IoMenu className="h-6 w-6 cursor-pointer"
              onClick={() => setOpen(true)}/>
          }
          {open && (
            <nav className="flex flex-col gap-5 absolute left-0 top-12 z-40 w-full bg-zinc-900 text-white p-4">
              <Link href="#home" className="hover:text-gray-300">Home</Link>
              <Link href="#about" className=" hover:text-gray-300">About</Link>
              <Link href="#projects" className="hover:text-gray-300">Projects</Link>
              <Link href="#skills" className="hover:text-gray-300">Skills</Link>
            </nav>
          )}
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <LuMail className="h-6 w-6 cursor-pointer" />
            </AlertDialogTrigger>
            <MailForm />
          </AlertDialog>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Navbar;
