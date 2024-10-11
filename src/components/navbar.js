"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden sm:flex flex-row justify-center p-4 mx-5">
          <nav className="font-medium text-sm flex gap-4 md:gap-10 p-4 rounded-md bg-slate-500 px-5">
            <Link href="#home" className="hover:text-white">Home</Link>
            <Link href="#projects" className="hover:text-white">Projects</Link>
            <Link href="#skills" className="hover:text-white">Skills</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link> 
          </nav>
      </div>
      <div className="sm:hidden flex justify-between items-center p-4 bg-slate-200 text-black md:text-white md:bg-black">
        <div className="flex items-center">
          {
            open ?
            <RxCross2 className="h-6 w-6 cursor-pointer" onClick={() => setOpen(false)}/>:
            <IoMenu className="h-6 w-6 cursor-pointer"
              onClick={() => setOpen(true)}/>
          }
          {open && (
            <nav className="flex flex-col gap-3 absolute left-0 top-12 z-40 w-full bg-zinc-900 inset-0 text-white p-4">
              <Link href="#home" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2.5 px-5">Home</Link>
              <Link href="#projects" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2 px-4">Projects</Link>
              <Link href="#skills" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2 px-4">Skills</Link>
              <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2 px-4">Contact</Link>
              <Link href="#about" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2 px-4">About</Link>
              <Link href="#education" onClick={() => setOpen(false)} className="hover:text-gray-300 m-1 bg-slate-700 rounded-xl py-2 px-4">Education</Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
