import { MdLocationOn, MdWork, MdStar } from "react-icons/md";
import { FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="text-gray-600 bg-white px-5 sm:px-0">
      <div className="container py-12 mx-auto flex flex-wrap">
        {/* Skills Section */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FaCode className="w-10 h-10" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-bold text-gray-900 mb-1 text-lg">Skills</h2>
              <p className="text-gray-400">
                Experienced in modern web development with proficiency in frontend and backend technologies. 
              </p>
            </div>
          </div>
        </div>

        {/* Experiences Section */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <MdWork className="w-10 h-10" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
             <h2 className="font-bold text-gray-900 mb-1 text-lg">Professional Experience</h2>
              <p className="text-gray-400">
                Over 2 years of experience working with various teams and projects in hackathons. 
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <MdStar className="w-10 h-10" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold text-gray-900 mb-1 text-lg">Achievements</h2>
                <p className="text-gray-400">
                 Winners at krithoathon 2024,Consolation price at GDSC solutions.
               </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex relative pb-3 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <MdLocationOn className="w-10 h-10" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
             <h2 className="font-bold text-gray-900 mb-1 text-lg">Contact</h2>
              <p className="text-gray-400">
                Feel free to reach out for any collaborations or inquiries. You can contact me via :<span className="text-gray-500"> goutham4126@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
