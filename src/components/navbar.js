function Navbar() {
  return (
    <marquee className="relative bg-gray-50 px-6 py-2.5 sm:px-3.5 z-50">
      <div className="flex flex-row items-center gap-x-4">
        <p className="text-sm text-gray-900">
          <strong className="font-semibold mr-4">
            All information presented here is accurate to the best of my knowledge.
          </strong>{" "}
          If you’d like to connect or learn more, feel free to reach out !
        </p>
        <p>
          <a
            href="mailto:goutham4126@gmail.com"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Contact Me <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </marquee>
  );
}

export default Navbar;
