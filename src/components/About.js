import { MdLocationOn, MdWork, MdStar } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import Link from "next/link";

function About() {
  return (
    <div className="text-gray-800 bg-gray-50 px-5 sm:px-8 transition duration-300">
      <div className="container mx-auto flex flex-col">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">About Me</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <Card className="flex flex-col p-3 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center shadow-md">
                <FaCode className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Skills</h2>
                <ul className="text-gray-600 list-disc list-inside text-sm mt-2">
                  <li>Proficient in Next.js, React.js, React Native, Tailwind CSS</li>
                  <li>Experience with Node.js, MongoDB, JavaScript</li>
                  <li>Programming Languages: C, C++, Python, SQL</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col p-3 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center shadow-md">
                <MdWork className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Professional Experience</h2>
                <ul className="text-gray-600 list-disc list-inside text-sm mt-2">
                  <li>MERN Stack Mentor, mentoring over 50 students</li>
                  <li>
                    Frontend Developer at Tutly, 
                    <Link href="https://www.tutly.in" className="text-blue-600 hover:underline"> www.tutly.in</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <Card className="flex flex-col p-3 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg hover:shadow-2xl">
            <div className="flex flex-col md:flex-row  gap-5 items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center shadow-md">
                <MdStar className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Achievements</h2>
                <ul className="text-gray-600 list-disc text-sm list-inside mt-2">
                  <li>Winner of Krithoathon 2.0 Hackathon</li>
                  <li>Consolation prize at Google Solution Challenge</li>
                  <li>Finalist in Octcoder Contest</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col p-3 shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center shadow-md">
                <MdLocationOn className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Contact</h2>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-2">
                  <li>Email: <span className="text-gray-500">goutham4126@gmail.com</span></li>
                  <li>Phone: <span className="text-gray-500">+91 9160804126</span></li>
                  <li>Location: <span className="text-gray-500">Hyderabad, India</span></li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default About;
