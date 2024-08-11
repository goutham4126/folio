import Link from "next/link";
function Navbar() {

  return (
    <div className="flex justify-between items-center mt-2 sm:-mt-5">
      <div className="hidden sm:flex m-5 -rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20"/>
      </div>
        <nav className="text-sm font-semibold flex mx-auto items-center gap-6 md:gap-10 px-8 py-3 rounded-md bg-zinc-700">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
        </nav>
      <div className="hidden sm:flex m-5 rotate-45">
        <img src="https://i.postimg.cc/QMVq5zJf/d0b74027701dc50f378c6469a9a0a0c5-removebg-preview.png" className="w-20"/>
      </div>
    </div>
  );
}

export default Navbar;
