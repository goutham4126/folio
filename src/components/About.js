import { MdLocationOn, MdWork, MdStar } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import Link from "next/link";

function About() {
  return (
    <div className="text-gray-600 bg-white px-5 sm:px-8">
      <div className="container py-12 mx-auto flex flex-col space-y-5">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Card className="flex flex-col p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <FaCode className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Skills</h2>
                <ul className="text-gray-400 list-disc list-inside">
                  <li>Proficient in Next.js, React.js, React Native, Tailwind CSS</li>
                  <li>Experience with Node.js, MongoDB, JavaScript</li>
                  <li>Programming Languages: C, C++, Python, SQL</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <MdWork className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Professional Experience</h2>
                <ul className="text-gray-400 list-disc list-inside">
                  <li>MERN Stack Mentor, mentoring over 50 students</li>
                  <li>
                    Frontend Developer at Tutly, 
                    <Link href="https://www.tutly.in" className="text-blue-500 hover:underline"> www.tutly.in</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Card className="flex flex-col p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <MdStar className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Achievements</h2>
                <ul className="text-gray-400 list-disc list-inside">
                  <li>Winner of Krithoathon 2.0 Hackathon</li>
                  <li>Consolation prize at Google Solution Challenge</li>
                  <li>Finalist in Octcoder Contest</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <MdLocationOn className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-gray-900 text-lg">Contact</h2>
                <ul className="text-gray-400 list-disc list-inside">
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
